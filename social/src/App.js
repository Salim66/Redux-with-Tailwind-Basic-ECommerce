import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/shop/Home/Home';
import ShopPage from './pages/shop/ShopPage/ShopPage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/shop" element={ <ShopPage /> } />
      </Routes>
    </>
  );
}

export default App;
