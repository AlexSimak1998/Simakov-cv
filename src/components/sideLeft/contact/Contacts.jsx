import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import cl from './Contacts.module.css';

const contacts = [
  { icon: <i className="fa fa-phone" aria-hidden="true"></i>, elContact: '+7 989 851 52 78', link: `tel:+79898515278` },
  { icon: <i className="fa fa-envelope-o" aria-hidden="true"></i>, elContact: 'Simakov.alex198@gmail.com', link: 'mailto:Simakov.alex198@gmail.com' },
  { icon: <i className="fa fa-telegram" aria-hidden="true"></i>, elContact: 't.me/Simakov_Aleksey', link: 'https://t.me/Simakov_Aleksey' },
  { icon: <i className="fa fa-github" aria-hidden="true"></i>, elContact: 'github.com/AlexSimak1998', link: 'https://github.com/AlexSimak1998' },
];



export default function Contacts() {
  return (
    <div>
      <div className={cl.Contacts}>
        <h3 className={cl.title}>Contact info</h3>
        {contacts.map((el, index) => (
          <ul key={index}>
            <li>
              <span className={cl.icon}>{el.icon}</span>
              {el.link ? (
                <a href={el.link} target="_blank" rel="noopener noreferrer">
                  {el.elContact}
                </a>
              ) : (
                <span>{el.elContact}</span>
              )}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}