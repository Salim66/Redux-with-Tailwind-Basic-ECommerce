import { Route, Routes } from 'react-router-dom';
import './App.css';
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
      </Routes>
    </>
  );
}

export default App;
