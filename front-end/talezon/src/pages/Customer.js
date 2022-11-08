import React, { useEffect, useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import API_URL from '../api-url';

export default function Customer() {
  const [savedCustomer, setSavedCustomer] = useState();
  const [boughtItems, setBoughtItems] = useState();
  const [passOrText, togglePassword] = useState('password');

  useEffect(() => {
    const savedToken = localStorage.getItem('customerToken');
    const savedCustomer = JSON.parse(localStorage.getItem('customerInfo'));
    const { email } = savedCustomer;
    setSavedCustomer(savedCustomer);

    fetch(
      `${API_URL}/shoppingHistory`,
      {
        method: 'POST',
        headers: {
          'User-Token': savedToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email }),
      })
      .then((response) => response.json())
      .then((json) => setBoughtItems(json.products));
  }, []);

  if (savedCustomer) return (
    <div className='mt-14 flex flex-col items-center text-purple-900'>
      <div className='flex flex-col w-96 mb-24 text-xl'>
        <h1 className='text-3xl mb-5'>Hi, {savedCustomer.name}!</h1>
        <label className='w-full flex justify-between items-center' htmlFor='email'>
          Email:
          <input id='email' disabled className='w-56 my-2 ml-3 p-2 rounded-lg bg-white' value={savedCustomer.email} />
        </label>
        <label className='w-full flex justify-between items-center' htmlFor='password'>
          Password:
          {passOrText === 'password' ? <BsEyeFill onClick={() => togglePassword('text')} /> : <BsEyeSlashFill onClick={() => togglePassword('password')} />}
          <input id='password' className='w-56 my-2 p-2 rounded-lg bg-white' value={savedCustomer.password} disabled type={passOrText} />
        </label>
      </div>
      <div>
        <h1 className='text-3xl mb-6'>You've bought:</h1>
        <ol className='list-decimal list-inside'>
          {boughtItems && boughtItems.map(({ name, price, updated }, index) => {
            const date = new Date(updated);
            return (
              <li className='mb-4 text-xl' key={index}>
                {`${name} - $ ${price.toFixed(2)} - ${date.toUTCString()}`}
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  );
}