let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];


function isItemAvailable(inventoryItem, inventory) {
  let total = 0;
  
  Object.values(inventory).filter (elem => {
    if (elem.id === inventoryItem) {
      if (elem.movement === "in") {
        total += elem.quantity;
      } else if (elem.movement === "out") {
        total -= elem.quantity;
      }
    }
  });
  
  console.log(total > 1);
}

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true