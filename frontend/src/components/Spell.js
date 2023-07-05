export default function Spell({ spell }) {
  return <div>
    <h3>{spell.name}</h3>
    <div className="spell-desc">
      { spell.desc.map((d, i) => {
        return <p key={`${d[0]}${i}`}>{d}</p>
      })}
    </div>
  </div>
}
