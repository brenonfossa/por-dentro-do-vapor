import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, MouseEvent } from 'react'
import { storySections } from './data/storySections'
import AnatomyExplorer from './components/AnatomyExplorer'
import AlveoliJourney from './components/AlveoliJourney'
import {
  DeviceExplorer,
  EvaliSection,
  FinalChallenge,
  FinalConclusion,
  MythsEvidence,
} from './components/FinalChapters'
import SubstanceLab from './components/SubstanceLab'
import {
  CategoryTag,
  ContentContainer,
  EvidenceMarker,
  IconButton,
  InfoCard,
  PrimaryButton,
  ResourceUnavailable,
  TechnicalText,
} from './components/ui'
import './App.css'

function BrandMark() {
  return (
    <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path
        d="M18 4v10m0 0c-2-3-6-4-9-2-4 2-5 7-4 12 1 5 4 8 8 7 3-1 5-5 5-10m0-7c2-3 6-4 9-2 4 2 5 7 4 12-1 5-4 8-8 7-3-1-5-5-5-10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 14v7m-7-5 4 4m-5 2 5 1m13-7-4 4m5 2-5 1"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="5" r="2" fill="currentColor" />
    </svg>
  )
}

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M3.5 10h12m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function ScreenIcon({ active }: { active: boolean }) {
  return active ? (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M7 3v4H3m10-4v4h4M3 13v4h4m10-4v4h-4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 7V3h4m6 0h4v4M17 13v4h-4m-6 0H3v-4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function revealSectionsReachedByScroll() {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((target) => {
    if (target.getBoundingClientRect().top <= window.innerHeight) {
      target.classList.add('is-visible')
    }
  })
}

function AmbientParticles() {
  return (
    <div className="ambient-particles" aria-hidden="true">
      {Array.from({ length: 20 }, (_, index) => {
        const style: CSSProperties = {
          left: `${((index * 47 + 11) % 96) + 2}%`,
          top: `${((index * 31 + 7) % 85) + 5}%`,
          width: `${index % 5 === 0 ? 3 : 2}px`,
          height: `${index % 5 === 0 ? 3 : 2}px`,
          animationDelay: `${(index % 8) * -0.8}s`,
          animationDuration: `${12 + (index % 5) * 2}s`,
        }

        return <span className="ambient-particles__point" key={index} style={style} />
      })}
    </div>
  )
}

function LungArtwork() {
  return (
    <div className="lung-artwork" aria-hidden="true">
      <div className="lung-artwork__halo" />
      <svg viewBox="0 0 480 500" fill="none">
        <defs>
          <linearGradient id="lung-left" x1="115" y1="130" x2="225" y2="395">
            <stop stopColor="var(--color-cyan)" stopOpacity=".3" />
            <stop offset=".55" stopColor="var(--color-mint)" stopOpacity=".2" />
            <stop offset="1" stopColor="var(--color-green)" stopOpacity=".36" />
          </linearGradient>
          <linearGradient id="lung-right" x1="360" y1="130" x2="250" y2="395">
            <stop stopColor="var(--color-mint)" stopOpacity=".34" />
            <stop offset=".6" stopColor="var(--color-cyan)" stopOpacity=".18" />
            <stop offset="1" stopColor="var(--color-green)" stopOpacity=".36" />
          </linearGradient>
          <radialGradient id="lung-glow">
            <stop stopColor="var(--color-mint)" stopOpacity=".2" />
            <stop offset="1" stopColor="var(--color-mint)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="airway" x1="240" y1="69" x2="240" y2="229">
            <stop stopColor="#8fe9c3" stopOpacity=".85" />
            <stop offset="1" stopColor="var(--color-cyan)" stopOpacity=".45" />
          </linearGradient>
        </defs>
        <circle cx="240" cy="250" r="192" fill="url(#lung-glow)" />
        <circle cx="240" cy="250" r="178" stroke="white" strokeOpacity=".07" />
        <circle cx="240" cy="250" r="150" stroke="white" strokeOpacity=".05" strokeDasharray="2 9" />
        <path
          d="M227 188c-14-13-33-29-55-39-36-16-72-4-91 27-19 31-24 79-17 122 8 49 31 85 65 99 23 9 47 5 64-10 25-22 33-62 34-104l1-95Z"
          fill="url(#lung-left)"
          stroke="var(--color-cyan)"
          strokeOpacity=".52"
          strokeWidth="1.4"
        />
        <path
          d="M253 188c14-13 33-29 55-39 36-16 72-4 91 27 19 31 24 79 17 122-8 49-31 85-65 99-23 9-47 5-64-10-25-22-33-62-34-104l-1-95Z"
          fill="url(#lung-right)"
          stroke="var(--color-mint)"
          strokeOpacity=".57"
          strokeWidth="1.4"
        />
        <path
          d="M240 73v108m0 0c-12 9-21 20-30 34m30-34c12 9 21 20 30 34m-60-3c-15 4-27 12-39 23m39-23c-5 13-8 26-8 40m68-40c15 4 27 12 39 23m-39-23c5 13 8 26 8 40m-76-17c-17 7-29 18-39 33m39-33c-6 13-8 27-7 40m83-40c17 7 29 18 39 33m-39-33c6 13 8 27 7 40m-90-7c-13 9-21 21-28 35m28-35c-2 15 0 29 5 41m75-41c13 9 21 21 28 35m-28-35c2 15 0 29-5 41m-70-6c-7 12-11 24-12 37m82-37c7 12 11 24 12 37"
          stroke="url(#airway)"
          strokeOpacity=".86"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M229 71h22m-22 9h22m-22 9h22" stroke="var(--color-mint)" strokeOpacity=".42" />
        <path
          d="M117 235c23 7 42 21 54 43m194-43c-23 7-42 21-54 43M98 291c21-2 39 2 55 13m174-13c-21-2-39 2-55 13"
          stroke="white"
          strokeOpacity=".13"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M224 225c-8 28-12 59-12 97m44-97c8 28 12 59 12 97"
          stroke="var(--color-cyan)"
          strokeOpacity=".24"
          strokeWidth="1"
        />
        <circle cx="137" cy="226" r="2" fill="var(--color-cyan)" />
        <circle cx="347" cy="282" r="2" fill="var(--color-mint)" />
        <circle cx="240" cy="184" r="3" fill="var(--color-mint)" />
      </svg>
      <div className="lung-artwork__annotation lung-artwork__annotation--left">
        <span />
        <span>ÁRVORE RESPIRATÓRIA</span>
      </div>
      <div className="lung-artwork__annotation lung-artwork__annotation--right">
        <span />
        <span>ILUSTRAÇÃO CONCEITUAL</span>
      </div>
      <span className="lung-artwork__coordinates">SISTEMA RESPIRATÓRIO · 01</span>
    </div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState(storySections[0].id)
  const [menuOpen, setMenuOpen] = useState(false)
  const [presentationActive, setPresentationActive] = useState(false)
  const [presentationMessage, setPresentationMessage] = useState('')
  const dialogRef = useRef<HTMLDialogElement>(null)
  const pendingNavigationRef = useRef<string | null>(null)
  const navigationTimeoutRef = useRef<number | null>(null)
  const activeIndex = storySections.findIndex(({ id }) => id === activeSection)
  const progress = ((activeIndex + 1) / storySections.length) * 100

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (menuOpen && !dialog.open) dialog.showModal()
    if (!menuOpen && dialog.open) dialog.close()
  }, [menuOpen])

  useEffect(() => {
    let frameId: number | null = null

    const updateActiveSection = () => {
      frameId = null
      revealSectionsReachedByScroll()

      if (pendingNavigationRef.current) return

      const lastSection = storySections[storySections.length - 1]
      const reachedPageEnd =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
      const activeId =
        reachedPageEnd && lastSection
          ? lastSection.id
          : storySections.reduce((active, section) => {
              const element = document.getElementById(section.id)
              return element && element.getBoundingClientRect().top <= window.innerHeight * 0.35
                ? section
                : active
            }, storySections[0]).id

      setActiveSection((current) => (current === activeId ? current : activeId))
    }

    const scheduleActiveSectionUpdate = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(updateActiveSection)
    }

    const settleNavigation = () => {
      const target = pendingNavigationRef.current
      if (!target) return

      pendingNavigationRef.current = null
      if (navigationTimeoutRef.current !== null) {
        window.clearTimeout(navigationTimeoutRef.current)
        navigationTimeoutRef.current = null
      }
      setActiveSection(target)
      scheduleActiveSectionUpdate()
    }

    scheduleActiveSectionUpdate()
    window.addEventListener('scroll', scheduleActiveSectionUpdate, { passive: true })
    window.addEventListener('resize', scheduleActiveSectionUpdate)
    window.addEventListener('scrollend', settleNavigation)

    return () => {
      window.removeEventListener('scroll', scheduleActiveSectionUpdate)
      window.removeEventListener('resize', scheduleActiveSectionUpdate)
      window.removeEventListener('scrollend', settleNavigation)
      if (frameId !== null) window.cancelAnimationFrame(frameId)
      if (navigationTimeoutRef.current !== null) window.clearTimeout(navigationTimeoutRef.current)
    }
  }, [])

  useEffect(() => {
    const updatePresentationState = () => setPresentationActive(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', updatePresentationState)

    return () => document.removeEventListener('fullscreenchange', updatePresentationState)
  }, [])

  useEffect(() => {
    const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    revealTargets.forEach((target) => revealObserver.observe(target))

    return () => revealObserver.disconnect()
  }, [])

  const handleMenuBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) setMenuOpen(false)
  }

  const togglePresentation = async () => {
    setPresentationMessage('')

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen()
      } else if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen()
      } else {
        setPresentationMessage('O modo de tela cheia não está disponível neste navegador.')
      }
    } catch {
      setPresentationMessage('Não foi possível ativar o modo de apresentação neste navegador.')
    }
  }

  const closeMenu = () => setMenuOpen(false)
  const navigateToSection = (id: string) => {
    setActiveSection(id)
    pendingNavigationRef.current = id
    if (navigationTimeoutRef.current !== null) window.clearTimeout(navigationTimeoutRef.current)
    navigationTimeoutRef.current = window.setTimeout(() => {
      pendingNavigationRef.current = null
      navigationTimeoutRef.current = null
      window.requestAnimationFrame(revealSectionsReachedByScroll)
    }, 1800)
    closeMenu()
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo
      </a>

      <main id="conteudo-principal" className="main-content">
        <header className={`topbar${activeSection !== 'abertura' ? ' topbar--scrolled' : ''}`}>
          <a className="topbar__brand" href="#abertura" aria-label="Por Dentro do Vapor — início">
            <span className="brand__mark">
              <BrandMark />
            </span>
            <span className="brand__name">
              <strong>POR DENTRO</strong>
              <span>DO VAPOR</span>
            </span>
          </a>
          <div className="topbar__identity">
            <span>INVESTIGAÇÃO CIENTÍFICA</span>
            <span className="topbar__slash">/</span>
            <span>AGÊNCIA INOVASAÚDE · GRUPO 01</span>
          </div>
          <div className="topbar__controls">
            <IconButton
              label={menuOpen ? 'Fechar menu de seções' : 'Abrir menu de seções'}
              aria-expanded={menuOpen}
              aria-haspopup="dialog"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <MenuIcon open={menuOpen} />
            </IconButton>
            <IconButton
              label={presentationActive ? 'Sair do modo apresentação' : 'Ativar modo apresentação'}
              aria-pressed={presentationActive}
              onClick={togglePresentation}
            >
              <ScreenIcon active={presentationActive} />
            </IconButton>
          </div>
          <div className="reading-progress" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>
          <span className="topbar__section-count" aria-label={`Seção ${activeIndex + 1} de 10`}>
            {storySections[activeIndex]?.number ?? '01'}
            <span> / 10</span>
          </span>
        </header>

        <dialog
          className="section-menu"
          ref={dialogRef}
          aria-labelledby="section-menu-title"
          onClick={handleMenuBackdropClick}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setMenuOpen(false)
          }}
          onCancel={closeMenu}
          onClose={closeMenu}
        >
          <div className="section-menu__panel">
            <div className="section-menu__header">
              <div>
                <TechnicalText>ÍNDICE DA INVESTIGAÇÃO</TechnicalText>
                <h2 id="section-menu-title">Percurso</h2>
              </div>
              <IconButton label="Fechar menu de seções" onClick={closeMenu}>
                <MenuIcon open />
              </IconButton>
            </div>
            <nav aria-label="Navegar para uma seção">
              <ol>
                {storySections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={activeSection === section.id ? 'is-active' : ''}
                      aria-current={activeSection === section.id ? 'location' : undefined}
                      onClick={() => navigateToSection(section.id)}
                    >
                      <span className="section-menu__number">{section.number}</span>
                      <span>{section.title}</span>
                      <ArrowIcon diagonal />
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <span className="section-menu__footnote">QUÍMICA · BIOLOGIA · SISTEMA RESPIRATÓRIO</span>
          </div>
        </dialog>

        <div className="presentation-message" role="status" aria-live="polite">
          {presentationMessage}
        </div>

        <ContentContainer className="story">
          <section id="abertura" className="opening-section" aria-labelledby="opening-title">
            <AmbientParticles />
            <div className="opening-section__copy">
              <TechnicalText className="opening-section__index">
                AGÊNCIA INOVASAÚDE · GRUPO 01
              </TechnicalText>
              <h1 id="opening-title">
                POR DENTRO
                <br />
                DO <span>VAPOR</span>
              </h1>
              <p className="opening-section__subtitle">
                A ciência por trás do aerossol dos cigarros eletrônicos.
              </p>
              <p className="opening-section__intro">
                Explore o caminho das substâncias inaladas e descubra o que elas podem revelar
                sobre a saúde dos pulmões.
              </p>
              <div className="opening-section__actions">
                <PrimaryButton href="#mito-do-vapor">
                  INICIAR INVESTIGAÇÃO
                  <ArrowIcon />
                </PrimaryButton>
              </div>
            </div>

            <div className="opening-section__visual">
              <LungArtwork />
              <div className="opening-section__visual-label">
                <span className="status-dot" />
                VISUALIZAÇÃO ANATÔMICA · ILUSTRAÇÃO SVG
              </div>
            </div>

            <a className="opening-section__scroll" href="#mito-do-vapor">
              <span className="opening-section__scroll-line" />
              ROLE PARA EXPLORAR
              <span className="opening-section__scroll-arrow" aria-hidden="true">
                ↓
              </span>
            </a>
          </section>

          <section className="focus-section" aria-labelledby="focus-title" data-reveal>
            <div className="section-heading">
              <div>
                <TechnicalText>O QUE VAMOS INVESTIGAR</TechnicalText>
                <h2 id="focus-title">Três frentes. Uma pergunta.</h2>
              </div>
              <p>
                Um roteiro para observar, questionar e consultar fontes — sem conclusões
                antecipadas.
              </p>
            </div>
            <div className="focus-grid">
              <InfoCard className="focus-card">
                <span className="focus-card__number">01</span>
                <CategoryTag tone="cyan">COMPOSIÇÃO</CategoryTag>
                <h3>Metais</h3>
                <p>Elementos e materiais a investigar no contexto dos dispositivos.</p>
                <span className="focus-card__rule" />
              </InfoCard>
              <InfoCard className="focus-card">
                <span className="focus-card__number">02</span>
                <CategoryTag>SUBSTÂNCIA</CategoryTag>
                <h3>Nicotina</h3>
                <p>Uma categoria própria para contextualizar sua presença e seus efeitos.</p>
                <span className="focus-card__rule" />
              </InfoCard>
              <InfoCard className="focus-card">
                <span className="focus-card__number">03</span>
                <CategoryTag tone="neutral">COMPOSTOS</CategoryTag>
                <h3>Aromatizantes e outros</h3>
                <p>Compostos associados que serão examinados com apoio de fontes.</p>
                <span className="focus-card__rule" />
              </InfoCard>
            </div>
          </section>

          <section
            id="mito-do-vapor"
            className="myth-section"
            aria-labelledby="myth-title"
            data-reveal
          >
            <div className="myth-section__copy">
              <SectionNumber number="02" label="PRIMEIRA PERGUNTA" />
              <TechnicalText>MITO OU EVIDÊNCIA?</TechnicalText>
              <h2 id="myth-title">
                Vapor é só
                <br />
                <span>vapor?</span>
              </h2>
              <p>
                Antes de seguir o percurso, vale olhar de perto uma ideia comum. O que parece
                visível no ar pode ser um ponto de partida para investigar.
              </p>
              <EvidenceMarker tone="cyan">MÓDULO CIENTÍFICO EM PREPARAÇÃO</EvidenceMarker>
            </div>
            <div className="myth-section__visual" aria-hidden="true">
              <div className="myth-section__orbit myth-section__orbit--outer" />
              <div className="myth-section__orbit myth-section__orbit--inner" />
              <div className="myth-section__mist">
                <span />
                <span />
                <span />
              </div>
              <span className="myth-section__visual-caption">OBSERVAR · QUESTIONAR · INVESTIGAR</span>
              <div className="myth-section__annotation">
                <span className="status-dot" />
                UMA PERGUNTA, NÃO UMA CONCLUSÃO
              </div>
            </div>
            <div className="myth-section__placeholder">
              <ResourceUnavailable title="Módulo interativo">
                Esta etapa receberá uma comparação visual entre afirmações e evidências.
              </ResourceUnavailable>
            </div>
          </section>

          <AnatomyExplorer />

          <SubstanceLab />

          <AlveoliJourney />

          <EvaliSection />

          <DeviceExplorer />

          <MythsEvidence />

          <FinalChallenge />

          <FinalConclusion />

          <footer className="site-footer">
            <a className="site-footer__brand" href="#abertura">
              <BrandMark />
              <span>POR DENTRO DO VAPOR</span>
            </a>
            <span>EXPERIÊNCIA EDUCACIONAL · GRUPO 01</span>
            <a href="#abertura" className="site-footer__back">
              VOLTAR AO INÍCIO <ArrowIcon diagonal />
            </a>
          </footer>
        </ContentContainer>
      </main>
      <div className="ambient-glow ambient-glow--top" aria-hidden="true" />
      <div className="ambient-glow ambient-glow--bottom" aria-hidden="true" />
    </div>
  )
}

function SectionNumber({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-number">
      <span>{number}</span>
      <span className="section-number__line" />
      <span>{label}</span>
    </div>
  )
}

export default App
