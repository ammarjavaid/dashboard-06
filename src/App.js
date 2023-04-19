import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Orders from './pages/orders/Orders';

const App = () => {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/all-projects' element={<Orders />} />
            <Route path='*' element={<h1> Page Not Found! </h1>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App