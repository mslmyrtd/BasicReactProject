import React from 'react'
import { links } from './data'

const Sidebar = () => {
  return (
    <div className='links-container show-container'>
      <ul className='links'>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
