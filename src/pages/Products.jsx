import Cart from '../components/Cart';

const Products = () => {
  
  const products = [
    {
      id: 1,
      name: 'Coat',
      image: 'https://picsum.photos/200',
      price: 120,
    },
    {
      id: 2,
      name: 'Boots',
      image: 'https://picsum.photos/201',
      price: 90,
    },
    {
      id: 3,
      name: 'T-Shirt',
      image: 'https://picsum.photos/203',
      price: 210,
    },
    {
      id: 4,
      name: 'Coat',
      image: 'https://picsum.photos/204',
      price: 369,
    },
    {
      id: 5,
      name: 'Pants',
      image: 'https://picsum.photos/205',
      price: 150,
    },
    {
      id: 6,
      name: 'Slipper',
      image: 'https://picsum.photos/201',
      price: 90,
    },
    {
      id: 7,
      name: 'Sweater',
      image: 'https://picsum.photos/203',
      price: 350,
    },
    {
      id: 8,
      name: 'Purse',
      image: 'https://picsum.photos/204',
      price: 329,
    },
  ];

  return (
    <div className="container d-flex flex-wrap justify-content-between gap-5 p-4">
      {/* Rendering a card on the screen for each object in the products array. */}
      {products.map((product) => (

        <Cart {...product} />
      ))}
    </div>
  );
};

export default Products;