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
		<div className='p-4 m-4 shadow-lg shadow-purple-700 bg-purple-900 text-white rounded-xl flex flex-col'>
      <h1 className='text-center'>{ name }: {`R$ ${price.toFixed(2)}`}</h1>
      <img src={`./images/${name}.jpeg`} alt={ name } className='w-64 rounded-xl my-4' />
			<button onClick={addToCart} className='bg-purple-900 hover:bg-purple-700 border-white border text-white p-2 rounded-lg'>
				Add to Cart
			</button>
		</div>
	);
}
