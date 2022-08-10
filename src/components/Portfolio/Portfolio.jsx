import React from 'react';
import mtechZilla from "../../assests/mtechZilla.png";
import leosquad from "../../assests/leosquad.png";
import dadar from "../../assests/dadar.png";
import gram from "../../assests/gram.png";
import sjsm from "../../assests/sjsm.png";
import pharma from "../../assests/pharma.png";
import infra from "../../assests/infra.png";
import esatara from "../../assests/esatara.png";
import manmar from "../../assests/manmar.png";
import "./Portfolio.css"

const Portfolio = () => {
 const porfolio = [
  {
    id:1,
    Title:"Working on this Web app used in civil Industries",
    src:infra,
    git:"https://github.com/kiranyadav10",
    demo:"http://qa.infraplan.co.in/",
  },
  { 
    id:2,
    Title:"MtechZilla Company Portfolio Website Using React.JS",
    src:mtechZilla,
    git:"https://github.com/kiranyadav10",
    demo:"https://mtechzilla.com/",
  },
  {
    id:3,
    Title:"E-Commerce Website Using Wordpress",
    src:leosquad,
    git:"https://github.com/kiranyadav10",
    demo:"https://leosquad.in/",
  },
  {
    id:4,
    Title:"E-commerce website of manmar industries Using WordPress",
    src:manmar,
    git:"https://github.com/kiranyadav10",
    demo:"https://manmarindustries.com/",
   
  },
  {
    id:5,
    Title:"News Portal of esatara news Using WordPress",
    src:esatara,
    git:"https://github.com/kiranyadav10",
    demo:"https://esataranews.com/",
  }, 
  {
    id:6,
    Title:"Social work portfolio website Using Wordpress",
    src:sjsm,
    git:"https://github.com/kiranyadav10",
    demo:"https://sjsmsatara.org/",
  },
  {
    id:7,
    Title:"Portfolio website of Pharmacy collage Using Elementor",
    src:pharma,
    git:"https://github.com/kiranyadav10",
    demo:"http://sespharmacy.in/",
  },
  {
    id:7,
    Title:"Social work portfolio website Using Wordpress",
    src:gram,
    git:"https://github.com/kiranyadav10",
    demo:"https://gramparivartanorg.in/",
  },
  {
    id:7,
    Title:"This is portfolio Website Using Avada Builder",
    src:dadar,
    git:"https://github.com/kiranyadav10",
    demo:"https://dadarsanskarvarga.com/",
  }

 ]

  return (
    <section id='portfolio'>
      <h5>My Recentt Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {porfolio.map((data,id)=>(
        <article className='portfolio__item' key={id}>

          <div className="portfolio__item-image">
               <img src={data.src} alt="mtechZilla"  />
          </div>

          <h3>{data.Title}</h3>
           <div className="portfolio__item-cta">
             <a href={data.git} className='btn' target='_blank'>Github</a>
             <a href={data.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>

        ))}
      </div>
    </section>
  )
}

export default Portfolio