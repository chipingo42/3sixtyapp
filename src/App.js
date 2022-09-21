import React from 'react'
import { Navbar } from './Components'
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
      <Routes> 
        <Route path='/' element={<Navbar />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
