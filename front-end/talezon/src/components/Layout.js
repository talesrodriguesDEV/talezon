import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../context/ProductsContext';
import { FaUserCircle } from 'react-icons/fa';

export default function Layout({ children }) {
	const { customerLoggedIn } = useContext(ProductsContext);

	return (
		<div className='min-h-screen flex flex-col justify-between bg-[#d0c9d4]'>
			<header className='p-10 bg-[#A4969B] text-[#FCF7FF] flex justify-around'>
				<Link to='/'>
					Talezon
				</Link>
				{customerLoggedIn ? (
					<Link to='/customer'>
						<FaUserCircle />
					</Link>
				) : (
					<Link to='/login'>
						Log In
					</Link>
				)}
			</header>
			<main>
				{children}
			</main>
			<footer className='bg-[#878C8F] text-center text-[#FCF7FF] p-2'>Tales Rodrigues DEV</footer>
		</div>
	);
}
