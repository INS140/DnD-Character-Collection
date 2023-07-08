export default function Weapon({ weapon }) {
    return <div className="weapon secondary">
      <h2 className="name">{weapon.name}</h2>
      <h3 className="damage">{weapon.damage.damage_dice} {weapon.damage.damage_type.name} damage</h3>
      <div className="props">
        <hr />
        <h4 className="propsTitle">Properties</h4>
        <div className="propsDisplay">
          {weapon.properties.map((prop, i) => {
            return <p key={`${prop.index}${i}`}>{prop.name}</p>
          })}
        </div>
      </div>
    </div>
  }