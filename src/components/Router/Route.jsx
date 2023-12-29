import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersDash from '../Main/UsersDash';
import Dashboard from '../Inner/Dashboard';
import RenewSub from '../Inner/RenewSub';
import AdminDash from '../Main/AdminDash';
import RegisterUser from '../Main/RegisterUser';
import LoginForm from '../Main/LoginForm';
import SuperAdminDash from '../Main/SuperAdminDash';
import HospSidebar from "../Inner/HospSidebar"
import HospDashboard from "../Main/HospDashbaord"
import AddHospUser from "../Inner/AddHospUser"
import Review from "../Inner/Review";
import CancelSub from '../Inner/CancelSub';
import Requests from "../Inner/Requests"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/userDash" element={<UsersDash />} />
        <Route path="/registeruser" element={<RegisterUser/>} />
        <Route path="/loginuser" element={<LoginForm/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/renewsub" element={<RenewSub/>} />
        <Route path="/admindash" element={<AdminDash/>} />
        <Route path="/superadmin" element={<SuperAdminDash/>} />
        <Route path="/hospSidebar" element={<HospSidebar/>} />
        <Route path="/hospDashboard" element={<HospDashboard/>} />
        <Route path="/addHospUser" element={<AddHospUser/>} />
        <Route path="/reviews" element={<Review/>} />
        <Route path="/cancelSub" element={<CancelSub/>} />
        <Route path="/request" element={<Requests/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;