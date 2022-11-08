import React, { useContext, useState } from 'react';
import ProductsContext from '../context/ProductsContext';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://back-end-production-0be2.up.railway.app'

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
			`${API_URL}/signIn`,
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
		<div className='w-full flex justify-center'>
			<form className='flex flex-col w-2/3 xl:w-1/3 text-purple-900' onSubmit={handleLogIn}>
				<h1 className='text-center text-5xl mb-16'>Welcome to Talezon!</h1>
				<label>What's your name? </label>
				<input className='my-3 p-2 rounded-lg outline-purple-900 outline-8 outline-offset-4' type='text' onChange={({ target }) => setName(target.value)} />
				<label>What's your email: </label>
				<input className='my-3 p-2 rounded-lg outline-purple-900 outline-8 outline-offset-4' type='email' onChange={({ target }) => setEmail(target.value)} />
				<label>Define a password: </label>
				<input className='my-3 p-2 rounded-lg outline-purple-900 outline-8 outline-offset-4' type='password' onChange={({ target }) => setPassword(target.value)} />
				<button className='bg-purple-900 hover:bg-purple-700 text-white py-2 rounded-lg mt-5' type='submit'>
					Start shopping!
				</button>
			</form>
		</div>
	);
}
