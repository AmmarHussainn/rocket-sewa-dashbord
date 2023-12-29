import React from 'react';
import Dashboard from './components/Inner/Dashboard';
import Sidebar from './components/Inner/Sidebar';
import Router  from "./components/Router/Route"

const App = () => {
  return (
    <div className='flex'>
     <Router/>
    </div>
  );
};

export default App;
