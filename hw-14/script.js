"use strict";

const shoppingCart = {
    items: [
      {
        name: 'Headphone',
        count: 1,
        price: 100
      }
    ],
    addItem(item) {
      const existingItem = this.items.find(i => i.name === item.name);
      if (existingItem) {
        existingItem.count++;
      } else {
        this.items.push({...item, count: 1});
      }
    },
    deleteItem(item) {
      const index = this.items.findIndex(i => i.name === item.name);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
    getTotalSum() {
      return this.items.reduce((total, item) => total + item.count * item.price, 0);
    }
  };
  
  
  shoppingCart.addItem({name: 'Headphone', price: 100}); 
  shoppingCart.addItem({name: 'Headphone2', price: 350}); // це новий товар
  shoppingCart.getTotalSum(); 
  shoppingCart.deleteItem({name: 'Headphone'}); 
  