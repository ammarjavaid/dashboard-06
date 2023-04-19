import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar selection/Sidebar'
import Top from '../../components/body selection/top selection/Top'
import Cards from './Cards';
import "./projects.scss"
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase';

const Orders = () => {

    const [open, setOpen] = useState(false);
    const [projects, setProjects] = useState([]);

    const handle = () => {
        setOpen(!open)
    }


    const getCollectionRef = collection(db, "AddProjects");

    useEffect(() => {
  
      const unsubscribe = onSnapshot(getCollectionRef, snapshot => (
        setProjects(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      ))
      return () => {
        unsubscribe();
      }
    }, []);


    return (
        <>
            <Sidebar open={open} setOpen={setOpen} handle={handle} />
            <div className='container'>
                <Top open={open} setOpen={setOpen} handle={handle} />
                <div className='projects'>
                    <div className='projects__card'>
                        <h2> Project Lists </h2>
                        <div className='card__content'>
                            {
                                projects.map((curElm) => {
                                    return(
                                        <>
                                            <Cards title={curElm.title} imageLink={curElm.imageLink} videoLink={curElm.videoLink} description={curElm.description} id={curElm.id}/>
                                        </>
                                    )
                                })
                            }
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders