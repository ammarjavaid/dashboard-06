import React, { memo } from 'react'
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from "../../Firebase"

const Cards = ({ title, imageLink, videoLink, description, id }) => {


    const deletepost = (id)=>{
        const delCollectionRef = doc(db, "AddProjects", id);
        deleteDoc(delCollectionRef);
        alert("Deleted Successfull...!")
      }


  return (
    <>
        <div className='card'>
            <div className='img'>
                <img src={imageLink} alt='' />
            </div>
            <div className='body'>
                <h4> {title} </h4>
                <p> {description} </p>
            </div>
            <div className='foot'>
                <button> Live Demo </button>
                <button style={{ marginLeft: "10px", backgroundColor: "red" }} onClick={() => deletepost(id)}> Delete </button>
            </div>
        </div>
    </>
  )
}

export default memo(Cards)