import React from 'react';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
	return (
		<div className='min-h-screen flex flex-col justify-between bg-[#d0c9d4]'>
			<header className='p-10 bg-[#A4969B] text-[#FCF7FF]'>Vamo!</header>
			<main>
				{ children }
			</main>
			<footer className='bg-[#878C8F] text-center text-[#FCF7FF] p-2'>Tales Rodrigues DEV</footer>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
