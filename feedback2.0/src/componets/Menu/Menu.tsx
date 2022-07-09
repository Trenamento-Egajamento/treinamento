import React from 'react'
import './menu.css'

function Menu({nome, color}: any) {
  return (
    <div className='menu' style={{backgroundColor: color}}>
      <span>
        Olá {nome}, tudo bem?
      </span>
      
    </div>
  )
}

export default Menu