export type ResultKey =
  | 'Tilde1'
  | 'Tilde2'
  | 'Recraft1'
  | 'Recraft2'
  | 'Tzafon1'
  | 'Tzafon2'
  | 'Atla'
  | 'Safer'
  | 'Eternis'
  | 'Epoch'
  | 'Metr';

export interface QuizQuestion {
  question: string;
  answers: { text: string; points: Partial<Record<ResultKey, number>> }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: 'Чем вы занимаетесь в команде выживших в зомби-апокалипсисе?',
    answers: [
      { text: 'Чиню генератор, ясное дело. Что может быть важнее?', points: { Tilde2: 1, Recraft2: 1, Tzafon2: 1 } },
      { text: 'Наблюдаю за поведением зомби и ищу закономерности в их перемещениях.', points: { Atla: 1, Metr: 1, Epoch: 1 } },
      { text: 'Нашёл/-ла радиоприёмник и координируюсь с другими выжившими.', points: { Safer: 1, Tzafon1: 1, Eternis: 1 } },
      { text: 'Беру винтовку и иду добывать еду — кто-то же должен. ', points: { Recraft1: 1, Tzafon1: 1, Metr: 1 } },
      { text: 'Всё записываю. Если мы выживем — это будет исторический документ. Если нет — тем более.', points: { Epoch: 1, Recraft1: 1 } },
    ],
  },
  {
    question: 'За вами ведётся охота — может быть, это мафия, а может, Интерпол. В любом случае, какой у вас план?',
    answers: [
      { text: 'Уйду в лес, построю хижину, буду топить печку и держать кур, пережду.', points: { Safer: 1, Epoch: 1 } },
      { text: 'Попробую попасть под программу защиты свидетелей и тихо уехать в другую страну.', points: { Atla: 1, Tilde2: 1, Recraft1: 1 } },
      { text: 'У меня есть связи, я уже сделал/-а себе поддельный паспорт и строю новую бизнес-империю с нуля.', points: { Eternis: 1, Metr: 1, Tzafon1: 1 } },
      { text: 'Очень сомневаюсь, что это произойдёт. Никто не знает моего настоящего имени и уж тем более — как я выгляжу. Но если что — у меня есть заготовленный бункер на такой случай.', points: { Tzafon2: 1, Recraft2: 1, Tilde1: 1 } },
    ],
  },
  {
    question: 'Какое вы животное?',
    answers: [
      { text: 'Кошечка.', points: { Tilde1: 1, Recraft1: 1 } },
      { text: 'Белочка.', points: { Tilde2: 1, Recraft2: 1, Tzafon2: 1 } },
      { text: 'Улиточка.', points: { Safer: 1, Epoch: 1 } },
      { text: 'Я инопланетная хтонь.', points: { Eternis: 1, Metr: 1, Tzafon1: 1 } },
      { text: 'Лунапарк, вы в порядке?', points: { Atla: 1 } },
    ],
  },
  {
    question: 'Что, как вам кажется, важнее всего в воспитании детей?',
    answers: [
      { text: 'Привить любопытство и интерес к окружающему миру.', points: { Tilde1: 1, Tzafon2: 1 } },
      { text: 'Научить строить причинно-следственные связи.', points: { Safer: 1, Recraft2: 1 } },
      { text: 'Поддерживать их амбиции и не передавать свои страхи.', points: { Eternis: 1, Tilde1: 1 } },
      { text: 'Создать подходящее окружение — отдать в маткружок, например. А дальше среда всё сделает сама.', points: { Atla: 1, Tilde2: 1 } },
    ],
  },
  {
    question: 'Какой вы системный сигнал?',
    answers: [
      { text: 'SIGINT', points: { Safer: 1, Metr: 1, Epoch: 1 } },
      { text: 'SIGKILL', points: { Recraft2: 1, Tzafon2: 1 } },
      { text: 'SIGSEGV', points: { Tilde1: 1, Recraft1: 1 } },
      { text: 'SIGCONT', points: { Eternis: 1, Tzafon1: 1 } },
      { text: 'SIGUSR1', points: { Atla: 1, Tilde2: 1 } },
    ],
  },
  {
    question: 'Ваш формат вечеринки?',
    answers: [
      { text: 'Кинки-вечеринка в Bay Area.', points: { Eternis: 1, Tilde1: 1 } },
      { text: 'D&D-партия на шесть часов, у меня уже есть персонаж!', points: { Tzafon2: 1, Tilde2: 1 } },
      { text: 'Сидим с друзьями на кухне и обсуждаем судьбу мира до 4 утра.', points: { Metr: 1, Atla: 1, Tzafon1: 1 } },
      { text: 'Я дома. Смотрю сериал и ем мороженое.', points: { Safer: 1, Epoch: 1 } },
      { text: 'Большая вечеринка, где я никого не знаю, но в итоге ухожу с тремя новыми друзьями.', points: { Recraft1: 1, Recraft2: 1 } },
    ],
  },
  {
    question: 'Выберите чаёк.',
    answers: [
      { text: 'Молочный улун', points: { Eternis: 1, Safer: 1 } },
      { text: 'Травяной с имбирём', points: { Tilde1: 1, Tilde2: 1, Tzafon2: 1 } },
      { text: 'English Breakfast / Earl Grey', points: { Metr: 1, Tzafon1: 1 } },
      { text: 'Ромашку, пожалуйста', points: { Epoch: 1, Recraft2: 1 } },
      { text: 'А есть кофе?', points: { Recraft1: 1, Atla: 1 } },
    ],
  },
];

