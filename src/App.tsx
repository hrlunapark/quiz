import { useState } from 'react'
import { quizQuestions, type ResultKey, resultPlaceholders } from './quizData'
import './App.css'

// Map of result keys to their corresponding images
const resultImages: Record<ResultKey, string> = {
  Tilde1: '/lunaparkmlquiz/assets/results/tilde1.png',
  Tilde2: '/lunaparkmlquiz/assets/results/tilde2.png',
  Recraft1: '/lunaparkmlquiz/assets/results/recraft1.png',
  Recraft2: '/lunaparkmlquiz/assets/results/recraft2.png',
  Tzafon1: '/lunaparkmlquiz/assets/results/recraft1.png',
  Tzafon2: '/lunaparkmlquiz/assets/results/tzafon2.png',
  Atla: '/lunaparkmlquiz/assets/results/atla.png',
  Safer: '/lunaparkmlquiz/assets/results/recraft1.png',
  Eternis: '/lunaparkmlquiz/assets/results/eternis.png',
  Epoch: '/lunaparkmlquiz/assets/results/recraft1.png',
  Metr: '/lunaparkmlquiz/assets/results/metr.png',
}

function App() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [started, setStarted] = useState(false)
  const [shareMsg, setShareMsg] = useState('');

  if (!started) {
    return (
      <div className="start-page">
        <h1 className="start-title">Какая ты ML-вакансия Лунапарка?</h1>
        <div className="start-subtitle">Мы планировали написать дайджест, но вместо этого сделали тест</div>
        <button className="start-btn" onClick={() => setStarted(true)}>Пройти тест</button>
        <a className="vacancy-link" href="https://t.me/hrlunapark" target="_blank" rel="noopener noreferrer">Посмотреть вакансии</a>
      </div>
    )
  }

  const handleAnswer = (answerIdx: number) => {
    let newAnswers = [...answers];
    newAnswers[current] = answerIdx;
    if (current < quizQuestions.length - 1) {
      setAnswers(newAnswers.slice(0, current + 1));
      setCurrent(current + 1);
    } else {
      setAnswers(newAnswers.slice(0, quizQuestions.length));
      setShowResult(true);
    }
  }

  const handleBack = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setStarted(false);
      setCurrent(0);
      setAnswers([]);
      setShowResult(false);
    }
  }

  const getResult = () => {
    const score: Partial<Record<ResultKey, number>> = {}
    answers.forEach((ansIdx, qIdx) => {
      const points = quizQuestions[qIdx].answers[ansIdx].points
      Object.entries(points).forEach(([key, value]) => {
        score[key as ResultKey] = (score[key as ResultKey] || 0) + (value || 0)
      })
    })
    // Find the result with the highest score
    let maxKey: ResultKey = 'Tilde1'
    let maxScore = -Infinity as number
    (Object.keys(resultPlaceholders) as ResultKey[]).forEach((key: ResultKey) => {
      if ((score[key] || 0) > maxScore) {
        maxScore = score[key] || 0
        maxKey = key
      }
    })
    return { result: resultPlaceholders[maxKey], key: maxKey }
  }

  if (showResult) {
    const { result, key } = getResult()
    const shareText = `Я — ${result.title} в квизе "Какая ты ML-вакансия Лунапарка?" Пройди и ты: https://lunapark.agency/quiz`;
    const handleShare = async () => {
      if (navigator.share) {
        try {
          await navigator.share({ text: shareText });
        } catch {}
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareText);
        setShareMsg('Скопировано!');
        setTimeout(() => setShareMsg(''), 2000);
      }
    };
    return (
      <div className="result">
        <h2>Ваш результат: {result.title}</h2>
        <img src={resultImages[key]} alt={result.title} />
        <p>{result.description}</p>
        <div className="result-buttons">
          <a className="result-btn result-btn-main" href="https://t.me/hrlunapark" target="_blank" rel="noopener noreferrer">Откликнуться на вакансию</a>
          <div className="result-buttons-row">
            <a className="result-btn result-btn-tg" href="https://t.me/hrlunapark" target="_blank" rel="noopener noreferrer">Телеграм</a>
            <a className="result-btn result-btn-jobboard" href="https://lunapark.agency/jobboard" target="_blank" rel="noopener noreferrer">Джобборд</a>
          </div>
          <button className="result-btn" onClick={handleShare}>Поделиться результатом</button>
          <button className="result-btn" onClick={() => { setCurrent(0); setAnswers([]); setShowResult(false); }}>Пройти ещё раз</button>
        </div>
        {shareMsg && <div className="share-msg">{shareMsg}</div>}
      </div>
    )
  }

  const q = quizQuestions[current]
  return (
    <div className="quiz">
      <h2>{q.question}</h2>
      <ul>
        {q.answers.map((a, idx) => (
          <li key={idx}>
            <button
              onClick={() => handleAnswer(idx)}
              style={answers[current] === idx ? { outline: '2px solid #FFE066', fontWeight: 700 } : {}}
            >
              {a.text}
            </button>
          </li>
        ))}
      </ul>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2.2rem', marginBottom: '0.5rem' }}>
        <button
          className="back-btn"
          onClick={handleBack}
          aria-label="Назад"
          style={{ fontSize: 0, padding: 0 }}
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: 'auto' }}>
            <path d="M22 9L13 18L22 27" stroke="#232323" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="progress">Вопрос {current + 1} из {quizQuestions.length}</div>
      </div>
    </div>
  )
}

export default App
