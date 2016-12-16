import React from 'react'

export const Weather = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Weather: {props.weather}</h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
  </div>
)

Weather.propTypes = {
  weather     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Weather