export const resultPlaceholders: Record<ResultKey, { title: string; contact:string, header: string; description: string; image: string }> = {
  Tilde1: { title: "Tilde1",contact: 'masheau', header: 'ML Researcher в Tilde', description: `Вы — ML Researcher в Tilde! 

Tilde — это applied-interpretability стартап. Они делают прикладные инструменты, которые позволяют реальным компаниям понимать и контролировать свои модели. Фаундеры из  Стэнфорда и $8M инвестиций от Khosla Ventures и ангелов из OpenAI/Anthropic на супер-ранней стадии. 

Требования:

Отличный бэкграунд в математике или ML

Или: диплом межнара (IMO/IOI/ICPC) или другой мощный сигнал интеллектуальной одарённости

Или: выдающийся опыт в ML-ресёрче (статьи уровня ICML/NeurIPS, например)

Зарплата $150k–220k + много equity. Офис в США, помогают с визой, возможен ремоут.`,

image: '/quiz/assets/results/tilde1.png' },
  Tilde2: { title: 'Tilde2', contact: 'masheau',header: 'ML Engineer в Tilde', description: `Вы — ML Engineer в Tilde! 

Tilde — это applied-interpretability стартап. Они делают прикладные инструменты, которые позволяют реальным компаниям понимать и контролировать свои модели. Фаундеры из  Стэнфорда и $8M инвестиций от Khosla Ventures и ангелов из OpenAI/Anthropic на супер-ранней стадии. 

Требования:

Опыт тренировки и масштабирования foundation моделей

Опыт запуска и анализа больших ML-экспериментов

Олимпиады, крутые опенсорсные проекты или PhD — большой плюс

Зарплата $150k–220k + много equity. Офис в США, помогают с визой, возможен ремоут.`, 
image: '/quiz/assets/results/tilde2.png' },
  Recraft1: { title: 'Recraft1',contact: 'owlkov', header: 'ML Engineer в Recraft', description: `Вы — ML Engineer в Recraft! 

Recraft — стартап из Лондона, который делает AI-инструмент для дизайнеров. Их собственная text-to-image модель уже успела обойти на арене DALL-E, Midjourney и Flux. Больше 3 миллионов пользователей, недавний Series B раунд на $30M, и очень крутая техническая команда во главе с бывшей главой разработки CatBoost.

Требования:

Опыт работы с большими генеративными моделями (text-to-image, LLM или аудио)

Умение писать чистый, быстрый и масштабируемый код

Требования:

Опыт работы с большими генеративными моделями (text-to-image, LLM или аудио)

Умение писать чистый, быстрый и масштабируемый код

Отличное знание PyTorch и знакомство со state-of-the-art архитектурами

Зарплата $130k–200k + опционы. Офис в Лондоне, релокация по Global Talent.`, 
image: '/quiz/assets/results/recraft1.png' },

Recraft2: { title: 'Recraft2', contact: 'owlkov', header: 'Neural Network Optimization Engineer в Recraft', description: `Вы — Neural Network Optimization Engineer в Recraft!
Recraft — стартап из Лондона, который делает AI-инструмент для дизайнеров. Их собственная text-to-image модель уже успела обойти на арене DALL-E, Midjourney и Flux. Больше 3 миллионов пользователей, недавний Series B раунд на $30M, и очень крутая техническая команда во главе с бывшей главой разработки CatBoost.

Требования:

вы уже оптимизировали инференс нейросетей;
знаете техники квантизации;
 ну очень хорошо разбираетесь в архитектуре GPU, пишете CUDA и знаете Triton. 
    
    Зарплата $130k–200k + опционы. Офис в Лондоне, релокация по Global Talent.`
    , image: '/quiz/assets/results/recraft2.png' },  
    
    
Tzafon1: { title: 'Tzafon1',contact: 'masheau', header: 'ML Researcher / Engineer в Tzafon', description: `Вы — ML Researcher / Engineer в Tzafon! 
Tzafon строит роевой искусственный интеллект — кооперирующихся AI-агентов, которые могут эффективно решать задачи вместе. У них своя foundational модель, R&D-лаборатория с офисами в США и Израиле и $9M инвестиций от ангелов OpenAI, S32 и General Catalyst.

Вы будете заниматься исследованием и разработкой больших ML-моделей, работать с reinforcement learning и претренингом, а ещё — помогать строить мультиагентную систему будущего.

Требования:

Отличное знание PyTorch и CUDA

Опыт в RL, претренинге и оптимизации моделей

Можно быть даже джуном — но с очень сильным бэкграундом (например, медаль межнара)

Вилка $150k–500k + equity, релокация в США или Израиль, иногда возможен ремоут.`, image: '/quiz/assets/results/recraft1.png' },


Tzafon2: { title: 'Tzafon2', contact: 'masheau', header: 'Infrastructure Engineer в Tzafon', description: `Вы — Infrastructure Engineer в Tzafon! 
Tzafon создают роевой искусственный интеллект — миллионы AI-агентов, которые взаимодействуют в реальном времени и решают задачи коллективно. Чтобы это работало, они строят свою инфраструктуру на Rust и добиваются задержки в <100 мс даже при огромных масштабах.

Вы будете оптимизировать взаимодействие между агентами, работать с GPU-архитектурой, Rust, C++, CUDA и масштабируемыми системами.

Требования:

Опыт с low-level разработкой, CUDA, архитектурой GPU

Отличное знание C/C++ и желательно Rust

Навыки работы с распределёнными системами и большими кластерами

Вилка $150k–500k + equity, релокация в США или Израиль, возможен ремоут.`, image: '/quiz/assets/results/tzafon2.png' },

Atla: { title: 'Atla',contact: 'masheau', header: 'Chief Scientist в Atla', description: `Вы — Chief Scientist в Atla! 

Atla — стартап, который делает модели для AI evaluations: они оценивают другие LLM'ы на точность, связность и надёжность. Это помогает разработчикам GenAI-продуктов экономить время и создавать модели, которым можно доверять. В команде — ресёрчеры из OpenAI и успешных AI-стартапов, выпускники MIT, Стэнфорда и Кембриджа.

Требования:

5+ лет релевантного опыта в ML-ресёрче
Авторство SOTA-моделей или сильных публикаций
Опыт в DeepMind, Cohere и других tier-1 лабораториях — большой плюс

Платят $250k–380k + equity. Помогают с визой и релокацией в Лондон.`, image: '/quiz/assets/results/atla.png' },
 


Safer: { title: 'Safer',contact: 'AlbinaMakarova', header: 'Research Engineer в Safer', description: `Вы — Research Engineer в Safer! 
Safer — французский нон-профит, который занимается оценкой и управлением рисками от AI. Они участвовали в разработке EU AI Act, выпустили рейтинг ответственности AI-компаний, а теперь строят ресёрч-направление: пытаются перевести результаты бенчмарков в конкретные количественные оценки риска.

Проект включает в себя и ресёрч, и инжиниринг — вы будете разрабатывать методологию оценки и превращать её в работающий продукт.

Требования:

Несколько публикаций по ML на крутых конференциях — или диплом уровня победителя всероса и выше

Опыт в программировании и ML-фреймворках (PyTorch, Transformers и т.д.)

Ресёрческий опыт (лучше в ML, но можно из другой области)

Вилка — €60k–95k в год. Париж или ремоут.`,
image: '/quiz/assets/results/recraft1.png' },


Eternis: { title: 'Eternis', contact: 'masheau', header: 'ML Engineer в Eternis', description: `Вы — ML Engineer в Eternis! 
Eternis — амбициозный стартап, который считает, что раз уж мир с AGI, вероятно, скоро наступит, то пусть он хотя бы будет более честным и безопасным. Их идея: у каждого человека будет AI-агент, который представляет его интересы и может сотрудничать с другими агентами через безопасные протоколы. Они не развивают capabilities и не приближают AGI — но создают инфраструктуру для того, чтобы люди могли коллективно и децентрализованно принимать важные решения, управлять ресурсами и даже следить за ИИ. 
За плечами у команды — Ivy League, PhD по криптографии и теорфизике, инвестиции от Menlo и Lightspeed.

Требования:

Медали IOI/IMO/ICPC или другой сильный интеллектуальный сигнал

Или: опыт founding engineer'ом, авторство заметного опенсорса или цитируемые статьи

Большой интерес к AI и понимание срочности происходящего

Вилка $120k–800k + equity. Офис в Сан-Франциско, иногда возможен ремоут, помогают с визой.`, image: '/quiz/assets/results/eternis.png' },

Epoch: { title: 'Epoch', contact: 'owlkov',header: 'Senior Researcher в Epoch', description: `Вы — Senior Researcher в Epoch!
Epoch — это независимый исследовательский институт, отслеживающий прогресс в AI. Они создают бенчмарки, анализируют способности фронтирных моделей и публикуют суперподробные прогнозы и исследования, на которые ориентируются исследователи, инвесторы и политики.

Эта роль — в команду Data Insights, ту самую, что отвечает за отчёты о compute, датасетах и кривых роста.

Требования:

Глубокие знания в статистическом моделировании и анализе данных

Умение работать с неполными/шумными данными и строить из них выводы

Способность доносить результаты как до ресёрчеров, так и до широкой аудитории

Вилк $150k–200k в год, удалёнка или релокация в US/UK`,
 image: '/quiz/assets/results/recraft1.png' },


Metr: { title: 'Metr', contact: 'masheau',header: 'ML Engineer в METR', description: `Вы — ML Engineer в METR!

METR — это буквально батя всех AI evals. Это проект Пола Кристиано, и их главная задача — выявлять опасные способности у LLM до того, как они становятся угрозой. Они делали пре-релизные оценки GPT-4 и Claude, а их бенчмарки и ресёрч цитируют в AI policy документах по всему миру. 

Требования:

Опыт разработки и оптимизации больших DL моделей

Особенно ценится работа с inference compute

Офигенные публикации не обязательны, но будут плюсом

Вилка $150k–365k + виза без лотереи. Офис в Беркли, иногда возможен ремоут.`,
 image: '/quiz/assets/results/metr.png' },
};

