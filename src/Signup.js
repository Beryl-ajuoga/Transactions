import React from "react";
import './Signup.css';
import { useState } from 'react';
import {database} from './firebase';
// import {ref,push,child,update} from "firebase/database";


function Signup() {
    const[Fullname,setfullName]=useState("")
    const[email,setEmail]=useState("")
    const[phoneNumber,setphoneNumber]=useState("")
  const[password, setPassword]=useState("")

  const addDetails=()=>{
    addUser(collection (database ,"user"), {
      Fullname:Fullname,
      email:email,
      phoneNumber:phoneNumber,
      password:password




    })

  }

  const handleSubmit=()=>{

 const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.log(error)
    // ..
  });

  }

  const Signup = {
    fullName:"",
    email:"",
    phoneNumber:"",
    password:""
  }
    
  return (
    <>
     <input  type="text" placeholder="Enter your full name"value={Fullname}onChange={updateInput} />
     <input  type="text" placeholder="Enter your email" value={email}onChange={updateInput}/>
     <input  type="text" placeholder="Enter your phone number"value={phoneNumber}onChange={updateInput} />
     <input  type="password" placeholder="Enter your password" value={password} onChange={updateInput}/>
     <button onClick={handleSubmit}>Send</button>

    </>  
   
  )

}

export default Signup
