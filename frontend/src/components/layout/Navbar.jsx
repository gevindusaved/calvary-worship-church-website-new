import { useState } from 'react'
import Button from '../ui/Button'
import { NAV_LINKS } from '../../constants/site'

export default function Navbar({ path, navigate }) {
  const [open, setOpen] = useState(false)
  const linkCls = (to) => `text-sm ${path === to ? 'text-blue-900' : 'text-slate-700 hover:text-slate-950'}`
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <a href="/" onClick={(e) => { e.preventDefault(); navigate('/') }} className="font-serif text-xl text-slate-950">Sanctuary of Grace</a>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Toggle menu">Menu</button>
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => <a key={link.to} href={link.to} onClick={(e) => { e.preventDefault(); navigate(link.to) }} className={linkCls(link.to)}>{link.label}</a>)}
          <Button to="/about" onNavigate={navigate}>Plan a Visit</Button>
        </div>
      </nav>
      {open && <div className="border-t border-slate-200 px-6 py-4 md:hidden">{NAV_LINKS.map((link) => <a key={link.to} href={link.to} className="block py-2" onClick={(e) => { e.preventDefault(); navigate(link.to); setOpen(false) }}>{link.label}</a>)}</div>}
    </header>
  )
}
