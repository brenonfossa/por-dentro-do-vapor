import { useEffect, useState } from 'react'
import { EvidenceMarker, TechnicalText } from './ui'

const gasStages = [
  {
    title: 'Etapa 1 — O ar chega',
    caption:
      'O ar inspirado percorre as vias respiratórias até os alvéolos. Ele contém oxigênio e outros gases.',
    shortLabel: 'AR NOS ALVÉOLOS',
  },
  {
    title: 'Etapa 2 — O oxigênio passa ao sangue',
    caption:
      'O oxigênio atravessa a fina barreira entre o alvéolo e o capilar e segue pelo sangue para o organismo.',
    shortLabel: 'O₂ → SANGUE',
  },
  {
    title: 'Etapa 3 — O dióxido de carbono segue aos alvéolos',
    caption:
      'O dióxido de carbono passa do sangue para o espaço alveolar e é eliminado na expiração. A troca se repete a cada ciclo respiratório.',
    shortLabel: 'CO₂ → ALVÉOLO',
  },
]

const quizQuestions = [
  {
    prompt: 'Onde ocorre a principal troca de gases entre o ar e o sangue?',
    options: ['Traqueia', 'Alvéolos', 'Laringe'],
    answer: 1,
    explanation:
      'Os alvéolos ficam próximos a capilares; a barreira fina entre eles permite a troca de gases.',
  },
  {
    prompt: 'Qual gás passa dos alvéolos para o sangue durante a troca gasosa?',
    options: ['Oxigênio', 'Dióxido de carbono', 'Nitrogênio exclusivamente'],
    answer: 0,
    explanation:
      'O oxigênio difunde-se do ar alveolar para o sangue. O dióxido de carbono segue principalmente no sentido oposto.',
  },
  {
    prompt: 'O que se pode afirmar sobre os efeitos do aerossol de cigarros eletrônicos?',
    options: [
      'Todos os produtos provocam exatamente a mesma lesão.',
      'O aerossol é composto apenas por vapor de água.',
      'A composição e os possíveis efeitos variam conforme as substâncias e as condições de exposição.',
    ],
    answer: 2,
    explanation:
      'O aerossol não é simplesmente vapor de água. Sua composição e os efeitos possíveis dependem do produto e da exposição.',
  },
]

