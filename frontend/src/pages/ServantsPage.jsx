import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import { servantsData } from '../data/content'

export default function ServantsPage() {
  const grouped = Object.groupBy(servantsData, (s) => s.category)
  return <><PageHero title="Meet Our Servants" description="Honoring those who faithfully serve with humility, joy, and excellence." />
  <Section><div className="mx-auto max-w-7xl space-y-10 px-6">{Object.entries(grouped).map(([category, list]) => <div key={category}><h2 className="font-serif text-2xl">{category}</h2><div className="mt-4 grid gap-5 md:grid-cols-2">{list.map((s)=><article key={s.id} className="rounded-lg border border-slate-200 p-5"><div className="flex gap-4"><img src={s.image} alt={s.name} className="h-20 w-20 rounded-md object-cover"/><div><h3 className="font-semibold">{s.name}</h3><p className="text-sm text-blue-900">{s.role}</p><p className="mt-2 text-sm text-slate-600">{s.bio}</p></div></div></article>)}</div></div>)}</div></Section></>
}
