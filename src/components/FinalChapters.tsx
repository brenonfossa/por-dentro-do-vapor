import { useState } from 'react'
import { EvidenceMarker, TechnicalText } from './ui'

const evaliRegions = [
  {
    id: 'inflammation',
    label: 'Inflamação',
    title: 'Uma resposta inflamatória',
    description:
      'EVALI é uma lesão pulmonar associada ao uso de produtos de vaping. A inflamação pode afetar tecidos envolvidos na respiração, mas a apresentação e a gravidade variam.',
    position: { left: '35%', top: '53%' },
  },
  {
    id: 'breathing',
    label: 'Respiração',
    title: 'A respiração pode ficar difícil',
    description:
      'Tosse, falta de ar e dor no peito foram relatadas entre os sintomas investigados. Esses sinais têm várias causas e precisam de avaliação profissional — não permitem diagnóstico por esta página.',
    position: { left: '66%', top: '52%' },
  },
  {
    id: 'tissue',
    label: 'Tecido pulmonar',
    title: 'Possível lesão do tecido',
    description:
      'A lesão pode envolver alterações pulmonares importantes. EVALI é uma condição específica associada ao uso de produtos de vaping; não é sinônimo de todos os possíveis efeitos respiratórios desses produtos.',
    position: { left: '51%', top: '75%' },
  },
]

const devices = [
  {
    id: 'battery',
    label: 'Bateria',
    title: 'Bateria',
    description:
      'Fornece energia ao dispositivo. A corrente elétrica alimenta o elemento de aquecimento quando o aparelho é acionado.',
    position: { left: '50%', top: '79%' },
  },
  {
    id: 'heater',
    label: 'Resistência',
    title: 'Resistência ou elemento de aquecimento',
    description:
      'A peça aquece o líquido que chega à região da resistência. O aquecimento forma um aerossol e pode alterar a mistura, gerando partículas e outros compostos — não apenas vapor de água.',
    position: { left: '50%', top: '60%' },
  },
  {
    id: 'reservoir',
    label: 'Reservatório',
    title: 'Reservatório ou cartucho',
    description:
      'É a câmara que contém o líquido em dispositivos deste tipo. Outros modelos usam cartuchos pré-preenchidos ou partes descartáveis; a configuração varia.',
    position: { left: '51%', top: '41%' },
  },
  {
    id: 'liquid',
    label: 'Líquido',
    title: 'Líquido utilizado',
    description:
      'A mistura pode conter nicotina, aromatizantes e outros ingredientes. A composição depende do produto; não se pode inferir o conteúdo pela aparência ou pelo aroma.',
    position: { left: '62%', top: '44%' },
  },
  {
    id: 'mouthpiece',
    label: 'Bocal',
    title: 'Bocal',
    description:
      'É por onde o aerossol sai do dispositivo e é inalado. A inalação leva partículas e substâncias presentes no aerossol às vias respiratórias.',
    position: { left: '50%', top: '18%' },
  },
]

