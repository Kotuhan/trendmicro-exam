import { connect } from 'react-redux'
import { requestWeather } from '../../../actions/weather'
import Weather from '../components/Weather'

const mapDispatchToProps = {
  requestWeather
}

const mapStateToProps = ({ weather }) => {
  const { main, description, humidity, tempMin, tempMax, error, isLoading } = weather
  return {
    main,
    error,
    tempMax,
    tempMin,
    humidity,
    isLoading,
    description
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
