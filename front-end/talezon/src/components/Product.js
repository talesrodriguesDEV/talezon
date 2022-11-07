import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductsContext from '../context/ProductsContext';

export default function Product({ product: { id, name, price } }) {
	const { cartProducts, setCartProducts, customerLoggedIn } = useContext(ProductsContext);

	const navigate = useNavigate();

	const addToCart = () => {
		if (!customerLoggedIn) navigate('/login');
		const newCartProducts = [...cartProducts, { id, name, price }];
		setCartProducts(newCartProducts);
		localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
	};

	return (
		<div className='p-4 m-2 border bg-black text-white rounded-xl'>
      <h1 className='text-center'>{ name }: {`R$ ${price.toFixed(2)}`}</h1>
      <br />
      <img src={`./images/${name}.jpeg`} alt={ name } className='w-64 rounded-xl' />
			<button onClick={addToCart}>
				Add to Cart
			</button>
		</div>
	);
}
