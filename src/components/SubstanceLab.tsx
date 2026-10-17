import { useState } from 'react'
import type { CSSProperties } from 'react'
import { substanceModules } from '../data/substanceModules'
import type { SubstanceModule } from '../data/substanceModules'
import { CategoryTag, EvidenceMarker, TechnicalText } from './ui'

function LaboratoryVisual({ module }: { module: SubstanceModule }) {
  return (
    <div className={`lab-visual lab-visual--${module.id}`}>
      <div className="lab-visual__grid" aria-hidden="true" />
      <div className="lab-visual__head">
        <span>AMOSTRA EM ANÁLISE</span>
        <span className="lab-visual__live">
          <span />
          VISUALIZAÇÃO CONCEITUAL
        </span>
      </div>
      <svg
        className="lab-visual__artwork"
        viewBox="0 0 620 300"
        role="img"
        aria-labelledby="lab-visual-title lab-visual-description"
      >
        <title id="lab-visual-title">Representação ilustrativa de análise do aerossol</title>
        <desc id="lab-visual-description">
          Diagrama conceitual que muda conforme o módulo selecionado; não representa medidas reais.
        </desc>
        <defs>
          <radialGradient id="sample-glow">
            <stop stopColor="var(--module-accent)" stopOpacity=".17" />
            <stop offset="1" stopColor="var(--module-accent)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sample-line" x1="120" y1="150" x2="500" y2="150">
            <stop stopColor="var(--module-accent)" stopOpacity="0" />
            <stop offset=".5" stopColor="var(--module-accent)" stopOpacity=".8" />
            <stop offset="1" stopColor="var(--module-accent-secondary)" stopOpacity="0" />
          </linearGradient>
          <filter id="sample-soft-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>
        <circle cx="310" cy="150" r="124" fill="url(#sample-glow)" />
        <path d="M78 150h464" stroke="url(#sample-line)" strokeWidth="1" strokeDasharray="2 8" />
        <path d="M105 58v184m410-184v184" stroke="var(--module-accent)" strokeOpacity=".13" />
        <path
          d="M105 58h410M105 242h410"
          stroke="var(--module-accent)"
          strokeOpacity=".1"
          strokeDasharray="3 9"
        />
        <g className="lab-visual__particles" aria-hidden="true">
          <circle cx="154" cy="131" r="4" />
          <circle cx="187" cy="178" r="2.5" />
          <circle cx="218" cy="105" r="3" />
          <circle cx="247" cy="152" r="5" />
          <circle cx="270" cy="205" r="2.5" />
          <circle cx="291" cy="120" r="3" />
          <circle cx="317" cy="181" r="4" />
          <circle cx="344" cy="92" r="2.5" />
          <circle cx="366" cy="145" r="5" />
          <circle cx="389" cy="209" r="3" />
          <circle cx="416" cy="119" r="2.5" />
          <circle cx="445" cy="169" r="4" />
          <circle cx="473" cy="101" r="3" />
        </g>
        {module.id === 'metals' && (
          <g className="lab-visual__instrument">
            <path d="M253 103h114v95H253z" />
            <path d="M264 117h92m-92 67h92" />
            <path d="M264 147h92" strokeDasharray="2 6" />
            <circle cx="281" cy="147" r="4" />
            <circle cx="310" cy="147" r="4" />
            <circle cx="339" cy="147" r="4" />
            <text x="310" y="223" textAnchor="middle">
              DETECTOR ILUSTRATIVO · SEM ESCALA
            </text>
          </g>
        )}
        {module.id === 'nicotine' && (
          <g className="lab-visual__molecule">
            <path d="m276 147 27-28 33 12 5 36-29 22-31-13z" />
            <path d="m303 119 1-31m33 43 29-12m-25 48 19 26" />
            <circle cx="276" cy="147" r="8" />
            <circle cx="303" cy="119" r="8" />
            <circle cx="336" cy="131" r="8" />
            <circle cx="341" cy="167" r="8" />
            <circle cx="312" cy="189" r="8" />
            <circle cx="281" cy="176" r="8" />
            <text x="305" y="229" textAnchor="middle">
              NICOTINA · REPRESENTAÇÃO CONCEITUAL
            </text>
          </g>
        )}
        {module.id === 'flavorings' && (
          <g className="lab-visual__heat">
            <path d="M251 183h119l-11 22h-97z" />
            <path d="M269 180c-13-18 13-22 0-40m38 40c-13-18 13-22 0-40m37 40c-13-18 13-22 0-40" />
            <circle cx="267" cy="114" r="9" />
            <circle cx="307" cy="103" r="6" />
            <circle cx="345" cy="116" r="11" />
            <path d="M262 183h96" />
            <text x="310" y="229" textAnchor="middle">
              LÍQUIDO + AQUECIMENTO → AEROSSOL
            </text>
          </g>
        )}
        <circle
          cx="310"
          cy="150"
          r="38"
          className="lab-visual__focus-ring"
          filter="url(#sample-soft-glow)"
        />
      </svg>
      <div className="lab-visual__footer">
        <span>ANÁLISE</span>
        <span className="lab-visual__footer-line" />
        <span>AMOSTRA CONCEITUAL · NÃO É MEDIÇÃO</span>
      </div>
    </div>
  )
}

