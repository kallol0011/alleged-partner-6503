import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Checkout from '../Pages/Checkout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Products from '../Pages/Products';

import CartItem from '../Pages/Cart';
import ProductDetails from '../Pages/SingalProducts';
import SingalProducts from '../Pages/SingalProducts';


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup></Signup>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/cart" element={<CartItem></CartItem>} />
            <Route path="/checkout" element={<Checkout></Checkout>} />
            <Route path="/product" element={<Products/>} />
            <Route path="/product/:id" element={<SingalProducts/>} />
        </Routes>
    );
};

export default AllRoutes;