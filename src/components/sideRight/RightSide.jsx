import React from 'react'
import cl from "./RightSide.module.css"
import Experience from './Experience/Experience'

export default function RightSide() {
  return (
    <div className={cl.RightSide}>
      <div className={cl.Experience}>
      <h1>Experience</h1>
      <div className={cl.line__container}>
        <div className={cl.line}></div>
      </div>
      <Experience />
      <h2>About Me</h2>
      <span>Я нацелен на постоянное совершенствование своих навыков и готов делиться своим опытом и идеями в команде, чтобы создавать веб-приложения, которые соответствуют высоким стандартам качества и удовлетворяют потребности пользователей.</span>
      </div>
    </div>
  )
}
