import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';

export default function ProductsProvider({ children }) {
	const [allProducts, setAllProducts] = useState([]);
	const [customerLoggedIn, setCustomerLoggedIn] = useState(false);
	const [customerInfo, setCustomerInfo] = useState();
	const [token, setToken] = useState('');
	const [cartProducts, setCartProducts] = useState([]);

	useEffect(() => {
		// https://back-end-production-0be2.up.railway.app/
		fetch('http://localhost:3000/products')
			.then((response) => response.json())
			.then((json) => setAllProducts(json));

		const savedToken = localStorage.getItem('customerToken');
		const savedCustomer = JSON.parse(localStorage.getItem('customerInfo'));
		const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));

		if (savedToken && savedCustomer) {
			setCustomerInfo(savedCustomer);
			setToken(savedToken);
			setCustomerLoggedIn(true);
			if (cartProducts) setCartProducts(cartProducts);
		} 
	}, []);

	const objectValue = {
		allProducts,
		customerLoggedIn,
		setCustomerLoggedIn,
		customerInfo,
		setCustomerInfo,
		token,
		setToken,
		cartProducts,
		setCartProducts,
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
