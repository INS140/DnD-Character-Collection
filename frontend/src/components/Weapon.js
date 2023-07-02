export default function Weapon({ weapon }) {
    return (
    <div class="weapon">
      <h2>{weapon.name}</h2>
      <p>{weapon.desc}</p>
    </div>
    )
  }