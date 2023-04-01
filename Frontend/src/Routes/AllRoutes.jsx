import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Checkout from '../Pages/Checkout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Products from '../Pages/Products';
import Orderpage from '../Pages/Orderpage';

import CartItem from '../Pages/Cart';


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup></Signup>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/cart" element={<CartItem></CartItem>} />
            <Route path="/checkout" element={<Checkout></Checkout>} />
            <Route path="/product" element={<Products/>} />
            <Route path="/order" element={<Orderpage/>}/>
        </Routes>
    );
};

export default AllRoutes;