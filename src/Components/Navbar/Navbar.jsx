import React from 'react'
// import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <div className="n-wrapper">   
    <div className="n-left">
        <div className="n-name">User Info</div>
        {/* <Toggle/> */}
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType:"none"}}>
                <li>Home</li>
                <li>services</li>
                <li>Contact Us</li>
                
            </ul>
        </div>
        
        <div className="button">
             <button className='btn n-button'>LogIn</button>
            <button className='btn n-button'>SignUp</button>
        </div>
       
        
            
        
    </div>
   </div>
  )
}

export default Navbar
