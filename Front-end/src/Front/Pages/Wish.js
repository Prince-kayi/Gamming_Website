import React from 'react'

const Wish = () => {
  return (
    <div className='hearts'>
      <h1>What is your wish  ??</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <textarea name="description"
                  className="texa" 
                  placeholder=" make a wish">
                  </textarea>
                               
                               <br/>
                               <br/>
              <div className="submit-button">
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="submit">Send</button>
                  </div>
    </div>
    
  )
}

export default Wish
