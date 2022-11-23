import React from 'react'
import "./listing.scss"
import { BsArrowRightShort } from "react-icons/bs"
import { AiFillHeart } from "react-icons/ai"
import one from "../../../images/1.jpg"
import two from "../../../images/2.jpg"
import three from "../../../images/3.jpg"
import four from "../../../images/4.jpg"
import five from "../../../images/5.jpg"
import six from "../../../images/6.png"
import seven from "../../../images/7.png"
import eight from "../../../images/8.png"
// import nine from "../../../images/9.jpg"

const Listing = () => {
  return (
    <>
        <div className="listingSection">

          <div className="heading flex">
            <h1> My Listing </h1>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="secContainer flex">

            <div className="singleItem">
              <AiFillHeart className="icon" />
              <img src={six} alt="img" />
              <h3> Annual Vince </h3> 
            </div>
            <div className="singleItem">
              <AiFillHeart className="icon" />
              <img src={six} alt="img" />
              <h3> Coffee Plant </h3> 
            </div>
            <div className="singleItem">
              <AiFillHeart className="icon" />
              <img src={six} alt="img" />
              <h3> Button Fern </h3> 
            </div>
            <div className="singleItem">
              <AiFillHeart className="icon" />
              <img src={six} alt="img" />
              <h3> Spider Plant </h3> 
            </div>

          </div>

          <div className='sellers flex'>

            <div className='topSellers'>

              <div className='heading flex'>
                <h3> Top Sellers </h3>
                <button className="btn flex">
                 See All <BsArrowRightShort className="icon" />
                </button>
              </div>

              <div className='card flex'>
                <div className='users'>
                  <img src={one} alt='img' />
                  <img src={two} alt='img' />
                  <img src={three} alt='img' />
                  <img src={four} alt='img' />
                </div>
                <div className='cardText'>
                  <span>
                    14.556 Plant sold <br/>
                    <small> 21 Sellers <span className='date'>7 Days</span> </small>
                  </span>
                </div>
              </div>
            </div>

            <div className='featuredSellers'>

              <div className='heading flex'>
                <h3> Featured Sellers </h3>
                <button className="btn flex">
                 See All <BsArrowRightShort className="icon" />
                </button>
              </div>

              <div className='card flex'>
                <div className='users'>
                  <img src={five} alt='img' />
                  <img src={three} alt='img' />
                  <img src={one} alt='img' />
                  <img src={two} alt='img' />
                </div>
                <div className='cardText'>
                  <span>
                    28,556 Plant sold <br/>
                    <small> 26 Sellers <span className='date'>31 Days</span> </small>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
    </>
  )
}

export default Listing