function SubstanceLab() {
  const [selectedId, setSelectedId] = useState<SubstanceModule['id']>('metals')
  const [investigated, setInvestigated] = useState<SubstanceModule['id'][]>([])
  const selected =
    substanceModules.find((module) => module.id === selectedId) ?? substanceModules[0]
  const allInvestigated = investigated.length === substanceModules.length

  const markInvestigated = () => {
    setInvestigated((current) =>
      current.includes(selected.id) ? current : [...current, selected.id],
    )
  }

  return (
    <section
      id="laboratorio-substancias"
      className="substance-lab"
      aria-labelledby="substance-lab-title"
      data-reveal
    >
      <div className="substance-lab__heading">
        <div>
          <div className="section-number">
            <span>04</span>
            <span className="section-number__line" />
            <span>LABORATÓRIO DE SUBSTÂNCIAS</span>
          </div>
          <TechnicalText>INVESTIGAÇÃO DE COMPONENTES</TechnicalText>
          <h2 id="substance-lab-title">O QUE EXISTE NO AEROSSOL?</h2>
          <p>
            Nem tudo o que é inalado é visível. Investigue os componentes e entenda por que sua
            presença importa.
          </p>
        </div>
        <div className="substance-lab__progress" aria-label={`${investigated.length} de 3 módulos investigados`}>
          <div className="substance-lab__progress-label">
            <span>MÓDULOS INVESTIGADOS</span>
            <span>{String(investigated.length).padStart(2, '0')} / 03</span>
          </div>
          <div
            className="substance-lab__progress-track"
            role="progressbar"
            aria-label="Módulos investigados"
            aria-valuemin={0}
            aria-valuemax={3}
            aria-valuenow={investigated.length}
          >
            <span style={{ width: `${(investigated.length / substanceModules.length) * 100}%` }} />
          </div>
        </div>
      </div>

      <div className="substance-lab__module-selector" role="group" aria-label="Módulos de investigação">
        {substanceModules.map((module) => (
          <button
            type="button"
            key={module.id}
            className={`substance-module-tab substance-module-tab--${module.id}${selected.id === module.id ? ' is-selected' : ''}${investigated.includes(module.id) ? ' is-investigated' : ''}`}
            aria-pressed={selected.id === module.id}
            onClick={() => setSelectedId(module.id)}
          >
            <span className="substance-module-tab__number">{module.number}</span>
            <span className="substance-module-tab__name">{module.name}</span>
            <span className="substance-module-tab__status">
              {investigated.includes(module.id) ? 'INVESTIGADO' : 'ABRIR MÓDULO'}
            </span>
            {investigated.includes(module.id) && (
              <span className="substance-module-tab__check" aria-label="Investigado">
                ✓
              </span>
            )}
          </button>
        ))}
      </div>

      <div
        className={`substance-lab__workspace substance-lab__workspace--${selected.id}`}
        style={
          {
            '--module-accent':
              selected.id === 'metals'
                ? 'var(--color-cyan)'
                : selected.id === 'nicotine'
                  ? 'var(--color-mint)'
                  : 'var(--color-coral)',
            '--module-accent-secondary':
              selected.id === 'metals'
                ? 'var(--color-mint)'
                : selected.id === 'nicotine'
                  ? 'var(--color-cyan)'
                  : 'var(--color-mint)',
          } as CSSProperties
        }
      >
        <div className="substance-lab__visual-column">
          <LaboratoryVisual module={selected} />
          <div className="substance-lab__legend">
            <span className="substance-lab__legend-mark" aria-hidden="true" />
            Visualização ilustrativa — não representa a concentração real de um produto específico.
          </div>
          <div className="substance-lab__tags" aria-label="Termos relacionados">
            {selected.tags.map((tag) => (
              <CategoryTag
                key={tag}
                tone={
                  selected.id === 'metals'
                    ? 'cyan'
                    : selected.id === 'nicotine'
                      ? 'mint'
                      : 'coral'
                }
              >
                {tag}
              </CategoryTag>
            ))}
            {selected.id === 'metals' && (
              <span className="substance-lab__tag-note">* investigado em estudos específicos</span>
            )}
          </div>
        </div>

        <article className="substance-analysis" aria-labelledby="substance-analysis-title">
          <div className="substance-analysis__topline">
            <EvidenceMarker tone={selected.id === 'metals' ? 'cyan' : 'mint'}>
              {selected.eyebrow}
            </EvidenceMarker>
            <span>{selected.number} / 03</span>
          </div>
          <h3 id="substance-analysis-title" aria-live="polite">
            {selected.title}
          </h3>
          <p className="substance-analysis__summary">{selected.summary}</p>
          <div className="substance-analysis__mechanism">
            <span>COMO PODE ESTAR PRESENTE</span>
            <p>{selected.mechanism}</p>
          </div>
          <div className="substance-analysis__why">
            <span>POR QUE ISSO IMPORTA?</span>
            <p>{selected.whyItMatters}</p>
          </div>
          <details className="substance-analysis__science">
            <summary>O que a ciência indica?</summary>
            <p>{selected.science}</p>
            <div className="substance-analysis__sources">
              {selected.sources.map((source) => (
                <a key={source.url} href={source.url} target="_blank" rel="noreferrer">
                  {source.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </details>
          <button
            type="button"
            className={`substance-analysis__mark${investigated.includes(selected.id) ? ' is-marked' : ''}`}
            onClick={markInvestigated}
            aria-pressed={investigated.includes(selected.id)}
          >
            <span aria-hidden="true">{investigated.includes(selected.id) ? '✓' : '+'}</span>
            {investigated.includes(selected.id) ? 'MÓDULO INVESTIGADO' : 'MARCAR COMO INVESTIGADO'}
          </button>
        </article>
      </div>

      <p className="substance-lab__caveat">
        A composição do aerossol varia conforme produto, líquido, dispositivo, aquecimento e modo
        de uso. Esta visualização é conceitual, não analítica.
      </p>

      {allInvestigated && (
        <div className="substance-lab__conclusion" role="status" aria-live="polite">
          <div className="substance-lab__conclusion-icon" aria-hidden="true">
            ✓
          </div>
          <div>
            <TechnicalText>INVESTIGAÇÃO CONCLUÍDA</TechnicalText>
            <p>
              O aerossol é uma mistura. Seus possíveis efeitos dependem das substâncias presentes,
              de suas concentrações e das condições de exposição.
            </p>
          </div>
        </div>
      )}

      <a className="substance-lab__continue" href="#alveolos">
        CONTINUAR PARA A PRÓXIMA SEÇÃO
        <span aria-hidden="true">→</span>
      </a>
    </section>
  )
}

export default SubstanceLab
