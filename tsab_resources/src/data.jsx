import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram,FaDrawPolygon, FaTools } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { SiBlueprint,SiHomeassistantcommunitystore  } from "react-icons/si";
import { RiWaterFlashFill } from "react-icons/ri";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { MdLandscape } from "react-icons/md";

import { profile2, profile3,profile4,profile5,
         member1, member2, member3, member4,building_5,building_6,
         building_7, building_8,building_9,building_10,rusal_logo, nepn_logo, frontier_logo, oando_logo, alscon_logo,
        blog_1,blog_2,blog_3, borehole_image, home_image2, infras, infras2, soak_away_pit2, building_res} from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    
    {name:"Project",id:'project'},
    {name:"Team",id:'team'},
    {name:"Testimonial",id:'testimonial'},
    {name:"Blog",id:'blog'},
];

export const services = [
  {
    name:"General Contracting",
    icon:<SiBlueprint/>,
    description:`This involves overseeing the entire construction project from start to finish, 
        including hiring subcontractors, managing the budget, scheduling, and ensuring that the
        project meets all specifications and regulations.`,
  },
  {
    name:"Minor Civil Maintainance",
    icon:<FaDrawPolygon/>,
    description:`Mitsab Resources specializes in providing tailored solutions for various 
        infrastructure maintenance needs, including road repairs and sidewalk maintenanc

    `,
  },
 
  {
    name:"Borehole Drilling Services",
    icon:<RiWaterFlashFill/>,
    description:`Before construction begins, companies often handle site preparation tasks such 
        as land clearing, excavation, grading, and utility installation to ensure the site is ready 
        for building.`,
  },
  {
    name:"Renovation and Remodeling",
    icon:<SiHomeassistantcommunitystore/>,
    description:`Many construction companies specialize in renovation and remodeling services, 
                which involve updating and improving existing structures. This can range from minor 
                repairs to major overhauls of residential, commercial, or industrial properties.`,
  },
  {
    name:"Earthwork Landscaping",
    icon:<MdLandscape/>,
    description:`This involves grading, excavation, and designing functional yet 
        aesthetically pleasing outdoor spaces. It balances practical land development with artistic 
        landscaping, creating environments that harmonize with surrounding architecture and nature.`,
  },
  {
    name: "Welding & Fabrication Services",
    icon: <FaTools />,
    description: `We provide expert welding and metal fabrication services for structural steel, 
    piping, supports, and other custom metal works, ensuring durability, precision, and adherence to safety standards.`,
  },
]

