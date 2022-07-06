import React from 'react'
import  './footer.css'
import iconTel from "../images/tell.png";
import iconEmail from "../images/emai.png";
import youTube from "../icons/you.png";


export default function Footer() {
  return (
    <div>
        <h2>Есть вопросы?</h2>
        
        <div className='footer'>
        
        <div class='footer1'>
            <h4>Оставьте нам сообщение, и мы сразу свяжемся с вами!</h4>
            <ul>
                <li><input className='inp1' placeholder='Введите имя' type='text'/></li>
                <li><input className='inp1' placeholder='Введите телефон' type='number'/></li>
                <li><input className='inp1' placeholder='Введите e-mail' type='email'/></li>
                <li><input className='inp1' placeholder='Введите сообщение' type='text'/></li>
                <button>оТПРАВИТЬ СООБЩЕНИЕ</button>
            </ul>
        </div>
        <div class='footer2'>
            <h4>Как с нами связаться?</h4>
            <ul>
                <li><img src={iconEmail} alt="" /><a href='#'>shyndornadia@gmail.com</a></li>
                <br/>
                <li> <img src={iconTel} alt="" /><a href='#'>+380 99 642 - 48 - 72</a></li>
                <li><a href='#'>Fax: 123 4567890</a></li>
                <br />
                <li><a href='#'>Делитесь впечетлениями о нашем клебе и успехам с друзьями в социальных сетях</a></li>
            </ul>
            
        </div>
        <div class='footer3'>
        <h4>Как с нами связаться?</h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.975527437814!2d69.21714281538304!3d41.28763707927349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2f5a84b25f%3A0xf934f004dd798141!2sSoff%20Study%20zamonaviy%20kasblar%20markazi!5e0!3m2!1suz!2s!4v1657020714225!5m2!1suz!2s" width="300" height="320" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
        </div>
  )
}
