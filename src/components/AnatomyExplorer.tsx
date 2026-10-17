import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import {
  airflowSequence,
  respiratorySources,
  respiratoryStructures,
} from '../data/respiratoryStructures'
import { EvidenceMarker, TechnicalText } from './ui'

const airflowDurationMs = 1600

function LungDiagram({
  selectedId,
  airflowId,
  onSelect,
}: {
  selectedId: string
  airflowId: string | null
  onSelect: (id: string) => void
}) {
  const highlightedId = airflowId ?? selectedId

  return (
    <div className="anatomy-figure" aria-label="Diagrama vetorial esquemático dos pulmões">
      <svg
        className="anatomy-diagram"
        viewBox="0 0 700 600"
        role="img"
        aria-labelledby="anatomy-diagram-title anatomy-diagram-description"
      >
        <title id="anatomy-diagram-title">Pulmões e vias respiratórias</title>
        <desc id="anatomy-diagram-description">
          Diagrama esquemático com traqueia, brônquios, bronquíolos, tecido pulmonar e detalhe
          ampliado dos alvéolos.
        </desc>
        <defs>
          <linearGradient id="anatomy-left-lung" x1="150" y1="170" x2="315" y2="485">
            <stop stopColor="var(--color-cyan)" stopOpacity=".24" />
            <stop offset=".53" stopColor="var(--color-green)" stopOpacity=".54" />
            <stop offset="1" stopColor="var(--color-mint)" stopOpacity=".1" />
          </linearGradient>
          <linearGradient id="anatomy-right-lung" x1="550" y1="170" x2="385" y2="485">
            <stop stopColor="var(--color-mint)" stopOpacity=".22" />
            <stop offset=".53" stopColor="var(--color-green)" stopOpacity=".54" />
            <stop offset="1" stopColor="var(--color-cyan)" stopOpacity=".1" />
          </linearGradient>
          <linearGradient id="anatomy-airway" x1="350" y1="75" x2="350" y2="460">
            <stop stopColor="var(--color-mint)" />
            <stop offset="1" stopColor="var(--color-cyan)" />
          </linearGradient>
          <radialGradient id="anatomy-halo">
            <stop stopColor="var(--color-mint)" stopOpacity=".13" />
            <stop offset="1" stopColor="var(--color-mint)" stopOpacity="0" />
          </radialGradient>
          <pattern id="tissue-texture" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1.1" fill="var(--color-cyan)" fillOpacity=".25" />
            <circle cx="16" cy="14" r=".8" fill="var(--color-mint)" fillOpacity=".2" />
          </pattern>
          <filter id="alveolus-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        <circle cx="350" cy="300" r="285" fill="url(#anatomy-halo)" />
        <circle cx="350" cy="300" r="258" className="anatomy-diagram__orbit" />
        <circle
          cx="350"
          cy="300"
          r="232"
          className="anatomy-diagram__orbit anatomy-diagram__orbit--dashed"
        />

        <g
          data-region="lung-tissue"
          className={highlightedId === 'lung-tissue' ? 'is-highlighted' : ''}
        >
          <path
            className="anatomy-diagram__lung anatomy-diagram__lung--left"
            d="M326 207c-23-26-59-53-99-63-57-14-112 10-141 57-29 47-36 114-25 180 10 64 40 116 82 140 34 19 73 14 104-8 49-35 67-102 70-176l9-130Z"
          />
          <path
            className="anatomy-diagram__lung anatomy-diagram__lung--right"
            d="M374 207c23-26 59-53 99-63 57-14 112 10 141 57 29 47 36 114 25 180-10 64-40 116-82 140-34 19-73 14-104-8-49-35-67-102-70-176l-9-130Z"
          />
          <path
            d="M326 207c-23-26-59-53-99-63-57-14-112 10-141 57-29 47-36 114-25 180 10 64 40 116 82 140 34 19 73 14 104-8 49-35 67-102 70-176l9-130Z"
            fill="url(#tissue-texture)"
            className="anatomy-diagram__texture"
          />
          <path
            d="M374 207c23-26 59-53 99-63 57-14 112 10 141 57 29 47 36 114 25 180-10 64-40 116-82 140-34 19-73 14-104-8-49-35-67-102-70-176l-9-130Z"
            fill="url(#tissue-texture)"
            className="anatomy-diagram__texture"
          />
          <g className="anatomy-diagram__tissue-detail">

            <circle cx="192" cy="218" r="2" />
            <circle cx="150" cy="240" r="2.5" />
            <circle cx="213" cy="246" r="2.5" />
            <circle cx="132" cy="275" r="2" />
            <circle cx="194" cy="280" r="3" />
            <circle cx="151" cy="313" r="2.5" />
            <circle cx="221" cy="324" r="2" />
            <circle cx="133" cy="350" r="3" />
            <circle cx="181" cy="366" r="2" />
            <circle cx="169" cy="206" r="3" />
            <circle cx="508" cy="206" r="3" />
            <circle cx="486" cy="218" r="2" />
            <circle cx="528" cy="240" r="2.5" />
            <circle cx="465" cy="246" r="2.5" />
            <circle cx="546" cy="275" r="2" />
            <circle cx="484" cy="280" r="3" />
            <circle cx="527" cy="313" r="2.5" />
            <circle cx="457" cy="324" r="2" />
            <circle cx="545" cy="350" r="3" />
            <circle cx="497" cy="366" r="2" />
          </g>
        </g>

        <g
          data-region="trachea"
          className={highlightedId === 'trachea' ? 'is-highlighted' : ''}
        >
          <path
            d="M339 80v133m22-133v133"
            className="anatomy-diagram__trachea"
          />
          <path
            d="M339 88h22m-22 13h22m-22 13h22m-22 13h22m-22 13h22m-22 13h22m-22 13h22m-22 13h22m-22 13h22"
            className="anatomy-diagram__cartilage"
          />
          <path
            d="M350 81v125"
            className={`anatomy-diagram__flow-path${airflowId === 'trachea' ? ' is-flowing' : ''}`}
          />
        </g>

        <g
          data-region="bronchi"
          className={highlightedId === 'bronchi' ? 'is-highlighted' : ''}
        >
          <path
            d="M350 213c0 17-13 31-29 44l-49 47-65 14m65-14-39 47m138-138c0 17 13 31 29 44l49 47 65 14m-65-14 39 47"
            className="anatomy-diagram__bronchi"
          />
        </g>

        <g
          data-region="bronchioles"
          className={highlightedId === 'bronchioles' ? 'is-highlighted' : ''}
        >
          <path
            d="m272 304-39-5m39 5-8 40m-57-27-26 20m65-33-11-30m5 70-31 22m243-67 39-5m-39 5 8 40m57-27 26 20m-65-33 11-30m-5 70 31 22m-60-55-23 22m-224-22 23 22"
            className="anatomy-diagram__bronchioles"
          />
          <circle cx="195" cy="319" r="3" className="anatomy-diagram__terminal" />
          <circle cx="505" cy="319" r="3" className="anatomy-diagram__terminal" />
        </g>

        <path d="M506 350c27 18 43 38 60 63" className="anatomy-diagram__zoom-line" />
        <circle cx="565" cy="423" r="63" className="anatomy-diagram__alveoli-halo" />
        <circle
          cx="565"
          cy="423"
          r="53"
          fill="var(--color-mint)"
          fillOpacity=".12"
          filter="url(#alveolus-shadow)"
          data-region="alveoli"
          className={highlightedId === 'alveoli' ? 'is-highlighted' : ''}
        />
        <g
          data-region="alveoli"
          className={`anatomy-diagram__alveoli${highlightedId === 'alveoli' ? ' is-highlighted' : ''}`}
        >
          <path
            d="M544 421c-2-13 9-24 21-21 3-13 20-17 28-6 12-4 23 8 18 19 12 8 8 26-6 28-5 12-22 13-29 2-13 7-27-4-24-17-6-1-9-3-8-5Z"
            className="anatomy-diagram__alveoli-cluster"
          />
          <circle cx="548" cy="414" r="9" className="anatomy-diagram__alveolus" />
          <circle cx="565" cy="409" r="10" className="anatomy-diagram__alveolus" />
          <circle cx="583" cy="416" r="9" className="anatomy-diagram__alveolus" />
          <circle cx="554" cy="432" r="10" className="anatomy-diagram__alveolus" />
          <circle cx="573" cy="433" r="10" className="anatomy-diagram__alveolus" />
          <circle cx="585" cy="433" r="8" className="anatomy-diagram__alveolus" />
        </g>
        <text
          x="565"
          y="492"
          textAnchor="middle"
          className="anatomy-diagram__caption"
          aria-label="Detalhe esquemático dos alvéolos"
        >
          <tspan x="565" dy="0">DETALHE</tspan>
          <tspan x="565" dy="26">ESQUEMÁTICO</tspan>
          <tspan x="565" dy="26">DOS ALVÉOLOS</tspan>
        </text>
      </svg>

      {respiratoryStructures.map((structure) => (
        <button
          key={structure.id}
          type="button"
          className={`anatomy-marker${selectedId === structure.id ? ' is-selected' : ''}${airflowId === structure.id ? ' is-flowing' : ''}`}
          style={
            {
              '--marker-x': structure.markerPosition.left,
              '--marker-y': structure.markerPosition.top,
            } as CSSProperties
          }
          aria-label={`Explorar ${structure.name}`}
          aria-pressed={selectedId === structure.id}
          onClick={() => onSelect(structure.id)}
        >
          <span aria-hidden="true" />
        </button>
      ))}
      <span className="anatomy-figure__orientation" aria-hidden="true">
        VISTA FRONTAL · ESQUEMA
      </span>
    </div>
  )
}

function AnatomyExplorer() {
  const [selectedId, setSelectedId] = useState('trachea')
  const [flowStep, setFlowStep] = useState(-1)
  const [flowRunning, setFlowRunning] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const selectedStructure =
    respiratoryStructures.find((structure) => structure.id === selectedId) ??
    respiratoryStructures[0]
  const currentFlow = flowStep >= 0 ? airflowSequence[flowStep] : undefined
  const isFlowComplete = flowStep === airflowSequence.length - 1 && !flowRunning

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(media.matches)
    updatePreference()
    media.addEventListener('change', updatePreference)
    return () => media.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (!flowRunning || reducedMotion) return

    const timer = window.setTimeout(() => {
      const next = Math.min(flowStep + 1, airflowSequence.length - 1)
      const structure = airflowSequence[next]
      setFlowStep(next)
      if (structure) setSelectedId(structure.structureId)
      if (next === airflowSequence.length - 1) setFlowRunning(false)
    }, airflowDurationMs)

    return () => window.clearTimeout(timer)
  }, [flowRunning, flowStep, reducedMotion])

  const startFlow = () => {
    if (flowRunning) {
      setFlowRunning(false)
      return
    }

    if (flowStep === airflowSequence.length - 1) {
      setFlowStep(-1)
    }
    setFlowRunning(true)
    if (reducedMotion) {
      const next = flowStep >= airflowSequence.length - 1 ? 0 : flowStep + 1
      const structure = airflowSequence[next]
      if (structure) {
        setFlowStep(next)
        setSelectedId(structure.structureId)
      }
      setFlowRunning(false)
    }
  }

  const restartFlow = () => {
    setFlowRunning(false)
    setFlowStep(-1)
    setSelectedId('trachea')
  }

  const advanceFlow = () => {
    const next = Math.min(flowStep + 1, airflowSequence.length - 1)
    const structure = airflowSequence[next]
    if (structure) {
      setFlowStep(next)
      setSelectedId(structure.structureId)
      if (next === airflowSequence.length - 1) setFlowRunning(false)
    }
  }

  const activeFlowLabel =
    currentFlow?.caption ?? 'Inicie o percurso para acompanhar as etapas da passagem do ar.'

  return (
    <section
      id="anatomia-pulmonar"
      className="anatomy-section"
      aria-labelledby="anatomy-title"
      data-reveal
    >
      <div className="anatomy-section__heading">
        <div>
          <div className="section-number">
            <span>03</span>
            <span className="section-number__line" />
            <span>MAPA ANATÔMICO</span>
          </div>
          <TechnicalText>EXPLORAÇÃO INTERATIVA</TechnicalText>
          <h2 id="anatomy-title">UMA VIAGEM PELO SISTEMA RESPIRATÓRIO</h2>
          <p>
            Explore as estruturas que entram em contato com o ar inalado e descubra por que a
            composição desse aerossol importa.
          </p>
        </div>
        <EvidenceMarker tone="cyan">DIAGRAMA 2D · ESQUEMÁTICO</EvidenceMarker>
      </div>

      <div className="anatomy-explorer">
        <div className="anatomy-explorer__visual-column">
          <div className="anatomy-explorer__visual-heading">
            <span>VIAS RESPIRATÓRIAS</span>
            <span>SELECIONE UMA REGIÃO</span>
          </div>
          <LungDiagram
            selectedId={selectedId}
            airflowId={currentFlow?.structureId ?? null}
            onSelect={setSelectedId}
          />
          <div className="anatomy-selector" aria-label="Selecionar estrutura respiratória">
            {respiratoryStructures.map((structure) => (
              <button
                type="button"
                key={structure.id}
                className={selectedId === structure.id ? 'is-selected' : ''}
                aria-pressed={selectedId === structure.id}
                onClick={() => setSelectedId(structure.id)}
              >
                {structure.name}
              </button>
            ))}
          </div>
        </div>

        <aside className="anatomy-info" aria-labelledby="anatomy-info-title">
          <div className="anatomy-info__header">
            <TechnicalText>ESTRUTURA SELECIONADA</TechnicalText>
            <span className="anatomy-info__index">
              {String(
                respiratoryStructures.findIndex(({ id }) => id === selectedStructure.id) + 1,
              ).padStart(2, '0')}
              <span> / 05</span>
            </span>
          </div>
          <h3 id="anatomy-info-title" aria-live="polite">
            {selectedStructure.name}
          </h3>
          <div className="anatomy-info__block">
            <span>FUNÇÃO PRINCIPAL</span>
            <p>{selectedStructure.function}</p>
          </div>
          <div className="anatomy-info__block">
            <span>RELAÇÃO COM O AR INALADO</span>
            <p>{selectedStructure.airflow}</p>
          </div>
          <div className="anatomy-info__note">
            <EvidenceMarker tone="cyan">OBSERVAÇÃO</EvidenceMarker>
            <p>{selectedStructure.observation}</p>
          </div>
          <div className="anatomy-info__sources">
            <span>FONTES DE CONTEXTO</span>
            {respiratorySources.map((source) => (
              <a key={source.url} href={source.url} target="_blank" rel="noreferrer">
                {source.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </aside>
      </div>

      <div className="airflow-control" aria-labelledby="airflow-title">
        <div className="airflow-control__intro">
          <div>
            <TechnicalText>PERCURSO ANIMADO</TechnicalText>
            <h3 id="airflow-title">Acompanhe o caminho do ar</h3>
          </div>
          <p aria-live="polite">{activeFlowLabel}</p>
        </div>
        <ol className={`airflow-steps${flowRunning ? ' is-running' : ''}`}>
          {airflowSequence.map((step, index) => (
            <li
              key={step.structureId}
              className={`${index <= flowStep ? 'is-reached' : ''}${index === flowStep ? ' is-current' : ''}`}
            >
              <span className="airflow-steps__point" aria-hidden="true" />
              <span className="airflow-steps__label">{step.label}</span>
              {index < airflowSequence.length - 1 && (
                <span className="airflow-steps__connector" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
        <div className="airflow-control__actions">
          <button
            type="button"
            className="airflow-control__primary"
            onClick={startFlow}
            disabled={isFlowComplete}
          >
            <span aria-hidden="true">{flowRunning ? 'Ⅱ' : reducedMotion ? '→' : '▶'}</span>
            {flowRunning
              ? 'PAUSAR'
              : reducedMotion
                ? flowStep >= 0
                  ? 'AVANÇAR'
                  : 'INICIAR'
                : flowStep >= 0
                  ? 'CONTINUAR'
                  : 'INICIAR'}
          </button>
          <button
            type="button"
            className="airflow-control__secondary"
            onClick={advanceFlow}
            disabled={flowStep >= airflowSequence.length - 1}
          >
            AVANÇAR ETAPA
            <span aria-hidden="true">→</span>
          </button>
          <button
            type="button"
            className="airflow-control__secondary"
            onClick={restartFlow}
            disabled={flowStep < 0}
          >
            REINICIAR
          </button>
          {reducedMotion && (
            <span className="airflow-control__reduced-note">
              Movimento reduzido: avance etapa por etapa.
            </span>
          )}
        </div>
      </div>

      <p className="anatomy-caveat">
        O aerossol não é apenas vapor de água e sua composição varia. A deposição depende das
        propriedades das partículas e do padrão de inalação; o diagrama não representa doses nem
        prevê onde cada substância se deposita.
      </p>
    </section>
  )
}

export default AnatomyExplorer
