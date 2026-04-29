import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import { branchesData } from '../data/content'

export default function AboutPage() {
  return <><PageHero title="About Our Church" description="A spiritually grounded church family committed to worship, truth, and service." />
  <Section><div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2"><div><h2 className="font-serif text-3xl">Our Story</h2><p className="mt-4 text-slate-600">Since 2002, Sanctuary of Grace Church has grown from a small prayer fellowship into a multi-branch congregation devoted to faithful teaching and compassionate outreach.</p></div><div className="rounded-xl border border-slate-200 p-8"><h3 className="font-semibold">Vision</h3><p className="mt-2 text-slate-600">To raise a Christ-centered community that reflects holiness, love, and excellence.</p></div></div></Section>
  <Section className="bg-slate-50"><div className="mx-auto max-w-7xl px-6"><h2 className="font-serif text-3xl">Branches</h2><div className="mt-6 grid gap-5 md:grid-cols-3">{branchesData.map((b)=><article key={b.id} className={`rounded-lg border p-5 ${b.isMain ? 'border-blue-300 bg-blue-50/40' : 'border-slate-200 bg-white'}`}><p className="text-xs uppercase text-blue-800">{b.isMain ? 'Main Branch' : 'Branch'}</p><h3 className="mt-1 font-semibold">{b.name}</h3><p className="text-sm text-slate-600">{b.location} · {b.address}</p><p className="mt-2 text-sm text-slate-600">{b.description}</p></article>)}</div></div></Section></>
}
