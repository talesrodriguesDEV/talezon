import React, { useEffect, useState } from 'react';

export default function Customer() {
  const [savedCustomer, setSavedCustomer] = useState();

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
      .then((json) => console.log(json));
  }, []);

  if (savedCustomer) return (
    <div>
      <h1>Hi, {savedCustomer.name}!</h1>
      <p>Email: {savedCustomer.email}</p>
      <p>Password: {savedCustomer.password}</p>
    </div>
  );
}