// import React, { useState } from "react"
// // display for gold
// // magic items
// // general items
// // weapons, armor   
// /**
//  * These should come from your database, I do not know what is the format 
//  * but I would expect it would like something like this, if not, then you just need
//  * to reformat accordingly
//  */
// const magicalItemsList = [
//     {
//         id: "1",
//         item: "Staff",
//         goldAmount: 100
//     },
//     {
//         id: "2",
//         item: "Rod",
//         goldAmount: 200
//     },
//     {
//         id: "3",
//         item: "Weapon",
//         goldAmount: 500
//     }
// ]
// export default function Inventory() {
//     // Please read useState hook in React
//     // Refefence reading: https://react.dev/reference/react/useState
//     /**
//      * Set your items for your dropdown selection
//      */
//     const [magicalItems, setMagicalItems] = useState(magicalItemsList);
//     // You need this to be able to store the item selected and pass it to your database
//     const [selectedMagicalItem, setSelectedMagicalItem] = useState('');
//     const [goldAmount, setGoldAmount] = useState(0);
//     // Manage your text input for adding new magical item
//     const [newMagicalItem, setNewMagicalItem] = useState('');
//     const [gold, setGold] = useState(0);
//     // Manage show or hid alert
//     const [alertStatus, setAlertStatus] = useState("mt-3 alert alert-success alert-dismissible fade hide");
//     /**
//      * This will display all magical items
//      * the KEY in the option is needed for react as a unique identifier
//      */
//     const magicalItemsSelection = magicalItems.map((magic) => {
//         return <option key={magic.item} value = {magic.id} >
//                 {magic.item}
//             </option>
//     });
//     // Handle change in selection                                                                                       
//     const handleMagicalSelection = (e) => {                                                                                       
//         // Find the data on the magicalItems list                                                                                       
//         const magicItem = magicalItems.find(i => i.id === e.target.value);                                                                                       
//         if (magicItem) {                                                                                       
//             setSelectedMagicalItem(magicItem);
//             setGoldAmount(magicItem.goldAmount)
//         }
//     }
//     // Handle when user enters new item
//     const handleNewMagicalItem = (e) =>{
//         setNewMagicalItem(e.target.value);
//     }
//     // Handle when user enters the value of the new magical item
//     const handleNewMagicalGoldAmount = (e) =>{
//         setGold(e.target.value);
//     }
//     // Handle adding if magical item
//     const handleSubmit = () => {
//         if (!newMagicalItem) return;
//         if (!gold) return;
//         // Get the total length of the existing magical itemts
//         const addMagicalItem = {
//             id : magicalItems.length +1,
//             item: newMagicalItem,
//             goldAmount: gold
//         }
//         //Add the new magical item to the list
//         setMagicalItems([...magicalItems, addMagicalItem])
//         // Show Alert
//         setAlertStatus("mt-3 alert alert-success alert-dismissible fade show");
//     }
//     return(
//         <div className="container">
//             <h1>Choose Magical Item</h1>
//             <div className="row">
//                 <div className="col-md-6">
//                 <h2>Magical Items</h2>
//                     <select onChange = {(e)=>handleMagicalSelection(e)} className="form-select" aria-label="Select Magical Item">
//                         <option> Select Magical Item </option>
//                         {magicalItemsSelection}
//                     </select>
//                 </div>
//                 <div className="col-md-6">
//                     <h2>Gold</h2>
//                     <input type = "text" value = {goldAmount} disabled />
//                 </div>
//             </div>
//             <div className="mt-3 card col-6 p-3">
//                 <h3>Add Magical Item</h3>
//                 <div className="mb-3">
//                     <label htmlFor="itemName" className="form-label">Item Name:</label>
//                     <input onChange ={(e) => handleNewMagicalItem(e)} type="text" className="form-control" id="itemName" required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="goldAmountInput" className="form-label">Gold Amount:</label>
//                     <input onChange ={(e) => handleNewMagicalGoldAmount(e)} type="number" className="form-control" id="goldAmountInput" required />
//                 </div>
//                 <button onClick = {handleSubmit} className="btn btn-primary">Add Magical Item Gold</button>
//                 <div className = {alertStatus} role="alert">
//                     Magical Item Added
//                     <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//                 </div>
//             </div>
//         </div>
//     )
// }
"use strict";
//# sourceMappingURL=Inventory.dev.js.map
