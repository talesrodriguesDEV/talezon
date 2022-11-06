import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsProvider from './context/ProductsProvider';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/LogIn';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function App() {
	return (
		<ProductsProvider>
			<Layout>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={ <Home /> } />
						<Route path='/login' element={ <Login /> } />
						<Route path='/cart' element={ <Cart /> } />
						<Route path='*' element={ <NotFound /> } />
					</Routes>
				</BrowserRouter>
			</Layout>
		</ProductsProvider>
	);
}

export default App;
