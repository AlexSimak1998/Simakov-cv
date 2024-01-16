import React from 'react'
import cl from './Experience.module.css'


const edication = [
    {year:'2017 - 2021',university:'Кубанский государственный университет', science:'Программирование и информационные технологии'},
    {year:'2014 - 2017',university:'Лабинский социально-технический техникум', science:'Оператор ЭВМ'},
  ]
export default function Edication() {
  return (
    <div className={cl.Edication}>
    <h3 className={cl.title}>Education</h3>
    {edication.map((el, index) => (
      <ul key={index}>
        <li>
          <h5>{el.year}</h5>
          <h4>{el.science}</h4>
          <h4>{el.university}</h4>
        </li>
      </ul>
    ))}
  </div>
  )
}
