import { Button } from "../ui-kit";

export default function Item({ item, handleDelete }) {
  return <div className="item">
    <h3 className="itemName">{item.name}</h3>
    <div className="itemDesc">
      <hr />
      <div className="itemProps">
        <h4 className="type">Type: {item.equipment_category.name}</h4>
        <h4 className="cost"> Cost: {item.cost.quantity}{item.cost.unit}</h4>
      </div>
      {item.desc[0] && <p className="primary">{item.desc}</p>}
    </div>
    {handleDelete && <Button className="tertiary itemDelete" onClick={handleDelete}>Delete</Button>}
  </div>
}