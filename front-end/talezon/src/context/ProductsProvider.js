import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';

export default function ProductsProvider({ children }) {
	const [products, setProducts] = useState([]);

	const objectValue = {
		products,
		setProducts,
	};

	return (
		<ProductsContext.Provider value={objectValue}>
			{ children }
		</ProductsContext.Provider>
	);
}

ProductsProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