function MicroscopicIllustration({
  zoomStage,
  stage,
  tissueMode,
}: {
  zoomStage: 0 | 1 | 2
  stage: number
  tissueMode: 'function' | 'responses'
}) {
  const zoomed = zoomStage === 2
  return (
    <div
      className={`alveoli-visual${zoomStage === 1 ? ' is-zooming' : ''}${zoomed ? ' is-zoomed' : ''}${tissueMode === 'responses' ? ' is-response-mode' : ''}`}
      data-gas-stage={stage}
    >
      <div className="alveoli-visual__screen">
        <div className="alveoli-visual__screen-label">
          <span>
            {zoomStage === 2 ? 'AMPLIAÇÃO ALVEOLAR' : zoomStage === 1 ? 'VIAS BRONQUIOLARES' : 'MAPA PULMONAR'}
          </span>
          <span>ILUSTRAÇÃO · SEM ESCALA</span>
        </div>
        <svg
          className="alveoli-visual__art"
          viewBox="0 0 720 420"
          role="img"
          aria-labelledby="alveoli-art-title alveoli-art-desc"
        >
          <title id="alveoli-art-title">Pulmões e detalhe ampliado dos alvéolos</title>
          <desc id="alveoli-art-desc">
            Diagrama mostra os pulmões e bronquíolos em uma visão geral; ampliado, apresenta sacos
            alveolares, paredes finas e capilares próximos. Partículas identificadas indicam o
            sentido da troca de oxigênio e dióxido de carbono.
          </desc>
          <defs>
            <linearGradient id="alveoli-lung-fill" x1="250" y1="70" x2="470" y2="370">
              <stop stopColor="var(--color-cyan)" stopOpacity=".28" />
              <stop offset=".65" stopColor="var(--color-green)" stopOpacity=".45" />
              <stop offset="1" stopColor="var(--color-mint)" stopOpacity=".12" />
            </linearGradient>
            <radialGradient id="alveoli-glow">
              <stop stopColor="var(--color-mint)" stopOpacity=".2" />
              <stop offset="1" stopColor="var(--color-mint)" stopOpacity="0" />
            </radialGradient>
            <filter id="alveoli-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>

          <g className="alveoli-visual__overview">
            <circle cx="356" cy="210" r="190" fill="url(#alveoli-glow)" />
            <path
              d="M350 55v112m0-10c-32 8-65 32-82 67m82-67c31 8 64 32 81 67"
              fill="none"
              stroke="var(--color-mint)"
              strokeWidth="9"
              strokeLinecap="round"
              opacity=".8"
            />
            <path
              d="M342 115h16m-16 12h16m-16 12h16"
              stroke="var(--color-cyan)"
              strokeWidth="2"
              opacity=".7"
            />
            <path
              d="M330 177c-34-32-83-49-121-31-42 19-64 70-63 127 1 57 23 104 63 122 37 17 76-2 97-34 20-31 25-81 24-137Zm40 0c34-32 83-49 121-31 42 19 64 70 63 127-1 57-23 104-63 122-37 17-76-2-97-34-20-31-25-81-24-137Z"
              fill="url(#alveoli-lung-fill)"
              stroke="var(--color-mint)"
              strokeOpacity=".45"
              strokeWidth="2"
            />
            <path
              d="M350 157c-28 15-49 39-61 69m61-69c28 15 49 39 61 69m-122 0c-24 11-41 29-50 52m50-52c-7 22-7 40-2 61m124-61c24 11 41 29 50 52m-50-52c7 22 7 40 2 61"
              fill="none"
              stroke="var(--color-cyan)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity=".8"
            />
            <circle cx="430" cy="275" r="37" fill="none" stroke="var(--color-coral)" strokeDasharray="4 6" />
            <path d="M458 302 515 343" stroke="var(--color-coral)" strokeDasharray="3 5" />
            <text x="520" y="355">REGIÃO AMPLIADA</text>
          </g>

          <g className="alveoli-visual__detail">
            <circle cx="360" cy="218" r="192" fill="url(#alveoli-glow)" />
            <path
              d="M125 116c17 22 17 44 0 66s-17 44 0 66 17 44 0 66"
              fill="none"
              stroke="var(--color-mint)"
              strokeWidth="14"
              strokeLinecap="round"
              opacity=".72"
            />
            <path
              d="M137 149h50m-50 35h50m-50 35h50m-50 35h50"
              stroke="var(--color-cyan)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity=".65"
            />
            <text x="75" y="84">BRONQUÍOLO</text>
            <path
              className="alveoli-visual__capillary"
              d="M245 119c34-21 48 22 80 3s47-15 68 4 45 21 70 2 43 5 54 28-8 37 4 59 34 32 20 57-34 23-36 48-23 42-49 33-40-25-64-11-47 11-62-10-38-20-58-1-41 18-56-4 1-41-17-56-29-32-8-51 25-29 16-52 1-42 25-49 34 2 47-20 38-30 57-16 32 7 47-14"
              fill="none"
              stroke="var(--color-coral)"
              strokeWidth="16"
              strokeLinecap="round"
              opacity=".72"
            />
            <path
              className="alveoli-visual__capillary-inner"
              d="M245 119c34-21 48 22 80 3s47-15 68 4 45 21 70 2 43 5 54 28-8 37 4 59 34 32 20 57-34 23-36 48-23 42-49 33-40-25-64-11-47 11-62-10-38-20-58-1-41 18-56-4 1-41-17-56-29-32-8-51 25-29 16-52 1-42 25-49 34 2 47-20 38-30 57-16 32 7 47-14"
              fill="none"
              stroke="var(--color-cyan)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="2 9"
              opacity=".9"
            />
            <g className="alveoli-visual__sacs">
              <path d="M257 154c-31-26-72-12-76 23-3 22 13 35 34 32 19-2 25 10 18 24-11 21 2 43 25 39 24-5 24-30 17-47-8-21 1-39 19-42 22-4 27-28 11-43-14-13-33-5-48 14Z" />
              <path d="M332 145c-24-28-64-20-72 12-6 22 8 38 30 39 20 1 27 14 18 27-14 20-5 43 17 43 25 0 30-24 25-43-5-23 7-39 26-39 23 0 31-22 18-39-12-15-31-10-48 5Z" />
              <path d="M418 150c-20-29-61-26-73 5-9 21 2 39 23 43 19 4 24 18 13 30-17 18-12 42 10 45 24 4 34-19 32-39-2-23 13-37 32-34 22 4 34-17 24-35-9-17-28-15-46-4Z" />
              <path d="M291 241c-28-23-67-7-68 27-1 22 16 34 37 30 19-4 27 8 21 23-9 22 7 42 29 35 23-7 21-32 12-48-11-20-4-39 14-44 21-7 23-31 5-44-15-11-33-1-50 21Z" />
              <path d="M379 242c-25-26-66-15-70 18-3 22 12 36 33 34 20-2 27 11 19 25-12 21 0 43 23 39 24-4 26-29 20-47-7-22 4-39 23-42 22-4 28-28 12-43-14-13-33-6-49 16Z" />
            </g>
            <path
              className="alveoli-visual__wall"
              d="M254 155c27-11 42 8 50 26m30-37c21 1 32 17 35 35m48-29c18 8 22 23 19 39M252 294c16-12 32-7 43 2m81-54c4 18 20 23 34 20"
              fill="none"
              stroke="var(--color-mint)"
              strokeWidth="2"
              strokeDasharray="2 4"
            />
            <text x="215" y="344">ALVÉOLOS</text>
            <path d="M287 331v-25" stroke="var(--color-mint)" />
            <text x="475" y="104">CAPILAR</text>
            <path d="m502 111-21 26" stroke="var(--color-coral)" />
            <text x="475" y="365">PAREDE ALVEOLAR</text>
            <path d="m466 353-17-24" stroke="var(--color-mint)" />
            <g className="alveoli-visual__gas alveoli-visual__gas--oxygen">
              <circle cx="292" cy="194" r="7" />
              <circle cx="344" cy="226" r="6" />
              <circle cx="386" cy="184" r="5" />
              <text x="297" y="187">O₂</text>
            </g>
            <g className="alveoli-visual__gas alveoli-visual__gas--carbon">
              <circle cx="464" cy="203" r="7" />
              <circle cx="422" cy="235" r="6" />
              <circle cx="374" cy="274" r="5" />
              <text x="467" y="196">CO₂</text>
            </g>
            <g className="alveoli-visual__response" aria-hidden="true">
              <circle cx="345" cy="217" r="115" />
              <path d="M277 125c-10 12-12 25-2 35m146 100c-10 13-9 27 2 37m-120 22c-7 12-5 25 7 31" />
              <circle cx="270" cy="198" r="4" />
              <circle cx="434" cy="252" r="5" />
              <circle cx="350" cy="306" r="3" />
            </g>
          </g>
          <circle cx="360" cy="210" r="122" className="alveoli-visual__focus" filter="url(#alveoli-soft-glow)" />
        </svg>
      </div>
      <div className="alveoli-visual__legend">
        <span><i className="alveoli-legend-dot alveoli-legend-dot--air" />Alvéolo: espaço de ar</span>
        <span><i className="alveoli-legend-dot alveoli-legend-dot--wall" />Parede alveolar: barreira fina</span>
        <span><i className="alveoli-legend-dot alveoli-legend-dot--blood" />Capilar: vaso sanguíneo</span>
        <span><i className="alveoli-legend-dot alveoli-legend-dot--oxygen" />O₂: alvéolo → sangue</span>
        <span><i className="alveoli-legend-dot alveoli-legend-dot--carbon" />CO₂: sangue → alvéolo</span>
      </div>
      {tissueMode === 'responses' && (
        <p className="alveoli-visual__response-caption">
          Alterações ilustrativas e não específicas — não representam diagnóstico nem previsão individual.
        </p>
      )}
    </div>
  )
}

