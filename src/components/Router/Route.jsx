import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ManageAcc from "../Inner/ManageAcc"
import PersonalInfo from "../Inner/Personalnfo"
import ChangePass from '../Inner/ChangePass';
import UsersDash from '../Main/UsersDash';
import Dashboard from '../Inner/Dashboard';
import RenewSub from '../Inner/RenewSub';
import AdminDash from '../Main/AdminDash';
import RegisterUser from '../Main/RegisterUser';
import LoginForm from '../Main/LoginForm';
import SuperAdminDash from '../Main/SuperAdminDash';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registeruser" element={<RegisterUser/>} />
        <Route path="/loginuser" element={<LoginForm/>} />
        <Route path="/" element={<UsersDash />} />
        <Route path="/manageAcc" element={<ManageAcc/>} />
        <Route path="/personalInfo" element={<PersonalInfo />} />
        <Route path="/changePass" element={<ChangePass/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/renewsub" element={<RenewSub/>} />
        <Route path="/admindash" element={<AdminDash/>} />
        <Route path="/superadmin" element={<SuperAdminDash/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;