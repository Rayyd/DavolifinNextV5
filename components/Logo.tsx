export default function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" className="shrink-0">
      <rect x="4" y="6" width="40" height="36" rx="10" className="fill-gray-900" />
      <path d="M14 14h10a8 8 0 0 1 0 16H14z" className="fill-white/95" />
      <path d="M28 28l4 4 8-8" className="stroke-white" strokeWidth="3" fill="none" strokeLinecap="round" />
      <g className="fill-white/90">
        <rect x="16" y="18" width="2" height="4" rx="1" />
        <rect x="20" y="16" width="2" height="6" rx="1" />
        <rect x="24" y="15" width="2" height="7" rx="1" />
      </g>
    </svg>
  )
}
