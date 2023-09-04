import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import useFetch from "../custom-hooks/useFetch";
import Item from "./Item";
import AddItem from "./AddItem";
import Currency from "./Currency";

export default function Inventory() {
  const { get } = useFetch("https://www.dnd5eapi.co/api")
  const { put } = useFetch("https://dnd-character-collection-backend.vercel.app")

  const { character, setCharacter } = useOutletContext()

  const [items, setItems] = useState([])

  useEffect(() => {
    (async () => {
      if (character.inventory.length !== 0) {
        setItems([]) //prevents duplicates when coding

        for (const item of character.inventory) {
          const data = await get(`/equipment/${item}`)
          
          setItems(prev => [...prev, data])
        }
      }
    })()
  }, [character.inventory])

  const handleDeleteItem = async (index) => {
    const { prof, init, inventory, ...charData } = character

    const updatedInventory = [...inventory.slice(0, index), ...inventory.slice(index+1, inventory.length)]

    const updatedCharacter = {
      ...charData,
      inventory: updatedInventory
    }

    await put(`/characters/${character.id}`, updatedCharacter)

    setCharacter({...updatedCharacter, prof, init})

    setItems(updatedInventory)
  }
    
  return <div className="inventoryContainer">
    <h1>Inventory</h1>
    <hr />
    <div className="carry-weight">
      <div className="secondary info">
        <h3>Carry Weight</h3>
        <p>{items.length && items.reduce((s, item) => s + item.weight, 0)}</p>
      </div>
      <div className="secondary info">
        <h3>Max Carry Weight</h3>
        <p>{character.str * 15}</p>
      </div>
    </div>
    <Currency character={character} setCharacter={setCharacter} />
    <div className="items-header">
      <h2 className="mt-3">Items</h2>
      <AddItem character={character} fetch={{ get, put }} setItems={setItems} />
    </div>
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