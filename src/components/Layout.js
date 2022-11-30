import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../context/ProductsContext';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';

export default function Layout({ children }) {
	const { customerLoggedIn, cartProducts } = useContext(ProductsContext);

	return (
		<div className='min-h-screen flex flex-col justify-between bg-purple-100'>
			<header className='p-10 bg-purple-900 text-[#FCF7FF] flex justify-around fixed w-full shadow-lg shadow-purple-700'>
				<Link className='text-7xl' to='/'>
					Talezon
				</Link>
				{customerLoggedIn ? (
					<div className='flex justify-around w-1/3 items-end pb-3.5'>
						<Link to='/cart' className='w-14 h-14 flex flex-col'>
							<div className='bg-red-700 w-5 h-5 rounded-full flex justify-center items-center self-end'>
								<span className='text-base'>
									{cartProducts ? cartProducts.length : 0}
								</span>
							</div>
							<FaShoppingCart className='text-4xl self-center' />
						</Link>
						<Link to='/customer'>
							<FaUserCircle className='text-4xl pb-0.5' />
						</Link>
					</div>
				) : (
					<div className='flex justify-around w-1/3 items-end pb-3.5'>
						<Link to='/login' className='w-14 h-14 flex flex-col'>
							<div className='bg-red-700 w-5 h-5 rounded-full flex justify-center items-center self-end'>
								<span className='text-base'>
									{cartProducts ? cartProducts.length : 0}
								</span>
							</div>
							<FaShoppingCart className='text-4xl self-center' />
						</Link>
						<Link className='text-3xl pb-0.5' to='/login'>
							Log In
						</Link>
					</div>
				)}
			</header>
			<main className='mt-52'>
				{children}
			</main>
			<footer className='bg-purple-900 text-center text-[#FCF7FF] p-2 mt-5'>Tales Rodrigues DEV</footer>
		</div>
	);
}
