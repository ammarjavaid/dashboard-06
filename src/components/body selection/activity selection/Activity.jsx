import React from 'react'
import "./activity.scss"
import { BsArrowRightShort } from "react-icons/bs"
import one from "../../../images/1.jpg"
import two from "../../../images/2.jpg"
import three from "../../../images/3.jpg"
import four from "../../../images/4.jpg"
import five from "../../../images/5.jpg"

const Activity = () => {
  return (
    <>
        <div className="activitySection">

          <div className="heading flex">
            <h1> Resent Activity </h1>
            <button className='btn flex'>
              See All
              <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className='seeContainer grid'>

            <div className='singleCustomer flex'>
              <img src={one} alt='img' />
              <div className='customerDetails'>
                <span className='name'> Ammar Javaid </span>
                <small> Ordered a new plant </small>
              </div>
              <div className='duration'>
                2 min ago
              </div>
            </div>

            <div className='singleCustomer flex'>
              <img src={two} alt='img' />
              <div className='customerDetails'>
                <span className='name'> Usama Sultan </span>
                <small> Ordered a new plant </small>
              </div>
              <div className='duration'>
                2 min ago
              </div>
            </div>

            <div className='singleCustomer flex'>
              <img src={three} alt='img' />
              <div className='customerDetails'>
                <span className='name'> Hassan Younas </span>
                <small> Ordered a new plant </small>
              </div>
              <div className='duration'>
                2 min ago
              </div>
            </div>

            <div className='singleCustomer flex'>
              <img src={four} alt='img' />
              <div className='customerDetails'>
                <span className='name'> Abdullah Sultan </span>
                <small> Ordered a new plant </small>
              </div>
              <div className='duration'>
                2 min ago
              </div>
            </div>

            <div className='singleCustomer flex'>
              <img src={five} alt='img' />
              <div className='customerDetails'>
                <span className='name'> Moshin Raza </span>
                <small> Ordered a new plant </small>
              </div>
              <div className='duration'>
                2 min ago
              </div>
            </div>

          </div>
        </div>
    </>
  )
}

export default Activity