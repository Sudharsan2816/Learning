import { useMemo, useState } from 'react'
import { apiCatalog, apiLearningModules, apiPhaseRules } from '../data/apiCatalog'
import type { ApiCatalogItem } from '../data/apiCatalog'

type Props = {
  triedApiIds: string[]
  onMarkTried: (id: string) => void
}

type ApiResult = {
  status: 'idle' | 'loading' | 'success' | 'error'
  url?: string
  data?: unknown
  error?: string
}

function getInitialInput(api: ApiCatalogItem) {
  return api.examples?.[0]?.value || ''
}

function stringifyJson(value: unknown) {
  return JSON.stringify(value, null, 2)
}

export function ApiPlayground({ triedApiIds, onMarkTried }: Props) {
  const [activeApiId, setActiveApiId] = useState(apiCatalog[0].id)
  const [inputs, setInputs] = useState<Record<string, string>>(() =>
    Object.fromEntries(apiCatalog.map((api) => [api.id, getInitialInput(api)])),
  )
  const [result, setResult] = useState<ApiResult>({ status: 'idle' })
  const [filter, setFilter] = useState('')

  const activeApi = apiCatalog.find((api) => api.id === activeApiId) || apiCatalog[0]
  const activeInput = inputs[activeApi.id] || ''
  const progress = Math.round((triedApiIds.length / apiCatalog.length) * 100)

  const filteredApis = useMemo(() => {
    const q = filter.trim().toLowerCase()
    if (!q) return apiCatalog
    return apiCatalog.filter((api) => [
      api.name,
      api.category,
      api.difficulty,
      api.teaches,
      api.beginnerExplanation,
      api.developerExplanation,
      api.funExplanation,
      ...api.concepts,
    ].join(' ').toLowerCase().includes(q))
  }, [filter])

  async function runApi(api = activeApi) {
    const url = api.buildUrl(inputs[api.id] || '')
    setResult({ status: 'loading', url })

    try {
      const controller = new AbortController()
      const timeoutId = window.setTimeout(() => controller.abort(), 12000)
      const response = await fetch(url, { signal: controller.signal })
      window.clearTimeout(timeoutId)

      const contentType = response.headers.get('content-type') || ''
      const data = contentType.includes('application/json') ? await response.json() : await response.text()

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${typeof data === 'string' ? data.slice(0, 120) : response.statusText}`)
      }

      setResult({ status: 'success', url, data })
      onMarkTried(api.id)
    } catch (error) {
      const message = error instanceof Error && error.name === 'AbortError'
        ? 'Request timed out after 12 seconds. Try again or choose another API.'
        : error instanceof Error
          ? error.message
          : 'Unknown API error'
      setResult({ status: 'error', url, error: message })
    }
  }

  return (
    <section className="api-playground" id="api-playground">
      <div className="api-hero">
        <div>
          <p className="eyebrow">Phase 2 · APIs from the public-apis repo</p>
          <h2>API Playground: learn by calling real services</h2>
          <p>
            This upgrade turns API theory into practice. Learners can pick a curated public API, run a real request,
            inspect the JSON, and understand how raw data becomes UI.
          </p>
        </div>
        <div className="api-progress-card">
          <span>APIs tried</span>
          <strong>{triedApiIds.length}/{apiCatalog.length}</strong>
          <div className="progress-track"><div style={{ width: `${progress}%` }} /></div>
          <small>{progress}% playground progress</small>
        </div>
      </div>

      <div className="api-learning-grid">
        <div className="api-info-card">
          <h3>Phase 2 learning modules</h3>
          <ol>{apiLearningModules.map((module) => <li key={module}>{module}</li>)}</ol>
        </div>
        <div className="api-info-card safety">
          <h3>Safety rules</h3>
          <ul>{apiPhaseRules.map((rule) => <li key={rule}>{rule}</li>)}</ul>
        </div>
      </div>

      <label className="api-filter">
        Search APIs by concept
        <input value={filter} onChange={(event) => setFilter(event.target.value)} placeholder="JSON, weather, query, anime..." />
      </label>

      <div className="api-workbench">
        <aside className="api-list" aria-label="API catalog">
          {filteredApis.map((api) => (
            <button
              key={api.id}
              className={api.id === activeApi.id ? 'active' : ''}
              onClick={() => {
                setActiveApiId(api.id)
                setResult({ status: 'idle' })
              }}
            >
              <span>{triedApiIds.includes(api.id) ? '✓' : '○'}</span>
              <div>
                <strong>{api.name}</strong>
                <small>{api.category} · {api.difficulty}</small>
              </div>
            </button>
          ))}
        </aside>

        <article className="api-detail-card">
          <div className="api-title-row">
            <div>
              <p className="eyebrow">{activeApi.category} · {activeApi.difficulty} · {activeApi.auth}</p>
              <h3>{activeApi.name}</h3>
              <p>{activeApi.teaches}</p>
            </div>
            <a className="docs-link" href={activeApi.docsUrl} target="_blank" rel="noreferrer">Docs</a>
          </div>

          <div className="source-note"><strong>Repo usage:</strong> {activeApi.sourceRepoStatus}</div>

          <div className="concept-pills">
            {activeApi.concepts.map((concept) => <span key={concept}>{concept}</span>)}
          </div>

          <div className="api-explanations">
            <div><h4>Simple</h4><p>{activeApi.beginnerExplanation}</p></div>
            <div><h4>Developer</h4><p>{activeApi.developerExplanation}</p></div>
            <div><h4>Fun version</h4><p>{activeApi.funExplanation}</p></div>
          </div>

          {activeApi.inputLabel && (
            <label className="api-input">
              {activeApi.inputLabel}
              <input
                value={activeInput}
                onChange={(event) => setInputs((prev) => ({ ...prev, [activeApi.id]: event.target.value }))}
                placeholder={activeApi.inputPlaceholder}
              />
            </label>
          )}

          {activeApi.examples && (
            <div className="example-buttons">
              {activeApi.examples.map((example) => (
                <button key={example.label} onClick={() => setInputs((prev) => ({ ...prev, [activeApi.id]: example.value }))}>
                  {example.label}
                </button>
              ))}
            </div>
          )}

          <div className="endpoint-box">
            <span>Endpoint preview</span>
            <code>{activeApi.buildUrl(activeInput)}</code>
          </div>

          <div className="api-actions">
            <button className="run-api-button" onClick={() => void runApi()} disabled={result.status === 'loading'}>
              {result.status === 'loading' ? 'Fetching…' : 'Run API request'}
            </button>
            <button className="tiny-button" onClick={() => onMarkTried(activeApi.id)}>
              Mark practiced
            </button>
          </div>

          <div className="practice-callout">
            <p><strong>How to render it:</strong> {activeApi.renderHint}</p>
            <p><strong>Practice task:</strong> {activeApi.practiceTask}</p>
            <p><strong>Safety note:</strong> {activeApi.safetyNote}</p>
          </div>

          <div className="response-panel">
            <div className="section-heading-row">
              <h4>Live response</h4>
              {result.url && <small>{result.url}</small>}
            </div>
            {result.status === 'idle' && <p className="muted">Run the request to see real JSON here.</p>}
            {result.status === 'loading' && <p className="muted">Calling the API…</p>}
            {result.status === 'error' && <p className="api-error">{result.error}</p>}
            {result.status === 'success' && <pre>{stringifyJson(result.data)}</pre>}
          </div>
        </article>
      </div>
    </section>
  )
}
