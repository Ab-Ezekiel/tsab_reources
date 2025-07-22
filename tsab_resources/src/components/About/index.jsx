import React, { useRef } from 'react'
import "./About.css"
import { about_image, building_1, building_2, building_3, infras, infras2, mgt, mgt1 } from "../../assets"
import { FaCheck } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const About = () => {

  const container = useRef(null) 
  useGSAP(()=>{
    const timeline = gsap.timeline({
      delay:.5,
      scrollTrigger:{
        trigger:container.current,
        start:"20% bottom",
        end:"bottom top",
      },
    });
    timeline
    .from(
      ".company_photo",
      {x:-50, opacity:0}
    )
    .from(
      ".g-text",
      {y:50, opacity:0}
    )
    .from(
      ".sub_title",
      {y:50, opacity:0}
    )
    .from(
      ".box",
      {x:50, opacity:0, stagger:.5}
    )
    .from(
      ".para ",
      {y:50, opacity:0}
    )
    .from(
      ".group",
      {y:50, opacity:0}
    )
    .from(
      ".buttons_container",
      {y:50, opacity:0}
    )
  },{scope:container})

  return (
    <section id='about' ref={container}>
      <div className="container">
        <div className="column company_photo">
          <img src={mgt} alt="Mitsab" />
        </div>
        <div className="column">
          <h1 className='title'>
            <span className='g-text'>About Us</span>
          </h1>
          <h3 className='sub_title'>Where Vision Meets Unwavering Focus</h3>
          <div className="company_media_container">
            <div className="box">
              <img src={mgt1} alt="" />
            </div>
            <div className="box">
              <img src={infras} alt="" />
            </div>
            <div className="box">
              <img src={infras2} alt="" />
            </div>
          </div>
          <div className="para">
            <p className="text_muted description">
              T-SAB RESOURCES is a dynamic subsidiary of MITSAB RESOURCES GLOBAL LIMITED, specializing in oil and gas 
              services with a focus on technical innovation, safety, and operational excellence. With a commitment to 
              driving sustainable energy solutions, T-SAB delivers expertise in exploration support, equipment supply, 
              pipeline services, and facility maintenance, tailored to meet the evolving needs of Nigeria’s energy sector.
            </p>
            <p className="text_muted description">
              Leveraging the strong foundation and strategic direction of its parent company, T-SAB has cultivated a 
              reputation for quality, reliability, and integrity. Through a skilled workforce and technology-driven 
              processes, the company continues to support critical oil and gas operations while upholding industry 
              standards and contributing to national development.
            </p>
          </div>
          <div className="group" >
            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text_muted">Consultation</p>
                <h3>Free</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text_muted">Expert</p>
                <h3>Engineers</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text_muted">Customer</p>
                <h3>Support</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text_muted">Quality</p>
                <h3>Service</h3>
              </div>
            </div>
          </div>
          <div className="buttons_container">
            <Link to="project" smooth={true} className="btn">Explore</Link>
            <Link to="contact" smooth={true} className="btn btn_primary">Get a qoute</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
