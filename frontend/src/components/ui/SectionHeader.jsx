export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">{eyebrow}</p>
      <h2 className="font-serif text-3xl text-slate-950 md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-slate-600">{description}</p>}
    </div>
  )
}
