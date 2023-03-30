import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Checkout from '../Pages/Checkout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup></Signup>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/checkout" element={<Checkout></Checkout>} />
        </Routes>
    );
};

export default AllRoutes;