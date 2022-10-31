import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import React from "react";


import './App.css';
import Login from "./Login";
import Signup from "./Signup";
import Exchange from "./Exchange";

// import login from "./Login";
// import signup from "./Signup";
// import exchange from "./Exchange";

function App() {
  return (
    <div>
       {/* <Login/> */}
      
    
   <Router>
    <Routes>
      <Route path="/login" element={<Login/>}/> 
      {/* <Route path="/login" element={Login}/>  */}
      <Route path="/signup" element={<Signup/>}/> 
      {/* <Route path="/" element={Exchange}/>  */}
    </Routes>
    
    </Router>  

</div>
   );
  
}

export default App;
