interface SectionLabelProps {
  number: string
  label: string
  className?: string
  light?: boolean
}

export default function SectionLabel({
  number,
  label,
  className = '',
  light = false,
}: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span
        className={`eyebrow font-mono ${
          light ? 'text-concrete-500' : 'text-safety'
        }`}
      >
        {number}
      </span>
      <span className="block w-10 h-px bg-current opacity-30" />
      <span
        className={`eyebrow ${
          light ? 'text-concrete-700' : 'text-concrete-300'
        }`}
      >
        {label}
      </span>
    </div>
  )
}
