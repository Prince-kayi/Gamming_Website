import React from 'react'

const Product = () => {
  return (
    <div className='product'>
      <div className='main'>
        <div className='login-box'>
          <h2>Login</h2>
          <form>
            <div className='user-box'>
             <input type="text" name=''/>
             <label>Username</label>
            </div>
            <div className='user-box'>
            <input type="password" name="pass"/>
            <label>Password</label>
            </div>
            <a href='#'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              LogIn
            </a>
          </form>
        </div>

      </div>
      
    </div>
  )
}

export default Product