// Utility function to check reachability of all results
export function checkReachableResults() {
  const resultKeys = Object.keys(resultPlaceholders) as ResultKey[];
  const numQuestions = quizQuestions.length;
  const answerCounts = quizQuestions.map(q => q.answers.length);
  const reachable = new Set<ResultKey>();
  const winCounts: Record<ResultKey, number> = Object.fromEntries(resultKeys.map(k => [k, 0])) as Record<ResultKey, number>;
  let totalCombos = 0;

  function getResult(answers: number[]): ResultKey[] {
    const score: Partial<Record<ResultKey, number>> = {};
    answers.forEach((ansIdx, qIdx) => {
      const points = quizQuestions[qIdx].answers[ansIdx].points;
      Object.entries(points).forEach(([key, value]) => {
        score[key as ResultKey] = (score[key as ResultKey] || 0) + (value || 0);
      });
    });
    let max = -Infinity;
    let winners: ResultKey[] = [];
    resultKeys.forEach((key) => {
      const val = score[key] || 0;
      if (val > max) {
        max = val;
        winners = [key];
      } else if (val === max) {
        winners.push(key);
      }
    });
    return winners;
  }

  function enumerate(idx: number, path: number[]) {
    if (idx === numQuestions) {
      const winners = getResult(path);
      winners.forEach(w => {
        reachable.add(w);
        winCounts[w]++;
      });
      totalCombos++;
      return;
    }
    for (let i = 0; i < answerCounts[idx]; i++) {
      enumerate(idx + 1, [...path, i]);
    }
  }

  enumerate(0, []);
  console.log('Reachable results:', Array.from(reachable));
  console.log('Unreachable results:', resultKeys.filter(k => !reachable.has(k)));
  console.log('---');
  console.log('Result frequencies and probabilities:');
  resultKeys.forEach(k => {
    const freq = winCounts[k];
    const prob = (freq / totalCombos) * 100;
    console.log(`${k}: ${freq} times (${prob.toFixed(2)}%)`);
  });
} 