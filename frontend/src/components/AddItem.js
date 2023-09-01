import { useState } from "react";
import { Button, Input, Modal } from "./ui-kit"
import Item from "./Item";
import useFormHandler from "./custom-hooks/useFormHandler"

export default function AddItem({ character, fetch, setItems }) {
  const { get, put } = fetch

  const {inputs, handleChange, setInputs} = useFormHandler({
    item: ''
  })

  const [foundItem, setFoundItem] = useState(null)
  const [error, setError] = useState(null)

  const handleSearchItems = async e => {
    e.preventDefault()
    
    setError(null)
    setFoundItem(null)

    const data = await get(`/equipment/${inputs.item}`)
    
    data.error ? setError(data) : setFoundItem(data)
  }

  const handleSearchReset = () => {
    setInputs({ item: '' })
    setFoundItem(null)
    setError(null)
  }

  const handleAddItem = async () => {
    if (foundItem !== null) {
      const { prof, init, ...charData } = character;

      setItems(prev => [...prev, foundItem])

      handleSearchReset()

      await put(`/characters/${character.id}`, {
        ...charData,
        inventory: [...character.inventory, foundItem.index],
      });
    }
  }

  return <>
    <Button
      className="secondary add-item"
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
      onCancelClick={handleSearchReset}
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
  </>
}