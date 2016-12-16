import React from 'react'

export const Weather = (props) => (
  <div className='header'>
    Data Analysis
  </div>
)

Weather.propTypes = {
  weather     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Weather
