import React from 'react'
import plus from "../images/150 +.png";
import  "./section_2.css";

export default function section_1() {
    return (
        <section className='section1'>
            
            <section className='section1' >
            </section>
            
        <header className='section2'>
            <div className='titleH2'> Результаты нашых клиентов</div>
            <div className='cardes'>
                <div className='resalt'>
                    <img src={plus} alt="" />
                    <p>Первые результаты уже <br /> после первых недель</p>
                </div>
                <div className='resalt'>
                    <img src={plus} alt="" />
                    <p>Первые результаты уже <br /> после первых недель</p>
                </div>
                <div className='resalt'>
                    <img src={plus} alt="" />
                    <p>Первые результаты уже <br /> после первых недель</p>
                </div>
                <div className='resalt'>
                    <img src={plus} alt="" />
                    <p>Первые результаты уже <br /> после первых недель</p>
                </div>
            </div>

        </header>
        </section>
    )
}
