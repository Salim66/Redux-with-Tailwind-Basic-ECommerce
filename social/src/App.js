import { Route, Routes } from 'react-router-dom';
import './App.css';
import Brand from './pages/admin/Brand/Brand';
import Category from './pages/admin/category/Category';
import Dashboard from './pages/admin/Dashboard/Dashboard';
import Product from './pages/admin/Product/Product';
import Tag from './pages/admin/Tag/Tag';
import Home from './pages/shop/Home/Home';
import ShopPage from './pages/shop/ShopPage/ShopPage';
import SingleShop from './pages/shop/SingleShop/SingleShop';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/shop" element={ <ShopPage /> } />
        <Route path="/single-shop" element={ <SingleShop /> } />

        // Admin Route
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/products" element={ <Product /> } />
        <Route path="/categories" element={ <Category /> } />
        <Route path="/brands" element={ <Brand /> } />
        <Route path="/tags" element={ <Tag /> } />
      </Routes>
    </>
  );
}

export default App;
