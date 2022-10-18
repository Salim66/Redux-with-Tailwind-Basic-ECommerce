import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Brand from './pages/admin/Brand/Brand';
import Category from './pages/admin/category/Category';
import Color from './pages/admin/Color/Color';
import Dashboard from './pages/admin/Dashboard/Dashboard';
import Product from './pages/admin/Product/Product';
import Size from './pages/admin/Size/Size';
import Tag from './pages/admin/Tag/Tag';
import Home from './pages/shop/Home/Home';
import ShopPage from './pages/shop/ShopPage/ShopPage';
import SingleShop from './pages/shop/SingleShop/SingleShop';
import { useDispatch } from 'react-redux';
import { getAllSize } from './redux/size/action';
import { getAllColor } from './redux/color/action';
import { getAllTag } from './redux/tag/action';
import { getAllBrand } from './redux/brand/action';
import { getAllCategory } from './redux/category/action';
import { getAllPopularProduct, getAllProduct } from './redux/product/action';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSize());
    dispatch(getAllColor());
    dispatch(getAllTag());
    dispatch(getAllBrand());
    dispatch(getAllCategory());
    dispatch(getAllProduct());
    dispatch(getAllPopularProduct());
  },[]);

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/shop" element={ <ShopPage /> } />
        <Route path="/single-shop/:slug" element={ <SingleShop /> } />

        // Admin Route
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/products" element={ <Product /> } />
        <Route path="/categories" element={ <Category /> } />
        <Route path="/brands" element={ <Brand /> } />
        <Route path="/tags" element={ <Tag /> } />
        <Route path="/colors" element={ <Color /> } />
        <Route path="/sizes" element={ <Size /> } />
      </Routes>
    </>
  );
}

export default App;
