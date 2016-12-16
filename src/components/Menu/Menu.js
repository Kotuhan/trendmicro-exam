import React from 'react'
import { Link } from 'react-router'
import './Menu.scss'

export const Menu = () => (
  <div className='menu'>
    <Link to='/dataAnalysis' activeClassName='active' className='menu-item'>
      <div className='menu-content'>
        Data Analysis
      </div>
    </Link>
    <Link to='/weather' activeClassName='active' className='menu-item'>
      <div className='menu-content'>
        Today's Weather
      </div>
    </Link>
  </div>
)

export default Menu
