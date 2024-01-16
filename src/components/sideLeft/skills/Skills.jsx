import React from 'react'
import cl from './Skills.module.css'

const skills = [
    { stack: "HTML5/CSS3/SCSS", count: '8/10' ,width :"80%" },
    { stack: "BOOTSTRAP5/TAILWIND", count: '7/10' ,width :"70%" },
    { stack: "JS/REACT/VUE 3", count: '5/10' ,width :"50%" },
    { stack: "SWIPER/SLICK SLIDER", count: '6/10' ,width :"60%" },
  ]
  
export default function Skills() {
  return (
    <div className={cl.Skills}>
    <h3 className={cl.title}>skills</h3>
    {skills.map((el, index) => (
      <ul key={index}>
        <li>
          <h4><span>{el.stack} </span><span>{el.count}</span></h4>
          <span className={cl.percent}>
        <div style={{width: el.width}}></div>
          </span>
        </li>
      </ul>
    ))}
  </div>
  )
}
