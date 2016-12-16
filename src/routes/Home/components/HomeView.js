import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <ul>
      <li>Data Analysis</li>
      <li>Today's Weather</li>
      <img
        src={DuckImage}
        />
    </ul>
  </div>
)

export default HomeView
