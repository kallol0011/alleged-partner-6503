import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from '../Pages/Home';
// import Login from '../Pages/Login';
// import Signup from '../Pages/Signup';
import Dashboard from './Dashboard';
import Products from './Products';
import Orders from './Orders';
import Logout from './Logout';
import Users from './Users';
import Login from '../Pages/Login';
import Profile from './Profile';
import Feedback from './Feedback';
import AddProduct from './AddData';
import Register from '../Pages/Register';

const AllRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Home/>} /> */}
            {/* <Route path="/signup" element={<Signup></Signup>} /> */}
            <Route path="/login" element={<Login/>} />

            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/addproduct" element={<AddProduct/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/feedback" element={<Feedback/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    );
};

export default AllRoutes;