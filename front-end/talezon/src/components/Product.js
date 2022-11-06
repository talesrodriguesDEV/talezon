import React from 'react';

export default function Product({product: {name, price}}) {

	return (
		<div className='p-4 m-2 border bg-black text-white rounded-xl'>
      <h1 className='text-center'>{name}: {`R$ ${price.toFixed(2)}`}</h1>
      <br />
      <img src={`./images/${name}.jpeg`} className='w-64 rounded-xl' />
		</div>
	);
}
