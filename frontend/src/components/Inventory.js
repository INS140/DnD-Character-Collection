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

  // const [magicalItems, setMagicalItems] = useState(magicalItemsList);
  // const [selectedMagicalItem, setSelectedMagicalItem] = useState('');
  // const [goldAmount, setGoldAmount] = useState(0);
  // const [newMagicalItem, setNewMagicalItem] = useState('');
  // const [gold, setGold] = useState(0);
  // const [alertStatus, setAlertStatus] = useState("mt-3 alert alert-success alert-dismissible fade hide");

  // const magicalItemsSelection = magicalItems.map((magic) => {
  //   return <option key={magic.item} value = {magic.id} >
  //     {magic.item}
  //   </option>
  // });
                                                                                                                                                                            
  // const handleMagicalSelection = e => {                                                                                                                                                                        
  //   const magicItem = magicalItems.find(i => i.id === e.target.value);                                                                                       
  //   if (magicItem) {                                                                                       
  //     setSelectedMagicalItem(magicItem);
  //     setGoldAmount(magicItem.goldAmount)
  //   }
  // }
  
  // const handleNewMagicalItem = (e) =>{
  //   setNewMagicalItem(e.target.value);
  // }

  // const handleNewMagicalGoldAmount = (e) =>{
  //   setGold(e.target.value);
  // }

  // const handleSubmit = () => {
  //   if (!newMagicalItem) return;
  //   if (!gold) return;

  //   const addMagicalItem = {
  //       id : magicalItems.length +1,
  //       item: newMagicalItem,
  //       goldAmount: gold
  //   }

  //   setMagicalItems([...magicalItems, addMagicalItem])

  //   setAlertStatus("mt-3 alert alert-success alert-dismissible fade show");
  // }

  // useEffect(() => {
  //   setGoldAmount(selectedMagicalItem?.goldAmount || 0);
  // }, [selectedMagicalItem]);
    
  return <div className="container">
    <h1>Inventory</h1>
    <hr />
    <div>
      <div>
        <h2>Gold</h2>
        {character.gold}
      </div>
      <div>
        <h2>Max Carry Weight</h2>
        {character.str * 15}
      </div>
      <div>
        <h2>Current Carry Weight</h2>
        {items.length && items.reduce((s, item) => s + item.weight, 0)}
      </div>
    </div>
    <h2>Items</h2>
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
    {/* <div className="row">
      <div className="col-md-6">
        <h2>Magical Items</h2>
        <select onChange={(e)=>handleMagicalSelection(e)} className="form-select" aria-label="Select Magical Item">
          <option> Select Magical Item </option>
            {magicalItemsSelection}
        </select>
      </div>
      <div className="col-md-6">
        <h2>Gold</h2>
        <input type="text" value={goldAmount} disabled />
      </div>
    </div>
    <div className="mt-3 card col-6 p-3">
      <h3>Add Magical Item</h3>
      <div className="mb-3">
        <label htmlFor="itemName" className="form-label">Item Name:</label>
        <input onChange={(e) => handleNewMagicalItem(e)} type="text" className="form-control" id="itemName" required />
        <Input
          label="Item Name"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="goldAmountInput" className="form-label">Gold Amount:</label>
        <input onChange ={(e) => handleNewMagicalGoldAmount(e)} type="number" className="form-control" id="goldAmountInput" required />
      </div>
      <button onClick = {handleSubmit} className="btn btn-primary">Add Magical Item Gold</button>
      <div className = {alertStatus} role="alert">
        Magical Item Added
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div> */}
  </div>
}