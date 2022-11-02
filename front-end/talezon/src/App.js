import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/LogIn';
import Cart from './pages/Cart';

function App() {
  return (
    <Layout>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </HashRouter>
    </Layout>
  );
}

export default App;
