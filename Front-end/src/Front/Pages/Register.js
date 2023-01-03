import React, { useState } from "react";
import "../bottom/page.css"
//import axios from "axios"
const Register = () => {
   const [contForm, setLForm] = useState({
    firstName:" ",
    lastName:" ",
    email: " ",
    password: " ",
    Mnumber:" ",
    description:" ",
   })
   const [error,setErrors]=useState({
    firstName:" ",
    lastName:" ",
    email: " ",
    password: " ",
    Mnumber:" ",
    description:" ",
   })
   const[successMsg,setMsg]=useState("");
   const Changer = (e) => {
      const Newdata = { ...contForm }
      Newdata[e.target.name] = e.target.value
      setLForm(Newdata)
   }
   const Submit = (e) => {
      e.preventDefault();
      if(contForm.firstName===" " || contForm.password===""|| contForm.lastName===""|| contForm.Mnumber==""||contForm.description==""){

         setErrors((contForm)=>({
         ...contForm,
         firstName:"Please enter your first name",
         lastName:"Please enter your last name",
         email:"Please enter your email address",
         password:"Please enter  your password",
         Mnumber:"Please enter your phone number",
         description:"please tell us about yourself"
         }));
        }else{
          
         setErrors((contForm)=>({
          ...contForm,
          firstName:" ",
          lastName:" ",
          email:" ",
          password:" ",
          Mnumber:" ",
          description:" "
          }));
      }
    }
   const ShowOutcome = () => {
      console.log("contactForm", contForm)
      //const contacted={
        // email:contForm.email,
       // name:contForm.name,
       // subject:contForm.subject,
       // description:contForm.description,
       // }
        //axios.post(" http://localhost:1500/app/contact",contacted)
         // .then(res=>console.log(res.data))
         // setLForm({
       // email: " ",
        //name: " ",
        //subject: " ",
       // description:" ",
          //})
   }
   return (
      <div className="contact-outer">
      <div className="input-group">
         <div className="contact-inputs">
            <form className="input-form-group" onSubmit={Submit}>
            {successMsg &&<div className='finally'>{successMsg}</div>}
               <h1 className="title"> Sign Up</h1>
               <label>FirstName: </label>
                  <div >
                     <input type="text" name="firstName" onChange={Changer} value={contForm.firstName} className="ad" placeholder="Enter Name"/>
                {!!error.firstName&&<div className="error-msg">{error.firstName}</div>}
                  </div> 
                  <label>LastName: </label>
                  <div >
                     <input type="text" name="lastName" onChange={Changer} value={contForm.lastName} className="ad" placeholder="Enter Name"/>
                {!!error.lastName&&<div className="error-msg">{error.lastName}</div>}
                  </div> 
               <label> Email: </label>
              <div>  
                  <input type="text" name="email" onChange={Changer} value={contForm.email}  className="ad"  placeholder="Enter email" />
                  {!!error.email&&<div className="error-msg">{error.email}</div>}
               </div>
               <label> Password: </label>
              <div>  
                  <input type="text" name="password" onChange={Changer} value={contForm.password}  className="ad" placeholder=" Enter Subject"/>
                  {!!error.password &&<div className="error-msg">{error.password}</div>}
               </div>
               <div>  
                 <textarea name="description" id="description" 
                 onChange={Changer
                 }value={contForm.description}
                  className="texa" 
                  placeholder="tells us about yourself"></textarea>
                    {!!error.description &&<div className="error-msg">{error.description}</div>}
                               </div>
                               
                               <br/>
                               <br/>
               <div className="submit-button">
                  <button className="submit" onClick={ShowOutcome}>Send</button>
               </div>
            </form>
         </div>
      </div>
      </div>
   ) ;
}
export default Register