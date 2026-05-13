import { useMemo, useState } from 'react'
import type { Lesson } from '../data/curriculum'

type Props = {
  lesson: Lesson
  completed: boolean
  onComplete: () => void
}

export function LessonView({ lesson, completed, onComplete }: Props) {
  const [showDeveloper, setShowDeveloper] = useState(true)
  const [openAnswers, setOpenAnswers] = useState<Record<string, boolean>>({})

  const jargonMap = useMemo(() => lesson.jargon.map((item) => item.term).join(', '), [lesson])

  return (
    <article className="lesson-card">
      <div className="lesson-hero">
        <div>
          <p className="eyebrow">{lesson.module} · {lesson.difficulty} · {lesson.duration}</p>
          <h1>{lesson.title}</h1>
          <p className="why">{lesson.whyItMatters}</p>
        </div>
        <button className={completed ? 'done-button completed' : 'done-button'} onClick={onComplete}>
          {completed ? '✓ Completed' : 'Mark complete'}
        </button>
      </div>

      <section className="source-pills" aria-label="source focus">
        {lesson.sourceFocus.map((source) => <span key={source}>{source}</span>)}
      </section>

      <section className="two-column">
        <div className="explain-box simple">
          <h2>Explain it like I know nothing</h2>
          <p>{lesson.dumbExplanation}</p>
        </div>
        <div className="explain-box developer">
          <div className="section-heading-row">
            <h2>Developer explanation</h2>
            <button className="tiny-button" onClick={() => setShowDeveloper((v) => !v)}>{showDeveloper ? 'Hide' : 'Show'}</button>
          </div>
          {showDeveloper && <p>{lesson.developerExplanation}</p>}
        </div>
      </section>

      <section>
        <h2>Jargon decoder</h2>
        <p className="muted">Terms in this lesson: {jargonMap}</p>
        <div className="glossary-grid">
          {lesson.jargon.map((item) => (
            <details className="glossary-term" key={item.term}>
              <summary>{item.term}</summary>
              <p><strong>Meaning:</strong> {item.meaning}</p>
              <p><strong>Use case:</strong> {item.useCase}</p>
            </details>
          ))}
        </div>
      </section>

      {lesson.formulas && lesson.formulas.length > 0 && (
        <section>
          <h2>Formula breakdown</h2>
          <div className="formula-list">
            {lesson.formulas.map((formula) => (
              <div className="formula-card" key={formula.name}>
                <h3>{formula.name}</h3>
                <code>{formula.expression}</code>
                <h4>What every symbol means</h4>
                <ul>{formula.breakdown.map((line) => <li key={line}>{line}</li>)}</ul>
                <h4>Where it comes from</h4>
                <ol>{formula.derivation.map((line) => <li key={line}>{line}</li>)}</ol>
              </div>
            ))}
          </div>
        </section>
      )}

      {lesson.algorithm && (
        <section className="algorithm-card">
          <h2>Algorithm: {lesson.algorithm.name}</h2>
          <p>{lesson.algorithm.intuition}</p>
          <h3>Step-by-step</h3>
          <ol>{lesson.algorithm.steps.map((step) => <li key={step}>{step}</li>)}</ol>
          <h3>Implementation-ready pseudocode</h3>
          <pre>{lesson.algorithm.pseudocode.join('\n')}</pre>
        </section>
      )}

      <section>
        <h2>Different approaches</h2>
        <div className="approach-grid">
          {lesson.approaches.map((approach) => (
            <div className="approach-card" key={approach.name}>
              <h3>{approach.name}</h3>
              <p><strong>Use when:</strong> {approach.whenToUse}</p>
              <p><strong>Tradeoff:</strong> {approach.tradeoff}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Common mistake areas</h2>
        <div className="mistake-list">
          {lesson.commonMistakes.map((item) => (
            <div className="mistake-card" key={item.mistake}>
              <strong>⚠ {item.mistake}</strong>
              <p>{item.avoid}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="worked-example">
        <h2>Worked example</h2>
        <p><strong>Problem:</strong> {lesson.workedExample.problem}</p>
        <p><strong>Approach:</strong> {lesson.workedExample.approach}</p>
        <p><strong>Why this approach:</strong> {lesson.workedExample.why}</p>
        <ol>{lesson.workedExample.steps.map((step) => <li key={step}>{step}</li>)}</ol>
      </section>

      <section>
        <h2>Practice ladder: simple → complex</h2>
        <div className="practice-grid">
          {lesson.practice.map((item) => {
            const key = `${lesson.id}-${item.level}`
            return (
              <div className="practice-card" key={key}>
                <span className={`level ${item.level.toLowerCase()}`}>{item.level}</span>
                <p>{item.prompt}</p>
                <button className="tiny-button" onClick={() => setOpenAnswers((prev) => ({ ...prev, [key]: !prev[key] }))}>
                  {openAnswers[key] ? 'Hide hint' : 'Show hint'}
                </button>
                {openAnswers[key] && <p className="hint">Hint: {item.hint}</p>}
              </div>
            )
          })}
        </div>
      </section>

      <QuizCard questions={lesson.quiz} />

      <section>
        <h2>Go deeper in the sources</h2>
        <ul className="reference-list">
          {lesson.references.map((ref) => <li key={ref.url}><a href={ref.url} target="_blank" rel="noreferrer">{ref.label}</a></li>)}
        </ul>
      </section>
    </article>
  )
}

function QuizCard({ questions }: { questions: Lesson['quiz'] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({})

  return (
    <section>
      <h2>Check your learning</h2>
      <div className="quiz-list">
        {questions.map((q, qi) => {
          const selected = answers[qi]
          return (
            <div className="quiz-card" key={q.question}>
              <h3>{qi + 1}. {q.question}</h3>
              <div className="quiz-options">
                {q.options.map((option, oi) => {
                  const isSelected = selected === oi
                  const isCorrect = q.answer === oi
                  const reveal = selected !== undefined
                  return (
                    <button
                      key={option}
                      className={`quiz-option ${isSelected ? 'selected' : ''} ${reveal && isCorrect ? 'correct' : ''} ${reveal && isSelected && !isCorrect ? 'wrong' : ''}`}
                      onClick={() => setAnswers((prev) => ({ ...prev, [qi]: oi }))}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
              {selected !== undefined && <p className="quiz-explanation">{selected === q.answer ? 'Correct. ' : 'Not quite. '}{q.explanation}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
