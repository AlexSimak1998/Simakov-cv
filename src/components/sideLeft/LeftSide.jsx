import React from 'react'
import cl from "./LeftSide.module.css"
import imageProf from '../../images/imgProf.jpg'
import Contacts from './contact/Contacts'
import Skills from './skills/Skills'

export default function LeftSide() {
  return (
    <div className={cl.LeftSide}>
      <div className={cl.profile__info}>
        <div className={cl.imgBx}>
          <img src={imageProf} alt="Профиль пользователя"/>
        </div>
        <h2>Симаков Алексей<br/><span>Frontend developer</span></h2>
      </div>
      <div className={cl.line__container}>
      <div className={cl.line}></div>
    </div>
      <div className={cl.contact__info}>
        <Contacts/>
        <Skills/>
      </div>
    </div>
  )
}
