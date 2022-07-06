import React from 'react'
import  "./header.css";
import banner from "../images/banner-top-2 1.png";
import gantel from "../images/Group 10.png";


export default function Header_1() {
  return (
    <header>
    <section className='header'>
        <div className='titles'>
            <p>автораская программа стройного тела</p>
            <h1>SPORT OLAMIGA <br/> MARHABO <span>56</span> </h1>
            <p>Наши профессиональные фитнес-тренеры и <br/> диетологи приведут тебя к стройной,<br/>здоровой и счастливой жизни. </p>
            <button className='btn2'>уЗНАТЬ БОЛЬШЕ</button>
            
        </div>
        <div className='images'>
            <img  src= {banner} alt="" />
        </div>
    </section>
    
    <div className='carts'>
        <div className='card'>
            <img src={gantel} alt="" />
            <p className='p2'>DFGH</p>
            <p>Первые результаты уже <br/> после первых недель</p>
        </div>
        <div className='card'>
            <img src={gantel} alt="" />
            <p className='p2'>DFGH</p>
            <p>Первые результаты уже <br/> после первых недель</p>
        </div>
        <div className='card'>
            <img src={gantel} alt="" />
            <p className='p2'>DFGH</p>
            <p>Первые результаты уже <br/> после первых недель</p>
        </div>
        <div className='card'>
            <img src={gantel} alt="" />
            <p className='p2'>DFGH</p>
            <p>Первые результаты уже <br/> после первых недель</p>
        </div>
    </div>
    
    </header>
    
    
  )
}
