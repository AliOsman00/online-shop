import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Product from './Product';
import products from './components/products.json';
import Basket from './components/Basket';

function App() {
  const [money] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState([]);
  const resetBascet = () => {
    setBasket([])
  }

  useEffect (() => { 
    setTotal(
        basket.reduce((acc, item) => {
          return acc + (item.amount * (products.find(products => products.id === item.id).price))
      }, 0),
    )
  }, [basket])
  return (
    <>
			<Header total={total} money={money}/>
			<div className="container products">
				{products.map(product => (
					<Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product}/>
				))}
			</div>
			{total > 0 && (
				<Basket resetBascet={resetBascet} products={products} total={total} basket={basket} />
			)}
		</>
  );
}

export default App;
