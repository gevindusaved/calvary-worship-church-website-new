export default function PageHero({ title, description }) {
  return (
    <section className="border-b border-slate-200 bg-slate-50/70 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h1 className="font-serif text-4xl text-slate-950 md:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">{description}</p>
      </div>
    </section>
  )
}
