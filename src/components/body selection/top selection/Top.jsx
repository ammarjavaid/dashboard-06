import React, { memo } from 'react'
import "./top.scss"
import { BiSearchAlt } from "react-icons/bi"
import admin from "../../../images/Ammar4.jpg"
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

const Top = ({ open, setOpen, handle }) => {

  console.log("Top Render.....!")

  return (
    <>
      <div className="topSection">
        <div className='headerSection flex'>
          <div className='title'>
            <h1> Welcome to Personal Dashboard. </h1>
            <p> Hello Ammar Javaid, Welcome back! </p>
          </div>

          <div className="wrapper">

            <div className='searchBar flex'>
              <input type="text" placeholder='Search here...' />
              <BiSearchAlt className="icon" />
            </div>

            <div className='adminDiv flex'>
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

export default memo(Top)