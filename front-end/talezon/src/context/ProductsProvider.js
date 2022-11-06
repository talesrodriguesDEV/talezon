import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';

export default function ProductsProvider({ children }) {
	const [allProducts, setAllProducts] = useState([]);

	useEffect(() => {
		// https://back-end-production-0be2.up.railway.app/
		fetch(`http://localhost:3000/products`)
			.then((response) => response.json())
			.then((json) => setAllProducts(json));
	}, []);

	const objectValue = {
		allProducts,
	};

	return (
		<ProductsContext.Provider value={objectValue}>
			{children}
		</ProductsContext.Provider>
	);
}

ProductsProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
