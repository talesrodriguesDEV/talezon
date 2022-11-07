import React, { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';

export default function Login() {
	const { customerSignedIn, setCustomerSignedIn, userInfo, setUserInfo } = useContext(ProductsContext);
	const { name, email, password } = userInfo;

	const doLogIn = () => {

	};

	const doSignIn = () => {

	}

	const loginForm = () => (
		<form className='flex flex-col' onSubmit={ doLogIn }>
			<h1>Welcome back, {name}!</h1>
			<label>Email: </label>
			<input type='email' />
			<label>Password: </label>
			<input type='password' />
			<button type='submit'>
				Log in
			</button>
		</form>
	);

	const signInForm = () => (
		<form className='flex flex-col' onSubmit={ doSignIn }>
			<h1>Welcome to Talezon!</h1>
			<label>What's your name? </label>
			<input type='text' />
			<label>What's your email: </label>
			<input type='email' />
			<label>Define a password: </label>
			<input type='password' />
			<button type='submit'>
				Sign in
			</button>
		</form>
	);

	return (
		<div>
			{customerSignedIn ? loginForm() : signInForm()}
		</div>
	);
}
