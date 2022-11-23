import React, { useState } from 'react'
import Fifth from '../../components/charts/Fifth'
import First from '../../components/charts/First'
import Fourth from '../../components/charts/Fourth'
import Secound from '../../components/charts/Secound'
import Sixth from '../../components/charts/Sixth'
import Third from '../../components/charts/Third'
import "./charts.scss"
import Top from '../../components/body selection/top selection/Top'
import Sidebar from '../../components/sidebar selection/Sidebar'

export default function Charts() {

  const [open, setOpen] = useState(false);

  const handle = () => {
    setOpen(!open)
  }

  return (
    <>
    <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <div className='container'>
        <Top open={open} setOpen={setOpen} handle={handle} />
      <div className='charts'>

        <div className='charts__content1'>
          <div className='left__chart'>
            <h3> Line Chart </h3>
            <First />
          </div>
          <div className='right__chart'>
          <h3> Bar Chart </h3>
            <Secound />
          </div>
        </div>

        <div className='charts__content2'>
          <div className='left__chart2'>
            <h3> Area Chart </h3>
            <Third />
          </div>
          <div className='right__chart2'>
          <h3> Donut Chart </h3>
            <Fourth />
          </div>
        </div>

        <div className='charts__content3'>
          <div className='left__chart3'>
            <h3> RadialBar Chart </h3>
              <Fifth />
          </div>
          <div className='right__chart3'>
          <h3> DomainRadar Chart </h3>
            <Sixth />
          </div>
        </div>

      </div>
      </div>
    </>
  )
}