export const teams = [
  {
    name:"Oluoma James",
    title:"Technician",
    profile:member1,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Mary Brown",
    title:"Technician",
    profile:member2,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Lawrence Onu",
    title:"Technician",
    profile:member3,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Joy Eze",
    title:"Technician",
    profile:member4,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
]

export const projects = [
  {
    title:"Enhancing Safety Infrastructure at FUN CTF, Ibeno LGA, Akwa Ibom State",
    image:infras2,
    description:`Mitsab Resources Global Ltd, through its subsidiary T-SAB Resources, is proud to showcase another impactful project undertaken for Frontier Oil Limited at FUN CTF, Ibeno LGA, Akwa Ibom State. This project involved the construction 
    of a bund wall around the Diesel Tank Shelter and the meticulous concreting of the base floor, illustrating Mitsab Resources Global Ltd’s unwavering commitment to safety and infrastructure excellence.`,
  },
  {
     title:"Enhancing Healthcare Infrastructure: T-SAB Resources a Subsidiary of MITSAB Reasources Global Constructs RC Water Tank Stand, Drills Borehole, and Installs Water Treatment Plant in Okoroutip, Akwa Ibom State",
    image:borehole_image,
    description:`Enhancing Healthcare Infrastructure: T-SAB Resources a Subsidiary of 
      MITSAB Reasources Global Constructs RC Water Tank Stand, Drills Borehole, and Installs Water Treatment Plant in Okoroutip, Akwa Ibom State`,
  },
  {
    title:"Enhancing Safety Infrastructure at FUN CTF, Ibeno LGA, Akwa Ibom State",
    image:infras,
    description:`Mitsab Resources Global Ltd, through its subsidiary T-SAB Resources, is proud to showcase another impactful project undertaken for Frontier Oil Limited at FUN CTF, Ibeno LGA, Akwa Ibom State. This project involved the construction 
    of a bund wall around the Diesel Tank Shelter and the meticulous concreting of the base floor, illustrating Mitsab Resources Global Ltd’s unwavering commitment to safety and infrastructure excellence.`,
  },
  {
    title:"Building Resilient Infrastructure for FUN Military Base, Ibeno LGA, Akwa Ibom State: A Triumph by T-SAB RESOURCES, a Subsidiary of MITSAB RESOURCES GLOBAL LTD",
    image:building_res,
    description:`In the realm of essential infrastructure, T-SAB RESOURCES, a proud subsidiary of MITSAB RESOURCES GLOBAL LTD, stands as a beacon of excellence. Our latest triumph involves the meticulous construction 
    of a military toilet, a reinforced concrete tank stand, and two cesspools for the esteemed FUN Military Base in Ibeno LGA, Akwa Ibom State.`,
  },
  {
    title:"A precast Concreting and Construction of a 2no Soak away Pit and Septic tank for NEPN Drilling Camp Site at Qua Iboe Field, Ibeno LGA Akwa Ibom State Nigeria",
    image:soak_away_pit2,
    description:`A precast Concreting and Construction of a 2no Soak away Pit and Septic tank for NEPN Drilling Camp Site at Qua Iboe Field, Ibeno LGA Akwa Ibom State Nigeria`,
  },
  {
   title:"Transforming Surroundings: Landscaping and Chippings Spraying at FUN CTF Area, Ibeno LGA, Akwa Ibom State by T-SAB RESOURCES, a Subsidiary of MITSAB RESOURCES GLOBAL LTD – In Collaboration with Frontier Oil Limited 2019",
    image:home_image2,
    description:`Transforming Surroundings: Landscaping and Chippings Spraying at FUN CTF Area, Ibeno LGA, Akwa Ibom State by T-SAB RESOURCES, 
      a Subsidiary of MITSAB RESOURCES GLOBAL LTD – In Collaboration with Frontier Oil Limited 2019`,
  },
];


export const testimonial = [
  {
    image:oando_logo,
    name:'OANDO',
    position: 'operations Manager',
      review:`We are thoroughly impressed with the professionalism, technical expertise, and commitment 
      demonstrated by MIREGL throughout the construction of our facility. From project planning 
      to execution, their team maintained clear communication, met every milestone, and delivered top-tier 
      quality that exceeded our expectations. The structure was completed on schedule and within budget, and we 
      couldn’t be more satisfied with the outcome. We highly recommend MIREGL for any engineering 
      construction projects where quality and reliability are a priority.`
  },
  {
    image:frontier_logo,
    name:'Frontier',
    position: 'Facilities Manager',
    review:`Working with MIREGL was a seamless experience from start to finish. Their team brought a 
    level of precision and problem-solving that made a significant difference in the success of our infrastructure upgrade. 
    They handled every challenge with professionalism and delivered a structure that is not only durable but also aligns 
    perfectly with our operational needs. We look forward to future collaborations.`
  },
  {
    image:alscon_logo,
    name:'ALSCON',
    position: 'Operations Manager',
    review:`The construction team at Mitsab Resources Global exceeded our expectations in every way. They delivered high-quality 
    results, kept us updated throughout the project, and were proactive in resolving potential issues before they became problems. 
    Their attention to detail and safety standards were commendable. Highly recommended for any serious engineering project.`
  },
  {
    image:rusal_logo,
    name:'RUSAL',
    position: 'Manager RUSAL',
    review:`We are thoroughly impressed with the professionalism, technical expertise, and commitment demonstrated 
    by MIREGL throughout the construction of our facility. From project planning to execution, their team 
    maintained clear communication, met every milestone, and delivered top-tier quality that exceeded our expectations. 
    The structure was completed on schedule and within budget, and we couldn’t be more satisfied with the outcome.
    We highly recommend MIREGL for any engineering construction projects where quality and reliability are a priority.`
  },
  {
    image:nepn_logo,
    name:'NEPN',
    position: 'HR/Admin NEPN',
    review:`The construction team at Mitsab Resources Global exceeded our expectations in every way. They delivered high-quality 
    results, kept us updated throughout the project, and were proactive in resolving potential issues before they became problems. 
    Their attention to detail and safety standards were commendable. Highly recommended for any serious engineering project.`
  },
  

];

export const blogs = [
  {
      title:"Sustainable Construction: Building for the Future",
      image:blog_1,
      category:"Building",
      content:`
        As the construction industry continues to evolve, the focus on sustainability 
        has never been more critical. Sustainable construction is not just a trend; 
        it's a necessity for our planet's future. In this blog post, we'll explore 
        the principles of sustainable construction, the benefits it offers, and how 
        our company is leading the way in eco-friendly building practices.
      `,
      date:new Date("January 10, 2024"),
      likeCount:34,
      commentCount:4,
      tags:["Edu4CommDev","CommGrowthEdu","EducateCommunities"],
      poster:{
          name:"Johnson",
      },
  },
  {
      title:"The Importance of Quality Craftsmanship in Construction",
      image:infras,
      category:"Construction",
      content:`
        Quality craftsmanship is the cornerstone of any successful construction project.
         It ensures that buildings are not only aesthetically pleasing but also durable 
         and safe. In this blog post, we'll delve into why quality craftsmanship matters 
         and how our company upholds the highest standards in every project we undertake.
      `,
      date:new Date("December 15, 2023"),
      likeCount:201,
      commentCount:123,
      tags:["Skills4Growth","EconSkillImpact","GrowWithSkills"],
      poster:{
          name:"Bissi",
      },
  },
  {
      title:"Innovative Technologies Transforming the Construction Industry",
      image: infras2,
      category:"Innovations",
      content:`
      The construction industry is undergoing a revolution, thanks to the advent of 
      innovative technologies. These advancements are making construction projects 
      more efficient, cost-effective, and sustainable. In this blog post, we'll 
      explore some of the most exciting technologies transforming the way we build 
      and how our company is leveraging them to deliver superior results.
      `,
      date:new Date("July 20, 2023"),
      likeCount:198,
      commentCount:121,
      tags:["CommEdu","CommunityEngagement","EduCommunity"],
      poster:{
          name:"Abisola",
      },
  },
  
];



export const contacts = [
 {
    name:"Email",
    value1:"mit-sabresources@outlook.com",
    value2:"info@mitsabresourcesglobal.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value1:"+2348023851800",
    value2:"+2347067912527",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value1:"REGISTERED OFFICE:89 University Road,Use Offot, Nwaniba Road, Uyo,Akwa Ibom State,Nigeria",
    value2:"OPERATIONAL OFFICE: 35 Terminal Jetty Road, Inua Eyet Ikot, Ibeno L.G.A, Akwa Ibom State,Nigeria",
    icon:<IoLocationOutline/>,
  },
]

export const footer = [
    {
      name:"Explore",
      routes:[
        { name: "Privacy Policy", id: "privacy" },
        { name: "Terms and Conditions", id: "terms" },
        { name: "Cookie Policy", id: "cookies" },
      ]
    },
    {
        name:"Section",
        routes:[
          {name:"Home",id:'header'},
          {name:"About Us",id:'about'},
          {name:"Services",id:'services'},
          
          {name:"Project",id:'project'},
          {name:"Team",id:'team'},
          {name:"Testimonial",id:'testimonial'},
          {name:"Blog",id:'blog'},
        ]
      },
]