const myths = [
  {
    claim: '“É apenas vapor de água.”',
    correction:
      'Não. O dispositivo aquece um líquido e produz um aerossol de partículas que pode conter nicotina, metais e outros compostos. A mistura varia entre produtos.',
    source: 'CDC · O que existe nos cigarros eletrônicos',
    url: 'https://www.cdc.gov/tobacco/e-cigarettes/about.html',
  },
  {
    claim: '“Todo aromatizante é seguro para inalar porque pode ser usado em alimentos.”',
    correction:
      'Ingestão e inalação são exposições diferentes. Um ingrediente usado em alimentos não é automaticamente considerado seguro para os pulmões quando inalado ou aquecido.',
    source: 'CDC · O que existe nos cigarros eletrônicos',
    url: 'https://www.cdc.gov/tobacco/e-cigarettes/about.html',
  },
  {
    claim: '“Todos os cigarros eletrônicos têm a mesma composição.”',
    correction:
      'Produtos, líquidos, dispositivos e condições de aquecimento diferem. A composição do aerossol não é idêntica nem pode ser determinada só pelo tipo ou pela marca do aparelho.',
    source: 'OMS · Cigarros eletrônicos',
    url: 'https://www.who.int/news-room/questions-and-answers/item/tobacco-e-cigarettes',
  },
  {
    claim: '“A nicotina é a única substância preocupante.”',
    correction:
      'A nicotina pode causar dependência, mas o aerossol também pode conter partículas, metais e compostos químicos. Os riscos não se resumem a um único ingrediente.',
    source: 'CDC · Efeitos à saúde',
    url: 'https://www.cdc.gov/tobacco/e-cigarettes/health-effects.html',
  },
  {
    claim: '“Não sentir sintomas significa que não existe risco.”',
    correction:
      'A ausência de sintomas perceptíveis não permite concluir que não houve exposição ou que um produto seja seguro. Os efeitos variam, e nem todos aparecem imediatamente.',
    source: 'OMS · Cigarros eletrônicos',
    url: 'https://www.who.int/news-room/questions-and-answers/item/tobacco-e-cigarettes',
  },
]

const finalQuestions = [
  {
    prompt: 'Onde acontece a principal troca de oxigênio e dióxido de carbono?',
    options: ['Na traqueia', 'Nos alvéolos e capilares próximos', 'No bocal do dispositivo'],
    answer: 1,
    explanation:
      'A troca ocorre através da fina barreira entre o ar nos alvéolos e o sangue nos capilares.',
  },
  {
    prompt: 'O que pode estar presente no aerossol de um cigarro eletrônico?',
    options: [
      'Somente vapor de água',
      'Uma mistura variável de partículas e compostos',
      'Sempre a mesma composição, independentemente do produto',
    ],
    answer: 1,
    explanation:
      'A composição depende do líquido, do dispositivo e das condições de uso; o aerossol não é apenas água.',
  },
  {
    prompt: 'O que fazer diante de sintomas respiratórios após o uso desses produtos?',
    options: [
      'Ignorar se parecerem leves, pois não podem estar relacionados',
      'Buscar avaliação médica; sintomas intensos ou dor forte no peito exigem atendimento urgente',
      'Usar este quiz para confirmar um diagnóstico',
    ],
    answer: 1,
    explanation:
      'Uma página educativa não diagnostica. Sintomas devem ser avaliados por profissionais, com urgência diante de sinais graves.',
  },
]

const references = [
  {
    label: 'CDC · Orientação clínica e sintomas associados a EVALI',
    url: 'https://www.cdc.gov/mmwr/volumes/68/wr/mm6841e3.htm',
  },
  {
    label: 'CDC · EVALI: atualização sobre produtos THC e vitamina E acetato',
    url: 'https://www.cdc.gov/mmwr/volumes/69/wr/mm6903e2.htm',
  },
  {
    label: 'CDC · Efeitos dos cigarros eletrônicos na saúde',
    url: 'https://www.cdc.gov/tobacco/e-cigarettes/health-effects.html',
  },
  {
    label: 'CDC · O que existe nos cigarros eletrônicos e no aerossol',
    url: 'https://www.cdc.gov/tobacco/e-cigarettes/about.html',
  },
  {
    label: 'Anvisa · Cigarro eletrônico',
    url: 'https://www.gov.br/anvisa/pt-br/assuntos/tabaco/cigarro-eletronico',
  },
  {
    label: 'OMS · Perguntas e respostas sobre cigarros eletrônicos',
    url: 'https://www.who.int/news-room/questions-and-answers/item/tobacco-e-cigarettes',
  },
  {
    label: 'OpenStax · Troca gasosa',
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-4-gas-exchange',
  },
  {
    label: 'NIDA · Dispositivos de vaping e cigarros eletrônicos',
    url: 'https://nida.nih.gov/publications/drugfacts/vaping-devices-electronic-cigarettes',
  },
  {
    label: 'Olmedo et al. · Metais no líquido e aerossol de cigarros eletrônicos',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6066345/',
  },
]

