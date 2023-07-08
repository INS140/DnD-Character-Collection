import Button from "./ui-kit/Button"

export default function Spell({ spell, handleDelete }) {
  return <div className="spell secondary">
    <h3 className="name">{spell.name}</h3>
    <div className="info">
      <hr />
      <div className="text">
        <h4 className="primary">Components: <span>{spell.components.join(', ')}</span></h4>
        <h4 className="primary">Casting Time: <span>{spell.casting_time}</span></h4>
        <h4 className="primary">Duration: <span>{spell.concentration && 'Concentration, '}{spell.duration}</span></h4>
        <h4 className="primary">Range: <span>{spell.range}</span></h4>
      </div>
    </div>
    <div className="desc">
      <hr />
      <div className="text primary">
        { spell.desc.map((d, i) => {
          return <p key={`${d[0]}${i}`}>{d}</p>
        })}
      </div>
    </div>
    {handleDelete && <Button className="tertiary delete" onClick={handleDelete}>Delete</Button>}
  </div>
}
