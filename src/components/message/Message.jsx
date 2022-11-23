import React from 'react'
import "./message.scss"
import one from "../../images/1.jpg"
import two from "../../images/2.jpg"
import three from "../../images/3.jpg"
import four from "../../images/4.jpg"

export default function Message() {
    return (
        <>
            <div className='message'>
                <div className='head'>
                    <h2> Message </h2>
                    <p> View all </p>
                </div>

                <div className='message__content'>

                    <div className='left'>
                        <div className='img'>
                            <img src={one} alt='img' />
                        </div>
                        <div>
                            <h4> Leonard </h4>
                            <p> Well. it seems to be working now </p>
                        </div>
                    </div>
                    
                    <div className='rights__content'>
                        <p> 5 minutes ago </p>
                    </div>

                </div>

                <hr />

                <div className='message__content'>

                    <div className='left'>
                        <div className='img'>
                            <img src={two} alt='img' />
                        </div>
                        <div>
                            <h4> Ethel Kelly </h4>
                            <p> Please review the tickets </p>
                        </div>
                    </div>

                    <div className='rights__content'>
                        <p> 2 Hours ago </p>
                    </div>

                </div>

                <hr />

                <div className='message__content'>

                    <div className='left'>
                        <div className='img'>
                            <img src={three} alt='img' />
                        </div>
                        <div>
                            <h4> Herman May </h4>
                            <p> Thanks a lot. it was easy to fix it. </p>
                        </div>
                    </div>

                    <div className='rights__content'>
                        <p> 4 Hours ago </p>
                    </div>

                </div>

                <hr />

                <div className='message__content'>

                    <div className='left'>
                        <div className='img'>
                            <img src={four} alt='img' />
                        </div>
                        <div>
                            <h4> Luella Mills </h4>
                            <p> Well. it seems to be working now </p>
                        </div>
                    </div>

                    <div className='rights__content'>
                        <p> 10 minutes ago </p>
                    </div>

                </div>

            </div>
        </>
    )
}
