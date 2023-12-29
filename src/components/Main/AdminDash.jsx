import React, { useEffect, useState } from 'react';



import CustomModal from '../Inner/CustomModel';

import AdminNavbar from '../Inner/AdminNavbar';
import AdminSideBarComp from '../Inner/AdminSideBarComp';
import SvgIcons from '../../assets/SvgIcons';




export default function AdminDash() {
  const [selected, setSelected] = useState("All");
  const [show, setShow] = useState(false);
  const [showModel, setShowModel] = useState(true);
  const [selectedSection, setSelectedSection] = useState(""); // Track selected section
  const [showAdminForm , setShowAdminForm] = useState(false)
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    setShowAdminForm(true);
  };

  useEffect(() => {
    console.log('show', show);
  }, [show]);

  const CustomerModal = () => {
    return (
      <>
        <div className='container max-w-[650px] w-full'>
          <div className='flex justify-end w-full'>
            {/* <SvgIcons.Close /> */}
          </div>
          <h2 className='text-3xl font-bold'>Jack Caspino</h2>
          {/* ... (unchanged modal content) */}
        </div>
      </>
    );
  };

  const initiateWithdrawalRequest = () => {
    console.log('Withdrawal request initiated');
  };

  return (
    <>
   
      <div className='w-full'>
      <AdminNavbar />

     
      <div className="flex  my-2">
      <AdminSideBarComp />
        <div className="flex w-[80%] flex-col">
          

          <div className="flex flex-col">
  
            <div className="w-[90%] ml-auto mr-auto">
              <div className="flex gap-[5px] justify-between  py-7 px-2	 text-black font-inter text-xl font-normal leading-normal">
                   <div>Hello Waleed</div>
                   <p>waleedahsan227@gmail.com</p>
              </div>
              { showAdminForm ? 
              <div className="w-[100%] mt-px h-[500px]  rounded-md border border-gray-200 bg-gray-200 p-2">
              <div className="grid grid-cols-1 justify-self-auto gap-5 text-black font-inter text-sm font-normal ">
              <div className=" border border-gray-500 w-full p-4">
                <div className="flex justify-between text-xl items-center">

                <h4 className="text-2xl font-medium">User Request</h4>
                <div className="flex gap-3">
                  <button className="border bg-green-400 text-white text-sm px-4 py-2 rounded-full ">Apprvoed</button>
                  <button className="border bg-red-500 text-white text-sm px-4 py-2 rounded-full ">Rejected</button>
                </div>
                </div>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque atque nobis error eligendi magnam recusandae ea alias et laborum, ipsam officia minima, consequuntur dolorum dicta aliquam maxime temporibus reprehenderit ullam!</p>
              </div>
              <div className=" border border-gray-500 w-full p-4">
                <div className="flex justify-between text-xl items-center">

                <h4 className="text-2xl font-medium">User Request</h4>
                <div className="flex gap-3">
                  <button className="border bg-green-400 text-white text-sm px-4 py-2 rounded-full ">Apprvoed</button>
                  <button className="border bg-red-500 text-white text-sm px-4 py-2 rounded-full ">Rejected</button>
                </div>
                </div>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque atque nobis error eligendi magnam recusandae ea alias et laborum, ipsam officia minima, consequuntur dolorum dicta aliquam maxime temporibus reprehenderit ullam!</p>
              </div>
              <div className=" border border-gray-500 w-full p-4">
                <div className="flex justify-between text-xl items-center">

                <h4 className="text-2xl font-medium">User Request</h4>
                <div className="flex gap-3">
                  <button className="border bg-green-400 text-white text-sm px-4 py-2 rounded-full ">Apprvoed</button>
                  <button className="border bg-red-500 text-white text-sm px-4 py-2 rounded-full ">Rejected</button>
                </div>
                </div>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque atque nobis error eligendi magnam recusandae ea alias et laborum, ipsam officia minima, consequuntur dolorum dicta aliquam maxime temporibus reprehenderit ullam!</p>
              </div>
            
              </div>  
               
              </div> : 
              <form
              onSubmit={handleSubmit}
              className="bg-white  border rounded px-8 pt-6 pb-8 mb-4 w-full max-w-[100%] lg:max-w-[50%]"
            >
              <p>We’re glad to have you! 👋</p>
              <h2 className="text-2xl font-bold mb-6 ">Create A New Admin</h2>
              
              <div className="mb-4 mt-7 relative">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="flex items-center absolute inset-y-0 top-7 right-5 pl-1">
                  <SvgIcons.Correct className="h-6 w-6 text-gray-500" />
                </div>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
    
              <div className="mb-4 relative">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
    
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <div className="absolute right-5 top-9">
                  <SvgIcons.Hidden className="h-6  w-6 text-gray-500" />
                </div>
              </div>
              <div className="mb-6 relative">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="ConfirmPassword"
                >
                  Confirm Password
                </label>
    
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="ConfirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <div className="absolute right-5 top-9">
                  <SvgIcons.Hidden className="h-6  w-6 text-gray-500" />
                </div>
              </div>
    
              <button className="w-full bg-[#5E81FF] text-white py-3 rounded-md" type="submit">
                Add Admin
              </button>
            </form>
              }
                
            </div>
          </div>
        </div>
      </div>
       


      </div>
       
    </>
  );
}
