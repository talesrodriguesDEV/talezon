import React, { useContext, useEffect } from 'react';
import ProductsContext from '../context/ProductsContext';
import { TiDelete } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import API_URL from '../api-url';

export default function Cart() {
	const { cartProducts, setCartProducts, customerId, token } = useContext(ProductsContext);

	const navigate = useNavigate();

	useEffect(() => {
		const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
		if (cartProducts) setCartProducts(cartProducts);
	}, []);

	const removeItem = (name) => {
		const newCartProducts = cartProducts.filter((product) => product.name !== name);
		setCartProducts(newCartProducts);
		localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
	};

	const handleBuy = () => {
		cartProducts.forEach(({ id }) => {
			fetch(
				`${API_URL}products/buy`,
				{
					method: 'POST',
					headers: {
						'User-Token': token,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ customerId, productId: id }),
				},
			)
		});

		window.alert(
			`Nice!\n\nYou bought ${cartProducts.length} item(s) adding up to $ ${cartProducts ? cartProducts.reduce((totalPrice, { price }) => totalPrice + price, 0).toFixed(2) : Number(0).toFixed(2)}\n\nFeel free to check out your shopping history in the Customer page.`
		);
		setCartProducts([]);
		localStorage.setItem('cartProducts', JSON.stringify([]));
		navigate('/');
	};

	return (
		<div className='flex flex-col items-center pt-6'>
			<div className='w-2/3 2xl:w-3/5 flex flex-col pb-7'>
				{cartProducts && cartProducts.map(({ name, price }, index) => (
					<div key={index} className='bg-purple-900 text-white rounded-xl flex justify-around items-center flex-wrap m-4 py-4'>
						<img src={`./images/${name}.jpeg`} alt={name} className='w-28 rounded-xl' />
						<div className='flex justify-between items-center w-2/3'>
							<h1 className='text-2xl'>{name}</h1>
							<h2 className='text-2xl'>{`$ ${price.toFixed(2)}`}</h2>
							<button onClick={() => removeItem(name)}>
								<TiDelete className='text-4xl text-red-700 bg-white rounded-full hover:bg-red-700 hover:text-white' />
							</button>
						</div>
					</div>
				))}
			</div>
			<div className='w-2/3 flex justify-around items-center'>
				<p className='text-red-700 text-3xl'>{`$ ${cartProducts ? cartProducts.reduce((totalPrice, { price }) => totalPrice + price, 0).toFixed(2) : Number(0).toFixed(2)}`}</p>
				<button className='bg-purple-900 hover:bg-purple-700 text-white py-2 px-8 rounded-lg' disabled={cartProducts.length === 0} onClick={handleBuy}>Buy</button>
			</div>
		</div>
	);
}
