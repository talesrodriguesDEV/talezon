import React, { useContext, useEffect } from 'react';
import ProductsContext from '../context/ProductsContext';
import { TiDelete } from 'react-icons/ti';

export default function Cart() {
	const { cartProducts, setCartProducts } = useContext(ProductsContext);

	useEffect(() => {
		const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
		if (cartProducts) setCartProducts(cartProducts);
	}, []);

	const removeItem = (name) => {
		const newCartProducts = cartProducts.filter((product) => product.name !== name);
		setCartProducts(newCartProducts);
		localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
	};

	return (
		<div className='flex flex-col items-center'>
			<div className='w-2/3 flex flex-col'>
				{cartProducts && cartProducts.map(({ name, price }, index) => (
					<div key={index} className='bg-black text-white rounded-xl flex m-4'>
						<img src={`./images/${name}.jpeg`} alt={name} className='w-28 rounded-xl' />
						<div className='w-full flex justify-around items-center'>
							<h1 className='text-2xl'>{name}</h1>
							<h2 className='text-2xl'>{`R$ ${price.toFixed(2)}`}</h2>
							<button onClick={() => removeItem(name)}>
								<TiDelete className='text-4xl text-red-700' />
							</button>
						</div>
					</div>
				))}
			</div>
			<div>
				<p>{`R$ ${cartProducts ? cartProducts.reduce((totalPrice, { price }) => totalPrice + price, 0).toFixed(2) : Number(0).toFixed(2)}`}</p>
			</div>
		</div>
	);
}
