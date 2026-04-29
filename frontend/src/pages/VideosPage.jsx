import { useState } from 'react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import { videosData } from '../data/content'
import { SITE } from '../constants/site'

const filters = ['All', 'Sermons', 'Bible Study']

export default function VideosPage() {
  const featured = videosData.find((v) => v.featured) ?? videosData[0]
  const [active, setActive] = useState('All')
  const filtered = videosData.filter((v) => active === 'All' || v.category === active)
  return <><PageHero title="Ministry Videos" description="Teachings and worship moments to strengthen your walk with Christ." />
  <Section><div className="mx-auto max-w-7xl px-6"><div className="grid gap-8 lg:grid-cols-3"><div className="lg:col-span-2"><div className="aspect-video overflow-hidden rounded-xl border border-slate-200"><iframe src={featured.embedUrl} title={featured.title} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><h2 className="mt-4 font-serif text-3xl">{featured.title}</h2></div><aside className="rounded-xl border border-slate-200 p-6"><h3 className="font-semibold">Watch more messages</h3><p className="mt-2 text-sm text-slate-600">Explore our YouTube ministry library.</p><div className="mt-4"><Button href={SITE.youtubeChannel}>Visit Channel</Button></div></aside></div><div className="mt-10 flex flex-wrap gap-2">{filters.map((f)=><button key={f} onClick={()=>setActive(f)} className={`rounded-full border px-4 py-2 text-sm ${active===f?'border-blue-900 bg-blue-900 text-white':'border-slate-300'}`}>{f}</button>)}</div><div className="mt-6 grid gap-5 md:grid-cols-2">{filtered.map((v)=><article key={v.id} className="rounded-lg border border-slate-200 overflow-hidden"><img src={v.thumbnail} alt={`${v.title} thumbnail`} className="h-44 w-full object-cover"/><div className="p-5"><h3 className="font-semibold">{v.title}</h3><p className="mt-1 text-xs text-slate-500">{v.speaker} · {v.date}</p><p className="mt-2 text-sm text-slate-600">{v.description}</p></div></article>)}</div></div></Section></>
}
