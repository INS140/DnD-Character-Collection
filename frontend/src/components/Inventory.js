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

      await put(`/characters/${character.id}`, {
        ...charData,
        inventory: [...character.inventory, foundItem.index],
      });

      navigate(0);
    }
  }

  const handleDeleteItem = async (index) => {
    const { prof, init, inventory, ...charData } = character

    const updatedInventory = [...inventory.slice(0, index), ...inventory.slice(index+1, inventory.length)]

    await put(`/characters/${character.id}`, {
      ...charData,
      inventory: updatedInventory
    })

    navigate(0)
  }
    
  return <div className="inventoryContainer">
    <h1>Inventory</h1>
    <hr />
    <div className="inventoryGrid">
        <h2 className="secondary">Gold <span>{!character.gold ? 0 : character.gold}</span></h2>
        <h2 className="secondary">Max Carry Weight <span>{character.str * 15}</span></h2>
        <h2 className="secondary">Current Carry Weight <span>{items.length && items.reduce((s, item) => s + item.weight, 0)}</span></h2>
    </div>
    <h2 className="mt-3">Items</h2>
    <Button
      className="secondary"
      data-bs-toggle="modal"
      data-bs-target="#addItem"
    >
      Add Item
    </Button>
    <Modal
      modalId="addItem"
      header="Add An Inventory Item"
      closeModalText="Add Item"
      disableSubmit={!foundItem}
      onCloseClick={handleAddItem}
    >
      <form className="modal-form" onSubmit={handleSearchItems}>
        <Input
          label="Search for an Item"
          labelClass="secondary"
          name="item"
          value={inputs.item}
          onChange={handleChange}
        />
        <Button
          className="secondary"
          type="submit"
          disabled={inputs.item === ''}
        >Search</Button>
      </form>
      { error !== null
        ? <>
          <hr />
          <h2>{error.error}</h2>
        </>
        : foundItem && <>
          <hr />
          <Item item={foundItem} />
        </>
      }
    </Modal>
    <hr />
    <div className="items">
      {!items.length
        ? <h2>This character has no items</h2>
        : items.map((item, i) => {
          return <Item key={`${item.index}${i}`} item={item} handleDelete={() => handleDeleteItem(i)} />
        })
      }
    </div>
  </div>
}