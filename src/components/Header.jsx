import { Link, useNavigate } from 'react-router-dom';
// A method that allows us to subscribe to context structures.
import { useContext } from 'react';
// The context file we want to subscribe to
import { SepetContext } from '../context/SepetContext';

const Header = () => {
  const navigate = useNavigate();
  // Subscribing to the cartContext
  const { items } = useContext(SepetContext);

  // Summing the quantity values in the array
  const total = items.reduce(
    (total, i) => total + i.amount,
    0
  );

  return (
    <header className="navbar bg-dark text-light p-3">
      <Link to={'/'}>
        <h2 className="text-light">Context</h2>
      </Link>
      <div
        onClick={() => navigate('/sepet')}
        className="fs-3 d-flex gap-3 align-items-center"
      >
        <i class="bi bi-cart fs-1"></i>
        <span className="badge bg-danger">{total}</span>
      </div>
    </header>
  );
};

export default Header;