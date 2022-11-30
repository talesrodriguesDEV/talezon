import React, { useContext, useState } from 'react';
import Product from '../components/Product';
import ProductsContext from '../context/ProductsContext';

export default function Home() {
	const { allProducts } = useContext(ProductsContext);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [category, setCategory] = useState('0');

	const filterProducts = ({ target }) => {
		const query = target.value.toUpperCase();

		const newFilteredProducts = allProducts
			.filter(({ name }) => name.toUpperCase().includes(query))
			.filter(({ category_id }) => category_id === Number(category) || category === '0');

		setFilteredProducts(newFilteredProducts);
	};

	const filterProductsByCategory = ({ target }) => {
		setCategory(target.value);

		const newFilteredProducts = target.value === '0' ? allProducts : allProducts.filter(({ category_id }) => category_id === Number(target.value));

		setFilteredProducts(newFilteredProducts);
		document.querySelector('#search-input').value = '';
	}

	return (
		<div className='flex flex-col items-center justify-around'>
			<form className='flex flex-col p-10 my-10 text-purple-900'>
				<label className='text-4xl'>What do you need today?</label>
				<input className='my-5 p-2 rounded-lg outline-purple-900 outline-8 outline-offset-4' placeholder='Type it here!' type='text' id='search-input' onChange={filterProducts} />
				<select className='p-2 bg-white rounded-lg' onChange={filterProductsByCategory}>
					<option value='0'>All</option>
					<option value='1'>Clothes</option>
					<option value='2'>Food</option>
					<option value='3'>Vehicles</option>
					<option value='4'>Electronics</option>
					<option value='5'>Musical Instruments</option>
					<option value='6'>Sporting Goods</option>
				</select>
			</form>
			<div className='w-full flex flex-wrap justify-center px-36'>
				{filteredProducts.map((product, index) => <Product key={index} product={product} />)}
			</div>
		</div>
	);
}
