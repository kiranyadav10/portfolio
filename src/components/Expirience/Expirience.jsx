import React from 'react'
import './Expirience.css';
import {BsPatchCheckFill} from "react-icons/bs"

const Expirience = () => {
  const FrontEnd = [
    {
      name :"HTML",
      exp:"Intermediate"
    },
    {
      name :"CSS",
      exp:"Intermediate"
    },
    {
      name :"React.JS",
      exp:"Intermediate"
    },
    {
      name :"Tailwind CSS",
      exp:"Intermediate"
    },
    {
      name :"TypeScript",
      exp:"Beginner"
    },
    {
      name :"JavaScript",
      exp:"Beginner"
    },
    {
      name :"Redux Saga",
      exp:"Beginner"
    }
  ]

  const Design = [
    {
      name :"WordPress",
      exp:"Experienced"
    },
    {
      name :"Avada Builder",
      exp:"Intermediate"
    },
    {
      name :"Elementor",
      exp:"Intermediate"
    },
    {
      name :"Elementor Pro",
      exp:"Beginner"
    },
    {
      name :"DIVI",
      exp:"Beginner"
    },
    {
      name :"Figma",
      exp:"Beginner"
    },
    {
      name :"Canva",
      exp:"Intermediate"
    }
  ]
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {FrontEnd.map((data,id) => (
               <article className="experienece__details" key={id}>
               <BsPatchCheckFill className="experienece__details-icons"/>
               <div>
               <h4>{data?.name}</h4>
                <small className='text-light'>{data?.exp}</small>
               </div>
             </article>
            ))}
          </div>
        </div>
 

        <div className="experience__designing">
        <h3>Experience In Designing </h3>
          <div className="experience__content">
          {Design.map((data,id) => (
          <article className="experienece__details" key={id}>
              <BsPatchCheckFill className="experienece__details-icons"/>
              <div>
                 <h4>{data?.name}</h4>
                 <small className='text-light'>{data.exp}</small>
              </div>
          </article>
          ))}
           

          
          </div>

        </div>
      </div>
  
    </section>
  )
}

export default Expirience