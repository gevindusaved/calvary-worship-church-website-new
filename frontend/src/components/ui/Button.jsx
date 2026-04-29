export default function Button({ to, href, onNavigate, children, variant = 'primary', className = '' }) {
  const styles = {
    primary: 'bg-blue-900 text-white hover:bg-blue-950 border border-blue-900',
    secondary: 'bg-white text-slate-900 border border-slate-300 hover:border-slate-500',
    ghost: 'bg-transparent text-blue-900 hover:bg-blue-50',
  }
  const base = `inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 ${styles[variant]} ${className}`
  if (to) return <a href={to} className={base} onClick={(e) => { e.preventDefault(); onNavigate?.(to) }}>{children}</a>
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={base}>{children}</a>
  return <button className={base} type="button">{children}</button>
}
