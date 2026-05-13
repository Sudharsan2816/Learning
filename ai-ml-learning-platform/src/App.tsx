import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { LessonView } from './components/LessonView'
import { curriculum, learningPath, expertOutcomes, masteryLevels, capstoneProjects, domainCoverage, faangReadinessTrack, honestMasteryPromise } from './data/curriculum'

const STORAGE_KEY = 'ai-ml-learning-platform-progress'

function App() {
  const [activeId, setActiveId] = useState(curriculum[0].id)
  const [query, setQuery] = useState('')
  const [completed, setCompleted] = useState<string[]>(() => {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed))
    } catch {
      // Progress persistence is helpful but non-critical. Some browsers block storage.
    }
  }, [completed])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return curriculum
    return curriculum.filter((lesson) => {
      const haystack = [
        lesson.title,
        lesson.module,
        lesson.difficulty,
        lesson.whyItMatters,
        lesson.dumbExplanation,
        lesson.developerExplanation,
        lesson.funExplanation,
        ...lesson.jargon.map((j) => `${j.term} ${j.meaning} ${j.useCase}`),
        ...lesson.sourceFocus,
      ].join(' ').toLowerCase()
      return haystack.includes(q)
    })
  }, [query])

  const activeLesson = filtered.find((lesson) => lesson.id === activeId) || filtered[0] || curriculum[0]
  const completedCount = completed.length
  const progress = Math.round((completedCount / curriculum.length) * 100)

  function toggleComplete(id: string) {
    setCompleted((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id])
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">μ</span>
          <div>
            <strong>AI Zero→Builder</strong>
            <small>Beginner-first ML/LLM school</small>
          </div>
        </div>

        <div className="progress-card">
          <div className="progress-row"><span>Progress</span><strong>{progress}%</strong></div>
          <div className="progress-track"><div style={{ width: `${progress}%` }} /></div>
          <small>{completedCount}/{curriculum.length} lessons completed</small>
        </div>

        <label className="search-box">
          Search concepts or jargon
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="gradient, RAG, token..." />
        </label>

        <nav className="lesson-nav" aria-label="Lessons">
          {filtered.map((lesson) => (
            <button
              key={lesson.id}
              className={lesson.id === activeLesson.id ? 'active' : ''}
              onClick={() => setActiveId(lesson.id)}
            >
              <span>{completed.includes(lesson.id) ? '✓' : '○'}</span>
              <div>
                <strong>{lesson.title}</strong>
                <small>{lesson.module} · {lesson.duration}</small>
              </div>
            </button>
          ))}
        </nav>
      </aside>

      <main className="content">
        <section className="top-panel">
          <div>
            <p className="eyebrow">Personal curriculum generated from your source list</p>
            <h2>Learn AI/ML/LLMs without Googling every word</h2>
            <p>This platform teaches each idea three ways: plain-language, developer-level, and a fun anime/movie analogy version. Every lesson includes jargon decoding, formulas, algorithms, mistakes, examples, practice, and quizzes.</p>
          </div>
          <div className="path-card">
            <h3>Learning path</h3>
            <ol>{learningPath.map((step) => <li key={step}>{step}</li>)}</ol>
          </div>
        </section>

        <section className="mastery-panel">
          <div className="mastery-intro">
            <p className="eyebrow">Expert outcome target</p>
            <h2>This is not a video playlist. It is a mastery system.</h2>
            <p>To become expert, you must be able to explain, derive, implement, debug, compare, and ship. The platform is structured around those proofs of mastery.</p>
          </div>

          <div className="promise-box">
            <h3>Honest answer about full-domain + FAANG readiness</h3>
            <p><strong>Current MVP:</strong> {honestMasteryPromise.current}</p>
            <p><strong>Target:</strong> {honestMasteryPromise.target}</p>
            <p><strong>Reality check:</strong> {honestMasteryPromise.warning}</p>
          </div>

          <div className="outcome-grid">
            {expertOutcomes.map((outcome) => <div className="outcome-card" key={outcome}>✓ {outcome}</div>)}
          </div>

          <div className="mastery-grid">
            {masteryLevels.map((item) => (
              <div className="mastery-card" key={item.level}>
                <h3>{item.level}</h3>
                <p>{item.proof}</p>
              </div>
            ))}
          </div>

          <div className="coverage-section">
            <h3>Whole-domain coverage map</h3>
            <div className="coverage-grid">
              {domainCoverage.map((area) => (
                <div className="coverage-card" key={area.area}>
                  <div className="coverage-title-row">
                    <h4>{area.area}</h4>
                    <span>{area.status}</span>
                  </div>
                  <p>{area.topics.join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="coverage-section">
            <h3>FAANG-style interview readiness track</h3>
            <div className="interview-grid">
              {faangReadinessTrack.map((item) => (
                <div className="interview-card" key={item.round}>
                  <h4>{item.round}</h4>
                  <p><strong>Requirement:</strong> {item.requirement}</p>
                  <p><strong>Platform plan:</strong> {item.platformSupport}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="capstone-section">
            <h3>Capstone projects that prove expertise</h3>
            <div className="capstone-grid">
              {capstoneProjects.map((project) => (
                <div className="capstone-card" key={project.title}>
                  <h4>{project.title}</h4>
                  <p>{project.goal}</p>
                  <div className="skill-tags">{project.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LessonView
          lesson={activeLesson}
          completed={completed.includes(activeLesson.id)}
          onComplete={() => toggleComplete(activeLesson.id)}
        />
      </main>
    </div>
  )
}

export default App
