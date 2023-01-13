import React, { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios"
import "../bottom/login.css"
const Sign_In = () => {
   const [Loginform, setLForm] = useState({
      username: " ",
      password: " "
   })
   const [error,setErrors]=useState({
      username: " ",
      password: " "
   })
   const[successMsg,setMsg]=useState("");
   const Changer = (e) => {
      const Newdata = { ...Loginform }
      Newdata[e.target.name] = e.target.value
      setLForm(Newdata)
   }
   const Submit = (e) => {
      e.preventDefault();
      
   }
   const getOutcome = () => {
      console.log("LoginForm", Loginform)
     const signed=({
      username:Loginform.username,
    password:Loginform.password
      })
      axios.post(" http://localhost:1000/appi/login",signed)
      .then(res=>(res.data))
      setLForm({
        username: " ",
       password: " "
     })
   }
   return (
      <>
       {successMsg ?(
      <div className='logged-in'>
       <h1>You have successfully Logged In</h1>
       <br/>
       <div className="logn">
         <div className="logn-wrap">
          <h5>Welcome to Game World</h5>
         </div>
       </div>
         <p>
         <Link to="/">Logout</Link>
       </p>
      </div>
     ):(
      <div className="outer">
      <div className="login-class">
         <div className="login-container">
            <form className="login-form" onSubmit={Submit}>
               <h1 className="title"> Login</h1>
               <label>Username: </label>
                  <div>
                     <input type="text" 
                     name="username" 
                     onChange={Changer} 
                     value={Loginform.username} 
                     className="ad" />
                {!!error.username&&<div className="error-msg">{error.username}</div>}
                  </div> 
               <label> Password: </label>
             <a href="/forgotPass" className="fogot">Forgot password?</a>
              <div >  
                  <input type="password" 
                  name="password" 
                  onChange={Changer} 
                  value={Loginform.password}
                   className="ad" />
                  {!!error.password &&<div className="error-msg">{error.password}</div>}
               </div>
               <div className="login-submit-botton">
                  <button className="submit" onClick={getOutcome}> Login</button>
                  <p>Not yet a member? <a href="/regi"> Sign Up</a></p>
               </div>
            </form>
         </div>
      </div>
      </div>
     )
}
      </>
   ) 
}
export default Sign_In