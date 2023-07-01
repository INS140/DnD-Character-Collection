import React from "react"

// display for gold
// magic items
// general items
// weapons, armor

export default function Inventory() {
  return (
  <><div className="container">
      <h1>Choose Equipment</h1>

      <div className="row">
        <div className="col-md-6">
          <h2>Equipment</h2>
          <ul id="equipmentList" className="list-group"></ul>
        </div>

        <div className="col-md-6">
          <h2>Gold</h2>
          <p id="goldAmount">0</p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h3>Add Equipment</h3>
          <form id="addItemForm">
            <div className="mb-3">
              <label for="itemName" className="form-label">Item Name:</label>
              </><input type="text" className="form-control" id="itemName" required>
              </div>
            <button type="submit" className="btn btn-primary">Add Item</button>
          </form>
        </div>

        <div className="col-md-6">
          <h3>Add Gold</h3>
          <form id="addGoldForm">
            <div className="mb-3">
              <label for="goldAmountInput" className="form-label">Amount:</label>
              <input type="number" className="form-control" id="goldAmountInput" required>
              </></div>
            <button type="submit" className="btn btn-primary">Add Gold</button>
          </form>
        </div>
      </div>
    </div><script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script><script>
    // Equipment inventory management
        const equipmentList = document.getElementById('equipmentList');
        const addItemForm = document.getElementById('addItemForm');

        addItemForm.addEventListener('submit', function (event) {event.preventDefault()};
        const itemName = document.getElementById('itemName').value;
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = itemName;
        equipmentList.appendChild(listItem);
        addItemForm.reset();
        {"}"});

        // Gold inventory management
        const goldAmount = document.getElementById('goldAmount');
        const addGoldForm = document.getElementById('addGoldForm');

        addGoldForm.addEventListener('submit', function (event) {event.preventDefault()};
        const amount = parseInt(document.getElementById('goldAmountInput').value);
        const currentGold = parseInt(goldAmount.textContent);
        const newGold = currentGold + amount;
        goldAmount.textContent = newGold;
        addGoldForm.reset();
        );
      </script></>
      )
          }
