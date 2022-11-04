import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import ProductsContext from '../context/ProductsContext';
import fetchAPI from '../services/fetchAPI';

export default function Home() {
	const { products, setProducts } = useContext(ProductsContext);

	const getProducts = async () => {
		const allProducts = await fetchAPI('products');
		setProducts(allProducts);
	};

	return (
		<div className='flex flex-col items-center justify-around'>
			<Form className='w-1/3'>
				<Form.Group className='flex flex-col'>
					<Form.Label>What do you need today?</Form.Label>
					<Form.Control type='text' onChange={getProducts} />
				</Form.Group>
			</Form>
			<div>
				{ products }
			</div>
		</div>
	);
}
