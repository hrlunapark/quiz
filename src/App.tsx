import { useState } from 'react'
import { quizQuestions, type ResultKey, resultPlaceholders } from './quizData'
import './App.css'

// Map of result keys to their corresponding images
const resultImages: Record<ResultKey, string> = {
  Tilde1: '/lunaparkmlquiz/assets/results/tilde1.png',
  Tilde2: '/lunaparkmlquiz/assets/results/tilde2.png',
  Recraft1: '/lunaparkmlquiz/assets/results/recraft1.png', // Update this
  Recraft2: '/lunaparkmlquiz/assets/results/recraft2.png', // Update this
  Tzafon1: '/lunaparkmlquiz/assets/results/tzafon1.png', // Correct path
  Tzafon2: '/lunaparkmlquiz/assets/results/tzafon2.png', // Correct path
  Atla: '/lunaparkmlquiz/assets/results/atla.png',
  Safer: '/lunaparkmlquiz/assets/results/safer.png', // Correct path
  Eternis: '/lunaparkmlquiz/assets/results/eternis.png',
  Epoch: '/lunaparkmlquiz/assets/results/epoch.png', // Correct path
  Metr: '/lunaparkmlquiz/assets/results/metr.png',
};

const telegramLinks = {
  Eternis: "https://t.me/masheau",
  Tzafon1: "https://t.me/masheau",
  Tzafon2: "https://t.me/masheau",
  Tilde1: "https://t.me/masheau",
  Tilde2: "https://t.me/masheau",
  Atla: "https://t.me/masheau",
  Metr: "https://t.me/masheau",
  Epoch: "https://t.me/owlkov",
  Recraft1: "https://t.me/owlkov",
  Recraft2: "https://t.me/owlkov",
  Safer: "https://t.me/AlbinaMakarova",
};

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
    const shareText = `Я — ${result.title} в квизе "Какая ты ML-вакансия Лунапарка?" Пройди и ты!`;
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
        <h2>{result.header}</h2>
        <img src={resultImages[key]} alt={result.title} />
        {(() => {
          const desc = result.description || '';
          const [first, ...rest] = desc.split('!');
          const restText = rest.join('!').trim();
          let beforeReq = restText;
          let reqBlock = '';
          if (restText.includes('Требования:')) {
            [beforeReq, reqBlock] = restText.split('Требования:');
          }
          let reqList: string[] = [];
          let afterReq = '';
          if (reqBlock) {
            // Обрезаем требования по ключевым словам
            const reqEndIdx = reqBlock.search(/(Зарплата|Условия|Вилка|Платят)/i);
            let reqOnly = reqBlock;
            if (reqEndIdx !== -1) {
              reqOnly = reqBlock.slice(0, reqEndIdx);
              afterReq = reqBlock.slice(reqEndIdx).trim();
            }
            reqList = reqOnly
              .split(/[;•\n]/)
              .map(s => s.trim().replace(/^[-—•\s]+/, '')) // убираем дефисы, тире, точки и пробелы в начале
              .filter(Boolean);
          }
          return <div className="result-description-block">
            <p><b>{first.trim()}!</b></p>
            {beforeReq && <p>{beforeReq.trim()}</p>}
            {reqList.length > 0 && (
              <div style={{textAlign: 'left', margin: '18px 0 10px 0'}}>
                <b>Требования:</b>
                <ul style={{margin: '8px 0 0 18px'}}>
                  {reqList.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            )}
            {afterReq && <p>{afterReq}</p>}
          </div>;
        })()}
        <div className="result-buttons">
          <div className="result-buttons-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <a className="result-btn result-btn-main" href={telegramLinks[result.title as keyof typeof telegramLinks]} target="_blank" rel="noopener noreferrer" style={{ flex: '1', textAlign: 'center', margin: '5px' }}>Откликнуться</a>
            <a className="result-btn result-btn-tg" href="https://t.me/hrlunapark" target="_blank" rel="noopener noreferrer" style={{ flex: '1', textAlign: 'center', margin: '5px' }}>Больше вакансий</a>
          </div>
          <div className="result-buttons-row" style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="result-btn" onClick={handleShare} style={{ flex: '1', textAlign: 'center', margin: '5px' }}>Поделиться результатом</button>
          </div>
          <div className="result-buttons-row" style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="result-btn" onClick={() => { setCurrent(0); setAnswers([]); setShowResult(false); }} style={{ flex: '1', textAlign: 'center', margin: '5px' }}>Пройти ещё раз</button>
          </div>
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
