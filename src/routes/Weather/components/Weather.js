import React, { Component, PropTypes } from 'react'
import { chooseIcon } from '../modules/weather'
import './Weather.scss'

class Weather extends Component {
  constructor (props) {
    super(props)

    this.state = {}
    this.submit = this.submit.bind(this)
  }

  submit (event) {
    const { requestWeather } = this.props
    const { city, country } = this.refs.form
    event.preventDefault()
    requestWeather(city.value, country.value)
  }

  render () {
    const { main, description, humidity, tempMin, tempMax, error, isLoading } = this.props
    const icon = isLoading ? 'loading' : chooseIcon(description)

    return (
      <div className='container'>
        <div className='header'>
          Today's Weather
        </div>
        <hr className='devider' />
        {(error.length > 0) && <div className='error'>{error}</div>}
        <form onSubmit={this.submit} className='form'
          ref='form'
        >
          <label>City: </label>
          <input type='text' name='city' />
          <label>Country: </label>
          <input type='text' name='country' />
          <button type='submit'>Search</button>
        </form>
        <div className='weather-type'>
          <img className={icon} />
          <div className='description'>
            <h1>{main}</h1>
            <h3>{description}</h3>
          </div>
        </div>
        <div className='weather-description'>
          <p>Temperature: {tempMin}С° ~ {tempMax} С°</p>
          <p>Humidity: {humidity}%</p>
        </div>
      </div>
    )
  }
}

Weather.propTypes = {
  tempMax: PropTypes.number,
  tempMin: PropTypes.number,
  humidity: PropTypes.number,
  main: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  requestWeather: PropTypes.func.isRequired
}

export default Weather
