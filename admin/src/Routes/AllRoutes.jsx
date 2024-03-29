import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from '../Pages/Home';
// import Login from '../Pages/Login';
// import Signup from '../Pages/Signup';
import Dashboard from './Dashboard';
import Products from './Products';
import Orders from './Orders';
import Users from './Users';

import Login from '../Pages/Login';
import Profile from './Profile';
import Feedback from './Feedback';
import AddProduct from './AddData';
import Register from '../Pages/Register';
import UpdateData from './UpdateData';

const AllRoutes = () => {
    return (
        <Routes>
            
            <Route path="/" element={<Login/>} />

            <Route path="/admin/dashboard" element={<Dashboard/>} />
            <Route path="admin/products" element={<Products/>} />
            <Route path="admin/addproduct" element={<AddProduct/>} />
            <Route path="admin/users" element={<Users/>} />
            <Route path="admin/orders" element={<Orders/>} />
            <Route path="admin/profile" element={<Profile/>} />
            <Route path="admin/feedback" element={<Feedback/>} />
            <Route path="admin/register" element={<Register/>} />
            <Route path="admin/updateproduct/:id" element={<UpdateData/>} />
        </Routes>
    );
};

export default AllRoutes;