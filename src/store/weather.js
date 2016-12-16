import {
  REQUEST_WEATHER,
  RECEIVE_WEATHER,
  FAILURE_WEATHER
} from '../actions/weather'

const initialState = {
  main: '',
  error: '',
  weather: '',
  description: '',
  isLoading: false
}

const weather = function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_WEATHER:
      return {
        ...state,
        error: '',
        isLoading: true
      }
    case RECEIVE_WEATHER:
      return {
        ...state,

        isLoading: false,
        main: action.main,
        tempMin: action.tempMin,
        tempMax: action.tempMax,
        humidity: action.humidity,
        description: action.description
      }
    case FAILURE_WEATHER:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    default:
      return state
  }
}

export default weather
