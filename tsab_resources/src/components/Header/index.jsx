import React, { useRef } from 'react';
import './Header.css';
import { hero_image, infras, infras2, storage_tank_base, logo  } from '../../assets';
import { Link } from 'react-scroll';
import Achievement from '../Achievement';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import BackgroundSlider from './BackgroundSlider';


const Header = () => {
  const container = useRef(null);
  const sliderImages = [infras, infras2, storage_tank_base]; 
  
  useGSAP(()=>{
    const timeline = gsap.timeline({delay:1, stagger:1});
    timeline
    .fromTo(
      ".image_container",
      {scale:.5, opacity:0, y:150},
      {scale:1, ease:'sine.in', opacity:1, y:0}
    )
   
    .from(
      ".description",
      {opacity:0, y:-30}
    )
    .from(
      ".buttons_container",
      {opacity:0, y:40}
    )
  })
  return (
    <header id="header" ref={container}>
      <div className="container full_height">
        <BackgroundSlider images={sliderImages} className="custom-slider" />
        <div className="row">
          {/* Left Column - Text */}
          <div className="column">
            <h1 className="title">
              Shaping Visions, <span className="g-text">Building Legacies</span>
            </h1>
            
            
            <p className="text_muted description">
              At TSAB, we transform your visions into tangible masterpieces. 
              With years of experience and a team of skilled professionals, 
              we deliver high-quality construction solutions tailored to meet 
              the unique needs of every client.
            </p>
            <div className="buttons_container">
              <Link to="services" smooth={true} className="btn">
                Our Services
              </Link>
               <Link to="contact" smooth={true} className="btn btn_primary">
                Contact Us
              </Link>
              
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="column">
      
            <div className="image_container">
              <img src={logo} alt="Hero" />
            </div>
          </div>
        </div>
        
      </div>
      <Achievement/>
      
    </header>
  );
};

export default Header;
