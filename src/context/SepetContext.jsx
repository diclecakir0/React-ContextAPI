import { createContext, useState } from 'react';
/*
  Context API: A centralized state management tool that holds data needed by many components in our application, along with functions to modify this data, and sends this data only to components that subscribe to it.
 */

//  Creating the foundation of the Context structure
export const SepetContext = createContext();

// Defining the provider and the data it holds
export function SepetProvider({ children }) {
  const [items, setItems] = useState([]);

  // Function to add a new item to the cart
  const addToCart = (product) => {
    // Is the item being added to the cart already present in the cart array?
    const foundItem = items.find(
      (item) => item.id === product.id
    );

    if (foundItem) {
      // If the item exists, increase its quantity value.
      product.amount++;
      
      const clone = [...items];
      // Finding the position of the edited item in the array
      const index = clone.findIndex(
        (i) => i.id === product.id
      );
      
      clone[index] = product;
      // We are updating the state
    } else {
      // If the item is not found, add it to the cart.
      setItems([...items, product]);
    }
  };

  // Removing an item from the cart.
  const deleteFromCart = (product) => {
    // Finding the item in the array.
    const foundItem = items.find(
      (item) => item.id === product.id
    );

    if (foundItem.amount > 1) {
      // If the quantity is greater than 1, we decrease the quantity.
      const cloneItems = [...items];
      // Decreasing the quantity of the received product.
      product.amount--;
      //  Finding the index of the element to be changed in the array.
      const index = cloneItems.findIndex(
        (i) => i.id === product.id
      );
      // Removing the old element from the array and adding the new one.
      cloneItems[index] = product;
      // Update the state
      setItems(cloneItems);
    } else {
      // If the quantity is 1, we remove the item from the array.
      const filtredArr = items.filter(
        (item) => item.id !== product.id
      );
      // Update the state
      setItems(filtredArr);
    }
  };

  return (
    <SepetContext.Provider
      value={{ items, addToCart, deleteFromCart }}
    >
      {children}
    </SepetContext.Provider>
  );
}