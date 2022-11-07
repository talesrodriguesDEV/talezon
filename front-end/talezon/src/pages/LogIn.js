import React, { useContext, useState } from 'react';
import ProductsContext from '../context/ProductsContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
	const { setCustomerInfo, setToken, setCustomerLoggedIn, setCustomerId } = useContext(ProductsContext);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleLogIn = () => {
		setCustomerInfo({ name, email, password });
		localStorage.setItem('customerInfo', JSON.stringify({ name, email, password }));

		fetch(
			'http://localhost:3000/customers/signIn',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, password }),
			})
			.then((response) => response.json())
			.then(({ id, token }) => {
				setCustomerLoggedIn(true);
				setCustomerId(id);
				setToken(token);
				localStorage.setItem('customerToken', token);
			});

		navigate('/');
	};

	return (
		<div>
			<form className='flex flex-col' onSubmit={handleLogIn}>
				<h1>Welcome to Talezon!</h1>
				<label>What's your name? </label>
				<input type='text' onChange={({ target }) => setName(target.value)} />
				<label>What's your email: </label>
				<input type='email' onChange={({ target }) => setEmail(target.value)} />
				<label>Define a password: </label>
				<input type='password' onChange={({ target }) => setPassword(target.value)} />
				<button type='submit'>
					Start shopping!
				</button>
			</form>
		</div>
	);
}
