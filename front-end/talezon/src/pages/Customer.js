import React, { useEffect, useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

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
      'http://localhost:3000/customers/shoppingHistory',
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
    <div className='flex justify-around'>
      <div>
        <h1>Hi, {savedCustomer.name}!</h1>
        <p>Email: {savedCustomer.email}</p>
        <input value={savedCustomer.password} disabled type={passOrText} />
        {passOrText === 'password' ? <BsEyeFill onClick={() => togglePassword('text')} /> : <BsEyeSlashFill onClick={() => togglePassword('password')} />}
      </div>
      <div>
        <h1>You've bought:</h1>
        {boughtItems && boughtItems.map(({ name, price, updated }, index) => {
          const date = new Date(updated);
          return (
            <div key={index}>
              {`${name} - $ ${price.toFixed(2)} - ${date.toUTCString()}`}
            </div>
          )
        })}
      </div>
    </div>
  );
}