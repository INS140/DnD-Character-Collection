export default function Item({ item }) {
  return <div className="item">
    <h3 className="itemName">{item.name}</h3>
    <p className="itemDesc">{item.desc}</p>
  </div>
}