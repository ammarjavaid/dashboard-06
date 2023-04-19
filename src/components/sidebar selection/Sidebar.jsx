import React, { memo } from 'react'
import "./sidebar.scss"
import { MdOutlineSpeed } from 'react-icons/md';
import { MdDeliveryDining } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png" 

const Sidebar = ({open, handle}) => {

    console.log("Sidebar Render.....!")

  return (
    <>
        <div className={`sideBAr ${ open ? "sidebarOpen" : "" }`}>
            <div className='logoDiv flex'>
            <img src={logo} alt='' />
                <h2> Admin Panel </h2>
            </div>

            <div className='menuDiv'>
                <h3 className='divTitle'>
                    QUICK MENU
                </h3>
                <ul className='menuLists grid'>

                    <li className='listItem' onClick={handle}>
                        <Link to='/' className='menuLink flex'>
                            <MdOutlineSpeed className='icon'/>
                            <span className='smallText'> Dashboard </span>
                        </Link>
                    </li>

                    <li className='listItem' onClick={handle}>
                        <Link to='/all-projects' className='menuLink flex'>
                            <MdDeliveryDining className='icon'/>
                            <span className='smallText'> My Projects </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default memo(Sidebar)