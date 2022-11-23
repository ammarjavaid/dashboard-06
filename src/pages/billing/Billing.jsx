import React, { useState } from 'react'
import Top from '../../components/body selection/top selection/Top'
import Sidebar from '../../components/sidebar selection/Sidebar'

export default function Billing() {

  const [open, setOpen] = useState(false);

  const handle = () => {
    setOpen(!open)
  }

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <div className='container'>
        <Top open={open} setOpen={setOpen} handle={handle} />
        <h1 style={{ color: "#fff", padding: "1rem" }}> Billings </h1>
      </div>
    </>
  )
}