function LungInjuryIllustration() {
  const [selectedId, setSelectedId] = useState(evaliRegions[0].id)
  const selected = evaliRegions.find((region) => region.id === selectedId) ?? evaliRegions[0]

  return (
    <div className="evali-explorer">
      <div className="evali-explorer__visual">
        <svg viewBox="0 0 520 440" role="img" aria-labelledby="evali-lung-title evali-lung-desc">
          <title id="evali-lung-title">Ilustração conceitual dos pulmões</title>
          <desc id="evali-lung-desc">
            Pulmões e vias aéreas esquemáticos com áreas selecionáveis para ler sobre inflamação,
            sintomas respiratórios e tecido pulmonar.
          </desc>
          <defs>
            <linearGradient id="evali-lung-fill" x1="140" y1="90" x2="380" y2="390">
              <stop stopColor="var(--color-cyan)" stopOpacity=".22" />
              <stop offset=".6" stopColor="var(--color-green)" stopOpacity=".5" />
              <stop offset="1" stopColor="var(--color-mint)" stopOpacity=".12" />
            </linearGradient>
            <radialGradient id="evali-lung-halo">
              <stop stopColor="var(--color-coral)" stopOpacity=".15" />
              <stop offset="1" stopColor="var(--color-coral)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="260" cy="230" r="205" fill="url(#evali-lung-halo)" />
          <path
            d="M260 50v114m0-22c-23 12-39 31-51 55m51-55c23 12 39 31 51 55m-102 0c-19 4-34 17-46 34m46-34c-4 16-3 31 3 44m99-44c19 4 34 17 46 34m-46-34c4 16 3 31-3 44"
            fill="none"
            stroke="var(--color-mint)"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M233 160c-19-21-46-38-72-40-42-3-72 31-79 83-8 56 6 136 51 169 37 27 80 8 99-30 12-25 15-57 14-92l-13-90Zm54 0c19-21 46-38 72-40 42-3 72 31 79 83 8 56-6 136-51 169-37 27-80 8-99-30-12-25-15-57-14-92l13-90Z"
            fill="url(#evali-lung-fill)"
            stroke="var(--color-cyan)"
            strokeOpacity=".62"
            strokeWidth="2"
          />
          <path
            d="M260 140c-20 23-29 47-31 76m31-76c20 23 29 47 31 76m-62 0c-21 11-33 28-40 49m40-49c-3 20 0 39 8 54m54-54c21 11 33 28 40 49m-40-49c3 20 0 39-8 54m-94 0c-13 12-20 28-23 46m23-46c0 18 5 33 15 46m172-46c13 12 20 28 23 46m-23-46c0 18-5 33-15 46"
            fill="none"
            stroke="var(--color-mint)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity=".7"
          />
          <path d="M95 236c25 0 43 12 59 33m270-33c-25 0-43 12-59 33" fill="none" stroke="white" strokeOpacity=".13" />
          <circle cx="260" cy="165" r="4" fill="var(--color-mint)" />
          <text x="260" y="420" textAnchor="middle">ILUSTRAÇÃO ESQUEMÁTICA · NÃO É IMAGEM CLÍNICA</text>
        </svg>
        {evaliRegions.map((region) => (
          <button
            type="button"
            key={region.id}
            className={`evali-hotspot${selectedId === region.id ? ' is-active' : ''}`}
            style={region.position}
            aria-label={`Ver informação: ${region.label}`}
            aria-pressed={selectedId === region.id}
            onClick={() => setSelectedId(region.id)}
          >
            <span>{region.label}</span>
          </button>
        ))}
      </div>
      <article className="evali-explorer__detail" aria-live="polite">
        <EvidenceMarker tone="coral">REGIÃO EM FOCO</EvidenceMarker>
        <h4>{selected.title}</h4>
        <p>{selected.description}</p>
      </article>
    </div>
  )
}

export function EvaliSection() {
  return (
    <section id="evali" className="evali-section" aria-labelledby="evali-title" data-reveal>
      <div className="final-section-heading">
        <div className="section-number">
          <span>06</span>
          <span className="section-number__line" />
          <span>CONTEXTUALIZAR</span>
        </div>
        <TechnicalText>UMA CONDIÇÃO ESPECÍFICA · NÃO UM DESTINO UNIVERSAL</TechnicalText>
        <h2 id="evali-title">QUANDO O PULMÃO SOFRE AS CONSEQUÊNCIAS</h2>
        <p>
          EVALI é a sigla em inglês para lesão pulmonar associada ao uso de produtos de vaping.
          O termo ganhou destaque durante surtos investigados principalmente nos Estados Unidos,
          incluindo o surto de 2019.
        </p>
      </div>

      <div className="evali-section__definition">
        <span className="evali-section__definition-mark">EVALI</span>
        <p>
          É uma condição clínica investigada por profissionais de saúde — não um diagnóstico que
          possa ser confirmado por sintomas isolados ou por esta ilustração. O CDC a descreve como
          um diagnóstico de exclusão, sem teste específico. Ela é distinta de outros riscos
          respiratórios associados à exposição a aerossóis.
        </p>
      </div>

      <LungInjuryIllustration />

      <div className="exposure-path" aria-label="Possível sequência de exposição">
        <div><span>01</span><strong>Inalação do aerossol</strong></div>
        <span className="exposure-path__arrow" aria-hidden="true">→</span>
        <div><span>02</span><strong>Exposição a substâncias</strong></div>
        <span className="exposure-path__arrow" aria-hidden="true">→</span>
        <div><span>03</span><strong>Possível resposta pulmonar</strong></div>
      </div>
      <p className="exposure-path__note">
        A sequência ilustra uma possibilidade, não uma previsão: EVALI não ocorre em todo usuário
        nem tem uma causa única aplicável a todos os produtos.
      </p>

      <div className="evali-section__panels">
        <article className="warning-panel">
          <TechnicalText>SINTOMAS QUE EXIGEM ATENÇÃO</TechnicalText>
          <h3>SINAIS DE ALERTA</h3>
          <ul>
            <li>Tosse</li>
            <li>Falta de ar</li>
            <li>Dor no peito</li>
            <li>Febre ou calafrios</li>
            <li>Náuseas, vômitos ou dor abdominal</li>
          </ul>
          <p>
            Esses sintomas podem ter diferentes causas e não confirmam EVALI. Se surgirem após o uso
            de produtos de vaping, procure avaliação médica e informe sobre a exposição.
          </p>
          <strong>
            Dificuldade intensa para respirar ou dor forte no peito? Procure atendimento urgente.
          </strong>
        </article>
        <article className="evali-section__context">
          <TechnicalText>O QUE A INVESTIGAÇÃO MOSTROU</TechnicalText>
          <h3>UM ACHADO IMPORTANTE, NÃO UMA EXPLICAÇÃO UNIVERSAL</h3>
          <p>
            No surto investigado nos EUA, a vitamina E acetato foi fortemente associada a casos,
            especialmente em produtos com THC obtidos de fontes informais. O CDC ressalta que isso
            não exclui a contribuição de outros químicos em alguns casos e não explica todos os
            produtos ou possíveis lesões.
          </p>
          <p>
            EVALI é diferente dos demais riscos respiratórios possíveis: sua identificação requer
            avaliação clínica. A composição variável do aerossol e seus efeitos não devem ser
            reduzidos a essa única condição.
          </p>
          <a href="https://www.cdc.gov/mmwr/volumes/69/wr/mm6903e2.htm" target="_blank" rel="noreferrer">
            CDC · Atualização da investigação EVALI <span aria-hidden="true">↗</span>
          </a>
        </article>
      </div>
      <p className="evali-section__closing">
        Prevenir a exposição é a forma de evitar os riscos de inalar um aerossol cuja composição
        pode variar entre produtos e condições de uso.
      </p>
    </section>
  )
}

export function DeviceExplorer() {
  const [selectedId, setSelectedId] = useState(devices[0].id)
  const selected = devices.find((device) => device.id === selectedId) ?? devices[0]

  return (
    <section id="componentes-do-vape" className="device-section" aria-labelledby="device-title" data-reveal>
      <div className="final-section-heading">
        <div className="section-number">
          <span>07</span>
          <span className="section-number__line" />
          <span>DESMONTAR</span>
        </div>
        <TechnicalText>COMPONENTES DE UM DISPOSITIVO RECARREGÁVEL</TechnicalText>
        <h2 id="device-title">O QUE EXISTE DENTRO DO VAPE?</h2>
        <p>
          Selecione os pontos do diagrama para conhecer as peças. O formato ilustrado é um exemplo:
          há dispositivos descartáveis, recarregáveis e com cartuchos de diferentes tipos.
        </p>
      </div>

      <div className="device-explorer">
        <div className="device-explorer__diagram">
          <svg viewBox="0 0 360 600" role="img" aria-labelledby="device-art-title device-art-desc">
            <title id="device-art-title">Diagrama de um cigarro eletrônico recarregável</title>
            <desc id="device-art-desc">
              Vista esquemática em corte com bocal, cartucho contendo líquido, elemento de
              aquecimento e bateria na base.
            </desc>
            <defs>
              <linearGradient id="device-shell" x1="100" y1="0" x2="265" y2="600">
                <stop stopColor="#264333" />
                <stop offset=".5" stopColor="#14261c" />
                <stop offset="1" stopColor="#0a1510" />
              </linearGradient>
              <linearGradient id="device-liquid" x1="0" y1="150" x2="0" y2="300">
                <stop stopColor="var(--color-mint)" stopOpacity=".38" />
                <stop offset="1" stopColor="var(--color-cyan)" stopOpacity=".11" />
              </linearGradient>
            </defs>
            <path d="M144 28q0-13 13-13h46q13 0 13 13v59h-72z" fill="#183026" stroke="var(--color-mint)" strokeOpacity=".65" strokeWidth="2" />
            <path d="M154 88h52v23h-52z" fill="#102019" stroke="var(--color-cyan)" strokeOpacity=".55" />
            <path d="M119 109q0-14 14-14h94q14 0 14 14v186H119z" fill="url(#device-shell)" stroke="var(--color-mint)" strokeOpacity=".6" strokeWidth="2" />
            <path d="M132 128h96v145h-96z" fill="url(#device-liquid)" stroke="var(--color-cyan)" strokeOpacity=".4" />
            <path d="M136 256h88" stroke="var(--color-cyan)" strokeOpacity=".7" strokeDasharray="4 5" />
            <path d="M173 277v40m14-40v40m-22-12h31m-30 9h30m-30 9h30" fill="none" stroke="var(--color-coral)" strokeWidth="3" strokeLinecap="round" />
            <path d="M119 296h122v265q0 20-20 20h-82q-20 0-20-20z" fill="url(#device-shell)" stroke="var(--color-mint)" strokeOpacity=".6" strokeWidth="2" />
            <rect x="151" y="354" width="58" height="143" rx="8" fill="#102019" stroke="var(--color-cyan)" strokeOpacity=".52" />
            <path d="M180 372v103" stroke="var(--color-mint)" strokeOpacity=".4" strokeWidth="2" strokeDasharray="3 7" />
            <rect x="164" y="520" width="32" height="5" rx="2.5" fill="var(--color-mint)" opacity=".7" />
            <circle cx="180" cy="326" r="4" fill="var(--color-coral)" />
            <text x="180" y="588" textAnchor="middle">CORTE ILUSTRATIVO · NÃO É UM MODELO UNIVERSAL</text>
          </svg>
          <div className="device-explorer__hotspots" aria-label="Peças selecionáveis">
            {devices.map((device, index) => (
              <button
                key={device.id}
                type="button"
                className={`device-hotspot${selectedId === device.id ? ' is-active' : ''}`}
                style={device.position}
                aria-label={`Selecionar ${device.label}`}
                aria-pressed={selectedId === device.id}
                onClick={() => setSelectedId(device.id)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
              </button>
            ))}
          </div>
          <div className="device-explorer__labels" aria-label="Selecionar componente do dispositivo">
            {devices.map((device) => (
              <button
                key={device.id}
                type="button"
                className={selectedId === device.id ? 'is-active' : ''}
                aria-pressed={selectedId === device.id}
                onClick={() => setSelectedId(device.id)}
              >
                {device.label}
              </button>
            ))}
          </div>
        </div>
        <article className="device-explorer__detail" aria-live="polite">
          <EvidenceMarker tone="cyan">PEÇA {String(devices.findIndex((item) => item.id === selected.id) + 1).padStart(2, '0')}</EvidenceMarker>
          <h3>{selected.title}</h3>
          <p>{selected.description}</p>
          <p className="device-explorer__caveat">
            O CDC descreve muitos dispositivos como combinações de bateria, elemento de aquecimento
            e espaço para líquido; a montagem concreta depende do modelo.
          </p>
          <a href="https://www.cdc.gov/tobacco/e-cigarettes/about.html" target="_blank" rel="noreferrer">
            CDC · Tipos e partes dos dispositivos <span aria-hidden="true">↗</span>
          </a>
        </article>
      </div>
    </section>
  )
}

export function MythsEvidence() {
  const [openMyth, setOpenMyth] = useState<number | null>(null)

  return (
    <section id="mitos-e-evidencias" className="myths-evidence" aria-labelledby="myths-title" data-reveal>
      <div className="final-section-heading">
        <div className="section-number">
          <span>08</span>
          <span className="section-number__line" />
          <span>COMPARAR</span>
        </div>
        <TechnicalText>AFIRMAÇÕES SOB INVESTIGAÇÃO</TechnicalText>
        <h2 id="myths-title">MITOS VERSUS EVIDÊNCIAS</h2>
        <p>Abra cada afirmação para ver uma resposta breve e consultar uma fonte.</p>
      </div>
      <div className="myths-evidence__list">
        {myths.map((myth, index) => {
          const expanded = openMyth === index
          const panelId = `myth-evidence-${index + 1}`
          return (
            <article className={`myth-evidence-card${expanded ? ' is-open' : ''}`} key={myth.claim}>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpenMyth(expanded ? null : index)}
              >
                <span className="myth-evidence-card__number">0{index + 1}</span>
                <span>{myth.claim}</span>
                <span className="myth-evidence-card__toggle" aria-hidden="true">{expanded ? '−' : '+'}</span>
              </button>
              {expanded && (
                <div id={panelId} className="myth-evidence-card__answer">
                  <TechnicalText>EVIDÊNCIA</TechnicalText>
                  <p>{myth.correction}</p>
                  <a href={myth.url} target="_blank" rel="noreferrer">
                    {myth.source} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export function FinalChallenge() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answer, setAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const question = finalQuestions[questionIndex]

  const reset = () => {
    setQuestionIndex(0)
    setAnswer(null)
    setScore(0)
    setFinished(false)
  }

  const choose = (index: number) => {
    if (answer !== null) return
    setAnswer(index)
    if (index === question.answer) setScore((current) => current + 1)
  }

  const advance = () => {
    if (questionIndex === finalQuestions.length - 1) {
      setFinished(true)
      return
    }
    setQuestionIndex((current) => current + 1)
    setAnswer(null)
  }

  return (
    <section id="desafio-investigativo" className="final-challenge" aria-labelledby="final-challenge-title" data-reveal>
      <div className="final-section-heading">
        <div className="section-number">
          <span>09</span>
          <span className="section-number__line" />
          <span>PARTICIPAR</span>
        </div>
        <TechnicalText>TRÊS PERGUNTAS · SEM PRÉ-REQUISITOS</TechnicalText>
        <h2 id="final-challenge-title">DESAFIO FINAL DE INVESTIGAÇÃO</h2>
        <p>Teste suas ideias principais. Errar faz parte da revisão e não limita a navegação.</p>
      </div>
      {!finished ? (
        <div className="final-challenge__card">
          <div className="final-challenge__meta">
            <span>QUESTÃO {questionIndex + 1} / {finalQuestions.length}</span>
            <span>PONTOS: {score}</span>
          </div>
          <h3>{question.prompt}</h3>
          <div className="final-challenge__options">
            {question.options.map((option, index) => (
              <button
                type="button"
                key={option}
                disabled={answer !== null}
                aria-pressed={answer === index}
                className={
                  answer === null
                    ? ''
                    : index === question.answer
                      ? 'is-correct'
                      : index === answer
                        ? 'is-incorrect'
                        : ''
                }
                onClick={() => choose(index)}
              >
                <span>{String.fromCharCode(65 + index)}</span>
                {option}
              </button>
            ))}
          </div>
          {answer !== null && (
            <div className="final-challenge__feedback" role="status" aria-live="polite">
              <p>
                <strong>{answer === question.answer ? 'Correto.' : 'Vamos revisar.'}</strong>{' '}
                {question.explanation}
              </p>
              <button type="button" onClick={advance}>
                {questionIndex === finalQuestions.length - 1 ? 'VER RESULTADO' : 'PRÓXIMA PERGUNTA'}
                <span aria-hidden="true"> →</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="final-challenge__result" role="status" aria-live="polite">
          <span>{score} / {finalQuestions.length}</span>
          <div>
            <h3>{score === finalQuestions.length ? 'INVESTIGAÇÃO CONCLUÍDA.' : 'CONHECIMENTO SE CONSTRÓI.'}</h3>
            <p>
              {score === finalQuestions.length
                ? 'Você reconheceu os conceitos essenciais deste percurso.'
                : 'Use o resultado como convite para rever as evidências. As respostas erradas não impedem que você siga pelo site.'}
            </p>
            <button type="button" onClick={reset}>REFAZER DESAFIO</button>
          </div>
        </div>
      )}
    </section>
  )
}

export function FinalConclusion() {
  return (
    <section id="conclusao-e-fontes" className="final-conclusion" aria-labelledby="final-conclusion-title" data-reveal>
      <div className="final-section-heading">
        <div className="section-number">
          <span>10</span>
          <span className="section-number__line" />
          <span>CONSULTAR</span>
        </div>
        <TechnicalText>ENCERRAMENTO DA INVESTIGAÇÃO</TechnicalText>
        <h2 id="final-conclusion-title">CONHECER O QUE SE INALA FAZ DIFERENÇA</h2>
        <p>Três ideias para levar com você:</p>
      </div>
      <div className="final-conclusion__ideas">
        <article>
          <span>01</span>
          <h3>O aerossol não é apenas vapor de água.</h3>
        </article>
        <article>
          <span>02</span>
          <h3>Sua composição pode variar e incluir substâncias potencialmente nocivas.</h3>
        </article>
        <article>
          <span>03</span>
          <h3>Conhecer os riscos ajuda a tomar decisões mais informadas.</h3>
        </article>
      </div>
      <div className="final-conclusion__actions">
        <a href="#abertura">
          REVER O CONTEÚDO <span aria-hidden="true">↗</span>
        </a>
        <p>Prevenir a exposição e buscar informação confiável são passos importantes para proteger a saúde.</p>
      </div>
      <div className="final-conclusion__references">
        <TechnicalText>REFERÊNCIAS UTILIZADAS NESTA EXPERIÊNCIA</TechnicalText>
        <ul>
          {references.map((reference) => (
            <li key={reference.url}>
              <a href={reference.url} target="_blank" rel="noreferrer">
                {reference.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
