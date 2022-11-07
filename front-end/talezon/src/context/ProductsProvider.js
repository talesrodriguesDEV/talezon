import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';

export default function ProductsProvider({ children }) {
	const [allProducts, setAllProducts] = useState([]);
	const [customerLoggedIn, setCustomerLoggedIn] = useState(false);
	const [customerSignedIn, setCustomerSignedIn] = useState(false);
	const [userInfo, setUserInfo] = useState({
		name: '',
		email: '',
		password: '',
	});

	useEffect(() => {
		// https://back-end-production-0be2.up.railway.app/
		fetch(`http://localhost:3000/products`)
			.then((response) => response.json())
			.then((json) => setAllProducts(json));
	}, []);

	const objectValue = {
		allProducts,
		customerLoggedIn,
		setCustomerLoggedIn,
		customerSignedIn,
		setCustomerSignedIn,
		userInfo, setUserInfo,
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
