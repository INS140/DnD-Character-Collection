import { useState, useEffect } from "react";
import Input from "./ui-kit/Input";
import Button from "./ui-kit/Button";
import Modal from "./ui-kit/Modal";
import { useOutletContext, useNavigate } from "react-router-dom";
import useFetch from "./custom-hooks/useFetch";
import useFormHandler from "./custom-hooks/useFormHandler"
import Item from "./Item";

export default function Inventory() {
  const { get } = useFetch("https://www.dnd5eapi.co/api")
  const { put } = useFetch("https://dnd-character-collection-backend.vercel.app")

  const { character } = useOutletContext()

  const {inputs, handleChange} = useFormHandler({
    item: ''
  })

  const navigate = useNavigate()

  const [items, setItems] = useState([])
  const [foundItem, setFoundItem] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      if (character.inventory.length !== 0) {
        for (const item of character.inventory) {
          const data = await get(`/equipment/${item}`)
          setItems(prev => [...prev, data])
        }
      }
    })()
  }, [character.inventory])

  const handleSearchItems = async e => {
    e.preventDefault()
    
    setError(null)
    setFoundItem(null)

    const data = await get(`/equipment/${inputs.item}`)
    
    data.error ? setError(data) : setFoundItem(data)
  }

  const handleAddItem = async () => {
    if (foundItem !== null) {
      const { prof, init, ...charData } = character;

      const data = await put(`/characters/${character.id}`, {
        ...charData,
        inventory: [...character.inventory, foundItem.index],
      });

      navigate(0);
    }
  }
    
  return <div className="inventoryContainer">
    <h1 className="inventoryTitle">Inventory</h1>
    <hr />
    <div>
      <div>
        <h2 className="inventoryText">Gold: {!character.gold ? 0 : character.gold}</h2>
      </div>
      <div>
        <h2 className="inventoryText">Max Carry Weight: {character.str * 15}</h2>
      </div>
      <div>
        <h2 className="inventoryText">Current Carry Weight: {items.length && items.reduce((s, item) => s + item.weight, 0)}</h2>
      </div>
    </div>
    <h2 className="inventoryTitle">Items</h2>
    <Modal
      modalId="addItem"
      header="Add An Inventory Item"
      openModalText="Add Item"
      closeModalText="Add Item"
      disableSubmit={!foundItem}
      onCloseClick={handleAddItem}
    >
      <form onSubmit={handleSearchItems}>
        <Input
          label="Search for an Item"
          name="item"
          value={inputs.item}
          onChange={handleChange}
        />
        <Button className="secondary" type="submit">Search</Button>
      </form>
      { error !== null
        ? <h2>{error.error}</h2>
        : foundItem && <Item item={foundItem} />
      }
    </Modal>
    <hr />
    <div>
      {!items.length
        ? <>Loading ...</>
        : items.map((item, i) => {
          return <Item key={`${item.index}${i}`} item={item} />
        })
      }
    </div>
  </div>
}