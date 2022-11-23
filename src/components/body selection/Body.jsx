import React from 'react'
import "./body.scss"
import Top from "../body selection/top selection/Top"
import Listing from "../body selection/listing selection/Listing"
import Activity from "../body selection/activity selection/Activity"

const Body = ({open, setOpen, handle}) => {
  return (
    <>
        <div className='mainContent'>
          {/* <Top open={open} setOpen={setOpen} handle={handle}/> */}

          <div className='bottom flex'>
            {/* <Listing /> */}
            {/* <Activity /> */}
          </div>
        </div>
    </>
  )
}

export default Body



