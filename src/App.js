import React from 'react'
import { Navbar, Dashboard} from './Components'
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
      <Routes> 
        <Route path='/' index={Navbar}  element={<Navbar />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
