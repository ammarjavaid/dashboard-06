import { createSlice } from '@reduxjs/toolkit'
// import { db } from '../../Firebase'
// import { collection, addDoc } from 'firebase/firestore';

// const myCollectionRef = db.collection("AllProjects")

//   const projectCollRef = collection(db, 'AddProjects')

const initialState = {
  title: "",
  imageLink: "",
  videoLink: "",
  description: ""
}

export const counterSlice = createSlice({
  name: 'slices',
  initialState,
  reducers: {
    // create: (state, action) => {
    //     // const check = addDoc(projectCollRef, { title: title, imageLink: imageLink, videoLink: videoLink, description: description })
    //     projectCollRef.addDoc(action.payload).then(res => {
    //         console.log( "record added" ,res)
    //     })
    // }
    addUser: (state, action) => {
        state.push(action.payload);
    },
  },
})

export const { addUser } = counterSlice.actions

export default counterSlice.reducer