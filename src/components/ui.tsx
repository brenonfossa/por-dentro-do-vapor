import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from 'react'

type ButtonVariantProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
}

export function PrimaryButton({ children, className = '', ...props }: ButtonVariantProps) {
  return (
    <a className={`action-button action-button--primary ${className}`} {...props}>
      {children}
    </a>
  )
}

export function SecondaryButton({ children, className = '', ...props }: ButtonVariantProps) {
  return (
    <a className={`action-button action-button--secondary ${className}`} {...props}>
      {children}
    </a>
  )
}

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  children: ReactNode
}

export function IconButton({ label, children, ...props }: IconButtonProps) {
  return (
    <button className="icon-button" aria-label={label} type="button" {...props}>
      {children}
    </button>
  )
}

type CategoryTagProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: 'mint' | 'cyan' | 'coral' | 'neutral'
  children: ReactNode
}

export function CategoryTag({
  tone = 'mint',
  children,
  className = '',
  ...props
}: CategoryTagProps) {
  return (
    <span className={`category-tag category-tag--${tone} ${className}`} {...props}>
      {children}
    </span>
  )
}

export function InfoCard({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`info-card ${className}`} {...props}>
      {children}
    </div>
  )
}

type ScientificPanelProps = HTMLAttributes<HTMLElement> & {
  label: string
  children: ReactNode
}

export function ScientificPanel({
  label,
  children,
  className = '',
  ...props
}: ScientificPanelProps) {
  return (
    <section className={`scientific-panel ${className}`} {...props}>
      <span className="scientific-panel__label">{label}</span>
      {children}
    </section>
  )
}

type EvidenceMarkerProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
  tone?: 'mint' | 'cyan' | 'coral'
}

export function EvidenceMarker({
  children,
  tone = 'mint',
  className = '',
  ...props
}: EvidenceMarkerProps) {
  return (
    <span className={`evidence-marker evidence-marker--${tone} ${className}`} {...props}>
      <span className="evidence-marker__dot" aria-hidden="true" />
      {children}
    </span>
  )
}

type SectionDividerProps = {
  number: string
  title: string
}

export function SectionDivider({ number, title }: SectionDividerProps) {
  return (
    <div className="section-divider" aria-hidden="true">
      <span>{number}</span>
      <span className="section-divider__line" />
      <span>{title}</span>
    </div>
  )
}

type ProgressIndicatorProps = {
  value: number
  label: string
}

export function ProgressIndicator({ value, label }: ProgressIndicatorProps) {
  const progress = Math.min(100, Math.max(0, value))

  return (
    <div className="progress-indicator">
      <div className="progress-indicator__heading">
        <span>{label}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div
        className="progress-indicator__track"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
      >
        <span style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}

export function ContentContainer({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`content-container ${className}`} {...props}>
      {children}
    </div>
  )
}

export function TechnicalText({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={`technical-text ${className}`} {...props}>
      {children}
    </span>
  )
}

export function LoadingState({ label = 'Carregando conteúdo' }: { label?: string }) {
  return (
    <div className="resource-state" role="status">
      <span className="loading-indicator" aria-hidden="true" />
      <span>{label}</span>
    </div>
  )
}

export function ResourceUnavailable({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="resource-unavailable" role="status">
      <span className="resource-unavailable__mark" aria-hidden="true">
        i
      </span>
      <div>
        <strong>{title}</strong>
        <p>{children}</p>
      </div>
    </div>
  )
}
