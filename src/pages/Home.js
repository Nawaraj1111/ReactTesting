import React,{useState} from 'react';
import ProductCard from '../components/ProductCard';
import Cart from '../Cart.js';
import './Home.css';    

const products = [
  { id: 1, title: 'Wireless Mouse', description: 'Smooth and precise', price: 20 },
  { id: 2, title: 'Keyboard', description: 'Mechanical RGB keyboard', price: 60 },
  { id: 3, title: 'USB Hub', description: '4-Port Type-C Hub', price: 25 },
];

const Home = () => {
    const [check , setCheck] = useState(false);

    const checkClick = ()=>{
        setCheck(true);
    }

  return (
    <div className="home-container">
      <div className="product-list">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <Cart />
      <button onClick={checkClick}>Click here to see cart</button>
      <div>
        {
            check ? <Cart /> : null
        }
      </div>
    </div>
  );
};
export default Home;    