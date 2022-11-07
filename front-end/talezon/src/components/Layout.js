import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../context/ProductsContext';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';

export default function Layout({ children }) {
	const { customerLoggedIn, cartProducts } = useContext(ProductsContext);

	return (
		<div className='min-h-screen flex flex-col justify-between bg-[#d0c9d4]'>
			<header className='p-10 bg-[#A4969B] text-[#FCF7FF] flex justify-around'>
				<Link to='/'>
					Talezon
				</Link>
				{customerLoggedIn ? (
					<div className='flex justify-around w-1/3'>
						<Link to='cart' className='w-14 h-14 flex flex-col'>
							<div className='bg-red-700 w-5 h-5 rounded-full flex justify-center items-center self-end'>
								<span className='text-base'>
									{cartProducts ? cartProducts.length : 0}
								</span>
							</div>
							<FaShoppingCart className='text-4xl self-center' />
						</Link>
						<Link to='/customer'>
							<FaUserCircle className='text-4xl' />
						</Link>
					</div>
				) : (
					<div className='flex justify-around w-1/3'>
						<Link to='/login'>
							<FaShoppingCart />
						</Link>
						<Link to='/login'>
							Log In
						</Link>
					</div>
				)}
			</header>
			<main>
				{children}
			</main>
			<footer className='bg-[#878C8F] text-center text-[#FCF7FF] p-2'>Tales Rodrigues DEV</footer>
		</div>
	);
}
