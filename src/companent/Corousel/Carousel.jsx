import React from 'react'
import "./cosousel.css";
import img1 from "../images/img1.jfif";
import img2 from "../images/img2.webp";
import img3 from "../images/img3.webp";
import img4 from "../images/img4.webp";
import img5 from "../images/img5.jfif";
export default function Carousel() {
  return (
    <div class='carousel'>
        <div class="swiffy-slider slider-item-ratio slider-item-ratio-16x9 slider-nav-animation slider-nav-animation-fadein slider-item-first-visible" id="swiffy-animation">
    <ul class="slider-container" id="container1">
        <li id="slide1" class="slide-visible"><img src={img1} alt="..." loading="lazy"/></li>
        <li id="slide2"><img src={img2} alt="..." loading="lazy"/></li>
        <li id="slide3"><img src={img3} alt="..." loading="lazy"/></li>
        <li id="slide4"><img src={img4} alt="..." loading="lazy"/></li>
        <li id="slide5"><img src={img5} alt="..." loading="lazy"/></li>
        <li id="slide6"><img src={img1} alt="..." loading="lazy"/></li>
    </ul>

    <button type="button" class="slider-nav" aria-label="Go to previous"></button>
    <button type="button" class="slider-nav slider-nav-next" aria-label="Go to next"></button>

    <div class="slider-indicators">
        <button aria-label="Go to slide" class="active"></button>
        <button aria-label="Go to slide"></button>
        <button aria-label="Go to slide"></button>
        <button aria-label="Go to slide"></button>
        <button aria-label="Go to slide"></button>
        <button aria-label="Go to slide"></button>
    </div>
</div>

    </div>
  )
}
