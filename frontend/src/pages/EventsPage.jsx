import { useMemo, useState } from 'react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import { eventsData } from '../data/content'

const filters = ['All', 'Weekly', 'Special', 'Youth', 'Prayer', 'Worship']

export default function EventsPage() {
  const [active, setActive] = useState('All')
  const events = useMemo(() => eventsData.filter((e) => active === 'All' || e.type === active.toLowerCase() || e.category === active), [active])
  return <><PageHero title="Events & Weekly Gatherings" description="Stay connected to worship, teaching, prayer, and community moments." />
  <Section><div className="mx-auto max-w-7xl px-6"><div className="mb-6 flex flex-wrap gap-2">{filters.map((f)=><button key={f} className={`rounded-full border px-4 py-2 text-sm ${active===f?'border-blue-900 bg-blue-900 text-white':'border-slate-300'}`} onClick={()=>setActive(f)}>{f}</button>)}</div><div className="grid gap-4 md:grid-cols-2">{events.map((e)=><article key={e.id} className="rounded-lg border border-slate-200 p-5"><p className="text-xs uppercase text-blue-800">{e.type}</p><h2 className="mt-1 font-semibold">{e.title}</h2><p className="text-sm text-slate-600">{e.day} · {e.date} · {e.time}</p><p className="mt-2 text-sm text-slate-600">{e.description}</p></article>)}</div></div></Section></>
}
