import React, { useCallback, useRef, useState } from 'react'
import "./dashboard.scss"
import Top from '../../components/body selection/top selection/Top';
import Sidebar from '../../components/sidebar selection/Sidebar';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Firebase';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

  const [open, setOpen] = useState(false);

  // const [title, setTitle] = useState();
  // const [imageLink, setImageLink] = useState();
  // const [videoLink, setVideoLink] = useState();
  // const [description, setDescription] = useState();


//   const handleSubmit = useCallback( async(e) => {
//   e.preventDefault();
//     if (title === '' && imageLink === '' && videoLink === '' && description === '') {
//       return
//     }
//     const check = await addDoc(projectCollRef, { title: title, imageLink: imageLink, videoLink: videoLink, description: description })
//     console.log(check)  
//     setTitle('')
//     setImageLink('')
//     setVideoLink('')
//     setDescription('')
//     alert("Your Projects is Successfully added...!")
//     navigate("/all-projects")
// }, [])


  const handle = () => {
    setOpen(!open)
  }

  const navigate = useNavigate()
  const projectCollRef = collection(db, 'AddProjects')

    const titleElement = useRef();
    const imageLinkElement = useRef();
    const videoLinkElement = useRef();
    const descriptionElement = useRef();

    const handleSubmit = useCallback( async(e) => {
        e.preventDefault();
        const check = await addDoc(projectCollRef, { title: titleElement.current.value, imageLink: imageLinkElement.current.value, videoLink:  videoLinkElement.current.value, description: descriptionElement.current.value })
        console.log(check);
        alert("Your Projects is Successfully added...!")
        navigate("/all-projects")
      });

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <div className='container'>
        <Top open={open} setOpen={setOpen} handle={handle} />
        <div className='form'>
          <div className='form__content'>
            <h1> Add my Project </h1>
            <form onSubmit={handleSubmit}>
              <p style={{ marginTop: "2rem" }}> Title </p>
              <input type="text" placeholder='Title....' ref={titleElement} />
              <p style={{ marginTop: "2rem" }}> Image Link </p>
              <input type="text" placeholder='Paste link here....' ref={imageLinkElement} />
              <p style={{ marginTop: "2rem" }}> Video Link </p>
              <input type="text" placeholder='Paste link here....' ref={videoLinkElement} />
              <p style={{ marginTop: "2rem" }}> Description </p>
              <input type="text" placeholder='Description...' ref={descriptionElement} />
              <button type='submit'> Upload Project </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
