export const REQUEST_WEATHER = 'REQUEST_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'
export const FAILURE_WEATHER = 'FAILURE_WEATHER'

const KEY_API = '395c926a0b1e871be5d14e630255a99f'

const fetchResult = (data) => {
  const action = {
    type: RECEIVE_WEATHER,
    main: data.weather[0].main,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    tempMin: Math.round(data.main.temp_min - 273),
    tempMax: Math.round(data.main.temp_max - 273)

  }
  return action
}

export const requestWeather = (city, country) => (dispatch) => {
  let url = `http://api.openweathermap.org/data/2.5/weather?appid=${KEY_API}`
  if (city) url += `&q=${city}`
  if (country) url += `&country=${country}`
  dispatch({ type: REQUEST_WEATHER })
  fetch(url, {
    method: 'GET'
  })
  .then((response) => response.json())
  .then(data => {
    if (data.cod === '502') {
      return dispatch({
        type: FAILURE_WEATHER,
        error: data.message
      })
    }
    dispatch(fetchResult(data))
  })
}
