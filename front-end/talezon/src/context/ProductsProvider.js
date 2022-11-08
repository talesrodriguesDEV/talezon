import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';
import dotenv from 'dotenv';

dotenv.config();

export default function ProductsProvider({ children }) {
	const [allProducts, setAllProducts] = useState([]);
	const [customerLoggedIn, setCustomerLoggedIn] = useState(false);
	const [customerInfo, setCustomerInfo] = useState();
	const [token, setToken] = useState('');
	const [cartProducts, setCartProducts] = useState([]);
	const [customerId, setCustomerId] = useState();

	useEffect(() => {
		fetch(`${process.env.API_URL}/products`)
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
		customerId,
		setCustomerId,
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
