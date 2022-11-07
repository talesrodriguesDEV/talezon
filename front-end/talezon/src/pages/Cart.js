import React, { useContext, useEffect } from 'react';
import ProductsContext from '../context/ProductsContext';
import { TiDelete } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

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
				'http://localhost:3000/products/buy',
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
		<div className='flex flex-col items-center'>
			<div className='w-2/3 flex flex-col'>
				{cartProducts && cartProducts.map(({ name, price }, index) => (
					<div key={index} className='bg-black text-white rounded-xl flex m-4'>
						<img src={`./images/${name}.jpeg`} alt={name} className='w-28 rounded-xl' />
						<div className='w-full flex justify-around items-center'>
							<h1 className='text-2xl'>{name}</h1>
							<h2 className='text-2xl'>{`$ ${price.toFixed(2)}`}</h2>
							<button onClick={() => removeItem(name)}>
								<TiDelete className='text-4xl text-red-700' />
							</button>
						</div>
					</div>
				))}
			</div>
			<div>
				<p>{`$ ${cartProducts ? cartProducts.reduce((totalPrice, { price }) => totalPrice + price, 0).toFixed(2) : Number(0).toFixed(2)}`}</p>
				<button disabled={cartProducts.length === 0} onClick={handleBuy}>Buy</button>
			</div>
		</div>
	);
}
