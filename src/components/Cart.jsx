import { useContext } from 'react';
import { SepetContext } from '../context/SepetContext';

const Cart = ({ id, name, image, price }) => {
  // Subscribing to the cartContext
  const dönenVeri = useContext(SepetContext);

  return (
    <div className="card">
      <img src={image} />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4>{name}</h4>
          <p>{price}</p>
        </div>

        <button
          className="btn btn-outline-dark"
          //  Executing the addToCart method in the context and passing the 
		  // object of the product to be added to the cart as an argument
          onClick={() =>
            dönenVeri.addToCart({
              id,
              name,
              image,
              price,
              amount: 1, 
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;