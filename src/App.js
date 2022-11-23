import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './components/body selection/Body'
import Top from './components/body selection/top selection/Top';
import Sidebar from './components/sidebar selection/Sidebar'
import Billing from './pages/billing/Billing';
import Charts from './pages/charts/Chart';
import Contract from './pages/contract/Contract';
import Dashboard from './pages/dashboard/Dashboard';
import Explore from './pages/explore/Explore';
import Orders from './pages/orders/Orders';
import Products from './pages/products/Products';
import Trends from './pages/trends/Trends';
import Login from "./pages/login/Login"
import Signup from './pages/signup/Signup';

const App = () => {

  const [open, setOpen] = useState(false);

  const handle = () => {
    setOpen(!open)
  }

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<Dashboard />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/products' element={<Products />} />
            <Route path='/charts' element={<Charts />} />
            <Route path='/trends' element={<Trends />} />
            <Route path='/contract' element={<Contract />} />
            <Route path='/billing' element={<Billing />} />
            <Route path='*' element={<h1> Page Not Found! </h1>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App