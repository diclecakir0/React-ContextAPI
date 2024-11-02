import { useContext } from 'react';
import { SepetContext } from '../context/SepetContext';

const Checkout = () => {
  // subscribing to the context structure
  const { items, deleteFromCart, addToCart } =
    useContext(SepetContext);

  {/* Summing the prices of all products stored in an array based on their quantity values; the reduce method takes two parameters. The second parameter it takes represents each element returned in the array. It adds a specific value from this element to the first parameter. At the end of the operation, we need to set the initial value of the total by adding a , and specifying it.
*/}

  const total = items.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );
  return (
    <div className="d-grid gap-5 p-4">
      <h2>
      Total Price of the Products
        <span className="text-success p-1">{total}</span>
        
      </h2>
      {/* Rendering a card on the screen for each element in the items array stored in the context.*/}
      {items.map((item) => (
        <div className="d-flex border shadow p-4 justify-content-between align-items-center h-50">
          <img className="h-100 rounded" src={item.image} />
          <h1>{item.name}</h1>
          <h1 className="text-success">
            {item.price * item.amount} 
          </h1>
          <p className="fw-bold">Miktar: {item.amount}</p>
          <button onClick={() => addToCart(item)}>
            ADD
          </button>
          <button
            onClick={() => deleteFromCart(item)}
            className="button bg-danger"
          >
            {item.amount > 1 ? 'Reduce' : 'Delete'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Checkout;