function AlveoliJourney() {
  const [zoomStage, setZoomStage] = useState<0 | 1 | 2>(0)
  const zoomed = zoomStage === 2
  const [stage, setStage] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [tissueMode, setTissueMode] = useState<'function' | 'responses'>('function')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answer, setAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => {
      setReducedMotion(media.matches)
      if (media.matches) {
        setPlaying(false)
        setZoomStage((current) => current === 1 ? 2 : current)
      }
    }
    media.addEventListener('change', updatePreference)
    return () => media.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (!playing || reducedMotion) return
    const interval = window.setInterval(() => {
      setStage((current) => (current + 1) % gasStages.length)
    }, 4600)
    return () => window.clearInterval(interval)
  }, [playing, reducedMotion])

  const resetQuiz = () => {
    setQuestionIndex(0)
    setAnswer(null)
    setScore(0)
    setQuizComplete(false)
  }

  const submitAnswer = (optionIndex: number) => {
    if (answer !== null) return
    setAnswer(optionIndex)
    if (optionIndex === quizQuestions[questionIndex].answer) setScore((current) => current + 1)
  }

  const nextQuestion = () => {
    if (questionIndex === quizQuestions.length - 1) {
      setQuizComplete(true)
      return
    }
    setQuestionIndex((current) => current + 1)
    setAnswer(null)
  }

  const resetGasExchange = () => {
    setPlaying(false)
    setStage(0)
  }

  const toggleGasSequence = () => {
    if (reducedMotion) {
      setStage((current) => (current + 1) % gasStages.length)
      return
    }
    setPlaying((current) => !current)
  }

  const currentQuestion = quizQuestions[questionIndex]

  useEffect(() => {
    if (zoomStage !== 1) return
    const timeout = window.setTimeout(() => setZoomStage(2), 900)
    return () => window.clearTimeout(timeout)
  }, [zoomStage])

  return (
    <section
      id="alveolos"
      className="alveoli-journey"
      aria-labelledby="alveoli-journey-title"
      data-reveal
    >
      <div className="alveoli-journey__heading">
        <div className="section-number">
          <span>05</span>
          <span className="section-number__line" />
          <span>UM MUNDO INVISÍVEL</span>
        </div>
        <TechnicalText>DA ANATOMIA À ESCALA MICROSCÓPICA</TechnicalText>
        <h2 id="alveoli-journey-title">PEQUENAS ESTRUTURAS. UMA FUNÇÃO VITAL.</h2>
        <p>
          Dentro dos pulmões existem milhões de pequenos sacos de ar chamados alvéolos. É nessa
          região que ocorre a troca de gases essencial para o funcionamento do organismo.
        </p>
      </div>

      <div className="alveoli-journey__intro">
        <div className="alveoli-journey__intro-copy">
          <EvidenceMarker tone="mint">JORNADA MICROSCÓPICA</EvidenceMarker>
          <h3>UM MUNDO INVISÍVEL: DENTRO DOS ALVÉOLOS</h3>
          <p>
            Acompanhe o ar por um bronquíolo até os alvéolos e observe como gases atravessam uma
            barreira fina junto aos capilares.
          </p>
          <button
            type="button"
            className="alveoli-journey__zoom-button"
            aria-pressed={zoomed}
            onClick={() => setZoomStage((current) => current === 0 ? reducedMotion ? 2 : 1 : 0)}
          >
            {zoomStage > 0 ? 'VOLTAR À VISÃO DOS PULMÕES' : 'INICIAR VIAGEM MICROSCÓPICA'}
            <span aria-hidden="true">{zoomed ? '↗' : '→'}</span>
          </button>
        </div>
        <MicroscopicIllustration zoomStage={zoomStage} stage={stage} tissueMode={tissueMode} />
      </div>

      <div className="alveoli-journey__journey-note">
        <span className="status-dot" />
        {zoomStage === 2
          ? 'AMPLIAÇÃO ESQUEMÁTICA: sacos alveolares, paredes finas e capilares próximos.'
          : zoomStage === 1
            ? 'APROXIMAÇÃO: seguindo os ramos menores até os bronquíolos.'
            : 'VISÃO GERAL: pulmões, vias respiratórias e região indicada para ampliação.'}
      </div>

      <section className="gas-exchange" aria-labelledby="gas-exchange-title">
        <div className="alveoli-section-heading">
          <TechnicalText>UM PROCESSO CONTÍNUO</TechnicalText>
          <h3 id="gas-exchange-title">COMO FUNCIONA A TROCA GASOSA?</h3>
          <p>Use os controles para acompanhar o percurso. A animação não precisa de áudio.</p>
        </div>
        <div className="gas-exchange__layout">
          <div className="gas-exchange__steps" aria-label="Etapas da troca gasosa">
            {gasStages.map((item, index) => (
              <div className={`gas-exchange__step${stage === index ? ' is-current' : ''}`} key={item.shortLabel}>
                <span className="gas-exchange__step-number">0{index + 1}</span>
                <span>{item.shortLabel}</span>
              </div>
            ))}
          </div>
          <div className="gas-exchange__caption" aria-live="polite">
            <h4>{gasStages[stage].title}</h4>
            <p>{gasStages[stage].caption}</p>
          </div>
          <div className="gas-exchange__controls" aria-label="Controles da troca gasosa">
            <button type="button" onClick={toggleGasSequence} aria-pressed={playing}>
              {reducedMotion ? 'AVANÇAR ETAPA' : playing ? 'PAUSAR' : 'INICIAR'}
            </button>
            <button type="button" onClick={resetGasExchange} aria-label="Reiniciar na primeira etapa">
              REINICIAR
            </button>
            <button
              type="button"
              onClick={() => setStage((current) => (current + 1) % gasStages.length)}
              aria-label="Avançar para a próxima etapa"
            >
              AVANÇAR <span aria-hidden="true">→</span>
            </button>
          </div>
          {reducedMotion && (
            <p className="gas-exchange__motion-note" role="status">
              Movimento reduzido: o botão avança uma etapa por vez.
            </p>
          )}
        </div>
      </section>

      <section className="tissue-investigation" aria-labelledby="tissue-investigation-title">
        <div className="alveoli-section-heading">
          <TechnicalText>OBSERVAR COM CONTEXTO</TechnicalText>
          <h3 id="tissue-investigation-title">E SE O TECIDO FOR AFETADO?</h3>
          <p>
            Alterne entre a função normal simplificada e uma ilustração de possíveis respostas a
            exposições nocivas. Não é uma simulação clínica.
          </p>
        </div>
        <div className="tissue-investigation__toggle" role="group" aria-label="Modo de visualização do tecido">
          <button
            type="button"
            className={tissueMode === 'function' ? 'is-active' : ''}
            aria-pressed={tissueMode === 'function'}
            onClick={() => setTissueMode('function')}
          >
            FUNCIONAMENTO DOS ALVÉOLOS
          </button>
          <button
            type="button"
            className={tissueMode === 'responses' ? 'is-active' : ''}
            aria-pressed={tissueMode === 'responses'}
            onClick={() => setTissueMode('responses')}
          >
            POSSÍVEIS PROCESSOS DE LESÃO
          </button>
        </div>
        <div className="tissue-investigation__explanation" aria-live="polite">
          {tissueMode === 'function' ? (
            <p>
              <strong>Integridade importa:</strong> paredes alveolares finas e capilares próximos
              permitem a difusão dos gases. A ilustração mostra a organização básica, não a escala
              real nem todos os detalhes celulares.
            </p>
          ) : (
            <p>
              <strong>Possíveis respostas:</strong> certas exposições podem estar associadas a
              irritação, inflamação e alterações celulares; lesões relevantes podem afetar a
              barreira de troca. Os efeitos dependem do agente e da exposição, e não são iguais
              para todos os produtos ou pessoas.
            </p>
          )}
        </div>
      </section>

      <section className="science-panel" aria-labelledby="science-panel-title">
        <div className="alveoli-section-heading">
          <TechnicalText>EXPOSIÇÃO, RESPOSTA, CONTEXTO</TechnicalText>
          <h3 id="science-panel-title">O QUE A CIÊNCIA INVESTIGA?</h3>
        </div>
        <div className="science-panel__grid">
          <article>
            <span>01 / COMPOSIÇÃO</span>
            <h4>Partículas e compostos químicos</h4>
            <p>
              O aerossol pode conter partículas e compostos que entram em contato com as vias
              respiratórias. Sua composição varia com o líquido, o dispositivo e o aquecimento.
            </p>
          </article>
          <article>
            <span>02 / RESPOSTA</span>
            <h4>Respostas do organismo</h4>
            <p>
              Estudos investigam associações entre exposições e irritação, inflamação ou alterações
              celulares. Nenhum efeito único descreve todos os componentes ou usuários.
            </p>
          </article>
          <article>
            <span>03 / FUNÇÃO</span>
            <h4>Por que isso importa?</h4>
            <p>
              Os alvéolos são essenciais às trocas gasosas. Uma lesão significativa pode prejudicar
              a função respiratória, conforme seu tipo e gravidade; isso não prevê o que ocorrerá
              com uma pessoa específica.
            </p>
          </article>
        </div>
        <div className="science-panel__sources">
          <span>FONTES PARA CONSULTA</span>
          <a href="https://openstax.org/books/anatomy-and-physiology-2e/pages/22-4-gas-exchange" target="_blank" rel="noreferrer">
            OpenStax · Troca gasosa <span aria-hidden="true">↗</span>
          </a>
          <a href="https://www.cdc.gov/tobacco/e-cigarettes/health-effects.html" target="_blank" rel="noreferrer">
            CDC · Efeitos dos cigarros eletrônicos na saúde <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="science-panel__caveat">
          Aerossol não é simplesmente vapor de água. O que é inalado e seus possíveis efeitos variam
          conforme produto, composição e condições de exposição; alguns efeitos ainda são objeto de
          investigação.
        </p>
      </section>

      <section className="alveoli-quiz" aria-labelledby="alveoli-quiz-title">
        <div className="alveoli-section-heading">
          <TechnicalText>REVISE O QUE OBSERVOU</TechnicalText>
          <h3 id="alveoli-quiz-title">VOCÊ CONSEGUE IDENTIFICAR O PROCESSO?</h3>
        </div>
        {!quizComplete ? (
          <div className="alveoli-quiz__card">
            <div className="alveoli-quiz__progress">
              <span>PERGUNTA {questionIndex + 1} / {quizQuestions.length}</span>
              <span>{score} {score === 1 ? 'ACERTO' : 'ACERTOS'}</span>
            </div>
            <h4>{currentQuestion.prompt}</h4>
            <div className="alveoli-quiz__options">
              {currentQuestion.options.map((option, index) => (
                <button
                  type="button"
                  key={option}
                  className={
                    answer === null
                      ? ''
                      : index === currentQuestion.answer
                        ? 'is-correct'
                        : answer === index
                          ? 'is-incorrect'
                          : ''
                  }
                  onClick={() => submitAnswer(index)}
                  disabled={answer !== null}
                  aria-pressed={answer === index}
                >
                  <span>{String.fromCharCode(65 + index)}</span>
                  {option}
                </button>
              ))}
            </div>
            {answer !== null && (
              <div className="alveoli-quiz__feedback" role="status" aria-live="polite">
                <p>
                  <strong>{answer === currentQuestion.answer ? 'Correto.' : 'Vamos revisar.'}</strong>{' '}
                  {currentQuestion.explanation}
                </p>
                <button type="button" onClick={nextQuestion}>
                  {questionIndex === quizQuestions.length - 1 ? 'VER RESULTADO' : 'PRÓXIMA PERGUNTA'}
                  <span aria-hidden="true"> →</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="alveoli-quiz__result" role="status" aria-live="polite">
            <span>{score} / {quizQuestions.length}</span>
            <div>
              <h4>{score === quizQuestions.length ? 'ÓTIMA INVESTIGAÇÃO.' : 'INVESTIGAR TAMBÉM É REVISAR.'}</h4>
              <p>
                {score === quizQuestions.length
                  ? 'Você identificou os pontos principais sobre os alvéolos, a troca gasosa e a variação do aerossol.'
                  : 'A pontuação é um ponto de partida. Retome as etapas para rever como a troca gasosa funciona e por que a composição do aerossol importa.'}
              </p>
              <button type="button" onClick={resetQuiz}>TENTAR NOVAMENTE</button>
            </div>
          </div>
        )}
      </section>
    </section>
  )
}

export default AlveoliJourney
