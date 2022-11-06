import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Product from '../components/Product';
import ProductsContext from '../context/ProductsContext';
import fetchAPI from '../services/fetchAPI';

export default function Home() {
	const { products, setProducts } = useContext(ProductsContext);
	const [category, setCategory] = useState('0');

	const getProducts = async ({ target }) => {
		const allProducts = await fetchAPI('products');
		const query = target.value.toUpperCase();

		const filteredProducts = allProducts
			.filter(({ name }) => name.toUpperCase().includes(query))
			.filter(({category_id}) => category_id === Number(category));

		setProducts(filteredProducts);
	};

	return (
		<div className='flex flex-col items-center justify-around'>
			<Form className='w-1/3'>
				<Form.Group className='flex flex-col'>
					<Form.Label>What do you need today?</Form.Label>
					<Form.Control type='text' onChange={getProducts} />
					<Form.Select onChange={({target}) => setCategory(target.value)}>
						<option value='0'>All</option>
						<option value='1'>Clothes</option>
						<option value='2'>Food</option>
						<option value='3'>Vehicles</option>
						<option value='4'>Electronics</option>
						<option value='5'>Musical Instruments</option>
						<option value='6'>Sporting Goods</option>
					</Form.Select>
				</Form.Group>
			</Form>
			<div className='w-full flex flex-wrap justify-center'>
				{products.map((product, index) => <Product key={index} product={product} />)}
			</div>
		</div>
	);
}
