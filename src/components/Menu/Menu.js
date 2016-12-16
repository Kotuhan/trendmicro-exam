import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Menu.scss'

export const Menu = () => (
  <div className='menu'>
    <Link to='/chart' activeClassName='route--active'>
      Data Analysis
    </Link>
    <Link to='/weather' activeClassName='route--active'>
      Weather
    </Link>
  </div>
)

export default Menu
