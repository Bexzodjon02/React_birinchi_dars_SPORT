import React from 'react'
import  ".//navbar.css";
export default function Navbar() {
  return (
    <div className='container'>
    <nav className='nav'>
        <div className = "logo">
            <h1>Sport</h1>
        </div>
        
        <ul className='menu'>
            <li><a href='#'>ASOSIY</a></li>
            <li><a href='#'>DASTUR</a></li>
            <li><a href='#'>NATIJALAR</a></li>
            <li><a href='#'>KONTAKT</a></li>
        </ul>
        
        <div><button className='btn1'>Buyurtma</button></div>
        
    </nav>
    </div>
  )
}
