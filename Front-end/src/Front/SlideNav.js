import React,{useState} from 'react'
import "./Slide.css"
import {Link} from 'react-router-dom'
import {FaBars,FaHome,FaTimes, FaUser,FaShoppingCart,FaHeart} from "react-icons/fa"
 const data=[
    {
        title:'Home',
        path:'/',
        icon:<FaHome/>,
        cName:'nav-text'
    },
    {
        title:'Products',
        path:'/product',
        icon:<FaHome/>,
        cName:'nav-text'
    },
    {
        title:'On Sale',
        path:'/on',
        icon:<FaHome/>,
        cName:'nav-text'
    },
    {
        title:'My Account',
        path:'/acc',
        icon:<FaHome/>,
        cName:'nav-text'
    },
    {
        title:'Help Center',
        path:'/help',
        icon:<FaHome/>,
        cName:'nav-text'
    },
    {
        title:'Cart',
        path:'/cart',
        icon:<FaShoppingCart/>,
        cName:'nav-text'
    },
    {
        title:'List',
        path:'/wish',
        icon:<FaHeart/>,
        cName:'nav-text'
    },
    ];
const SlideNav=()=>{
   const [sideBar,setsideBar]=useState(false)
   const showBar=()=>{
       setsideBar(!sideBar)
   }
return(
  <>  
<div className="navbar">
        <Link to="#" className='menu-bars'> <FaBars onClick={showBar}/></Link>
        <div className='nav-logo'>
                    <Link to="/" className='logo'>GameStation</Link>
                    <h5>com</h5>
                    </div>
        <div className='bar'>
            <div className='navbar-links'>
                <ul>
                    <li className='active'>
                        <Link to="/">Home </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/product">Products</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/on">On Sale</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/conso">Consoles</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/acc">My Account</Link>
                    </li>
                </ul>
                <ul>
                    <li className='user'>
                        <Link to="/login">Login&nbsp;&nbsp;&nbsp;<FaUser/> </Link>
                    </li>
                </ul>
            </div>
            </div>
      
</div>
<nav className={sideBar ?"nav-menu active" : "nav-menu"}>
    <ul className='nav-menu-items'onClick={showBar}>
        <li className='toggle'> 
        <Link to="#" className='menu-bar'><FaTimes /> </Link>
        </li>
   {data.map((item,index)=>{
       return(
           <li key={index} className={item.cName}>
           <Link to={item.path}>{item.icon} <span>{item.title}</span></Link>
           </li>
       )
   })}
    </ul>
    <br/>
    <br/>
    <br/>
    <div className="bottons">
     <button className="button"><FaUser/>&nbsp;Login </button>
   <Link to="/regi"><button className="button"> Register</button></Link> 
                 </div>

</nav>

</>

);
}
export default SlideNav;