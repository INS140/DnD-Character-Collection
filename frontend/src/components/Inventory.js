import React, { useState, useEffect } from "react";

const magicalItemsList = [
    {
        id: "1",
        item: "Staff",
        goldAmount: 100
    },
    {
        id: "2",
        item: "Rod",
        goldAmount: 200
    },
    {
        id: "3",
        item: "Weapon",
        goldAmount: 500
    }
]
export default function Inventory(){ 
   
    const [magicalItems, setMagicalItems] = useState(magicalItemsList);
    const [selectedMagicalItem, setSelectedMagicalItem] = useState('');
    const [goldAmount, setGoldAmount] = useState(0);
    const [newMagicalItem, setNewMagicalItem] = useState('');
    const [gold, setGold] = useState(0);
    const [alertStatus, setAlertStatus] = useState("mt-3 alert alert-success alert-dismissible fade hide");
    const magicalItemsSelection = magicalItems.map((magic) => {
        return <option key={magic.item} value = {magic.id} >
                {magic.item}
            </option>
    });
                                                                                                                                                                             
    const handleMagicalSelection = (e) => {                                                                                                                                                                        
        const magicItem = magicalItems.find(i => i.id === e.target.value);                                                                                       
        if (magicItem) {                                                                                       
            setSelectedMagicalItem(magicItem);
            setGoldAmount(magicItem.goldAmount)
        }
    }
    
    const handleNewMagicalItem = (e) =>{
        setNewMagicalItem(e.target.value);
    }

    const handleNewMagicalGoldAmount = (e) =>{
        setGold(e.target.value);
    }

    const handleSubmit = () => {
        if (!newMagicalItem) return;
        if (!gold) return;

        const addMagicalItem = {
            id : magicalItems.length +1,
            item: newMagicalItem,
            goldAmount: gold
        }

        setMagicalItems([...magicalItems, addMagicalItem])

        setAlertStatus("mt-3 alert alert-success alert-dismissible fade show");
      }
        
  useEffect(() => {
   
  }, []); 

  useEffect(() => {
    setGoldAmount(selectedMagicalItem?.goldAmount || 0);
  }, [selectedMagicalItem]);
    
  return (
        <div className="container">
            <h1>Choose Magical Item</h1>
            <div className="row">
                <div className="col-md-6">
                <h2>Magical Items</h2>
                    <select onChange = {(e)=>handleMagicalSelection(e)} className="form-select" aria-label="Select Magical Item">
                        <option> Select Magical Item </option>
                        {magicalItemsSelection}
                    </select>
                </div>

                <div className="col-md-6">
                    <h2>Gold</h2>
                    <input type = "text" value = {goldAmount} disabled />
                </div>
            </div>
            <div className="mt-3 card col-6 p-3">
                <h3>Add Magical Item</h3>
                <div className="mb-3">
                    <label htmlFor="itemName" className="form-label">Item Name:</label>
                    <input onChange ={(e) => handleNewMagicalItem(e)} type="text" className="form-control" id="itemName" required />
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
            </div>
        </div>
    )
}
