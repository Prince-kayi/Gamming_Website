import React from 'react'
import{FaBars,FaBell,FaUser} from "react-icons/fa"

const Home = () => {
  return (
    <div className='homei'>
       <div className='box'>
     <div className='card'>
       <FaBars className='ar'/>
       <h5>Playstation 5</h5>
       <div className='para'>
       <img src="https://assets-prd.ignimgs.com/2022/08/25/ps5-1-blogroll-1661413103564.jpeg" 
          className='images' alt='PS5'/>
 <p className='middle'>
   <a className='butto' href='#'>Read More</a>
 </p>
       </div>
     </div>
   <div className='card'>
       <FaUser className='us'/>
       <h5>Playstation 4</h5>
       <div className='para'>
       <img src="https://cdn.mos.cms.futurecdn.net/5b44d4908a632806d6304b2480d1a3b0-1200-80.jpg" 
          className='images' alt='PS4'/>
 <p className='middle'>
   <a className='butto' href='#'>Read More</a>
 </p>
       </div>
     </div>
     <div className='card'>
       <FaBell className='bel'/>
       <h5>Xbox 1</h5>
       <div className='para'>
       <img src="https://www.digitaltrends.com/wp-content/uploads/2020/04/xbox-one-x-review-controller-in-front-system.jpg?fit=720%2C448&p=1" 
          className='images' alt='Xbox 1'/>
 <p className='middle'>
   <a className='butto'  href='#'>Read More</a>
 </p>
     </div> 
     </div>  
  </div>
  <div className='box'>
     <div className='card'>
       <FaBars className='ar'/>
       <h5>Xbox S</h5>
       <div className='para'>
       <img src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/10/Xbox-Series-S-34-scaled-e1603883732720-1024x682.jpg" 
          className='images' alt='Xbox S'/>
 <p className='middle'>
   <a className='butto' href='#'>Read More</a>
 </p>
       </div>
     </div>
   <div className='card'>
       <FaUser className='us'/>
       <h5> Nintendo </h5>
       <div className='para'>
       <img src="https://assets-prd.ignimgs.com/2022/06/09/nintendo-switch-accessories-2-1654810988577.jpg" 
          className='images' alt='nintendo'/>
 <p className='middle'>
   <a className='butto' href='#'>Read More</a>
 </p>
       </div>
     </div>
     <div className='card'>
       <FaBell className='bel'/>
       <h5>Pc</h5>
       <div className='para'>
       <img src="https://img.mensxp.com/media/content/2018/Jun/how-to-build-an-amazing-gaming-pc-under-rs-80-0001400-1529482159.jpg?w=820&h=540&cc=1" 
          className='images' alt='PC'/>
 <p className='middle'>
   <a className='butto'  href='#'>Read More</a>
 </p>
       </div>
     </div>
     </div>
    </div>
  )
}

export default Home
