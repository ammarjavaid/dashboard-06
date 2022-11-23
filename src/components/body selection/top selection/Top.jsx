import React from 'react'
import "./top.scss"
import { BiSearchAlt } from "react-icons/bi"
import { TbMessageCircle } from "react-icons/tb"
import { IoNotificationsOutline } from "react-icons/io5"
import admin from "../../../images/admin.jpg"
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

const Top = ({ open, setOpen, handle }) => {

  return (
    <>
      <div className="topSection">
        <div className='headerSection flex'>
          <div className='title'>
            <h1> Welcome to Corona Dashboard. </h1>
            <p> Hello AmmarTech, Welcome back! </p>
          </div>

          <div className="wrapper">

            <div className='searchBar flex'>
              <input type="text" placeholder='Search here...' />
              <BiSearchAlt className="icon" />
            </div>

            <div className='adminDiv flex'>
              <TbMessageCircle className="icon"/>
              <IoNotificationsOutline className="icon" />
              {open ? <IoMdClose onClick={handle} className="bars" /> : <AiOutlineMenu onClick={handle} className="bars" />}
              <div className='adminImage'>
                <img src={admin} alt='img' />
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Top