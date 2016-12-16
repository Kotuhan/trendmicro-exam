// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

export const chooseIcon = (description) => {
  if (description.search(/rain/i) !== -1) {
    return 'rain'
  } else if (description.search(/clear/i) !== -1) {
    return 'clear'
  } else if (description.search(/cloud/i) !== -1) {
    return 'cloud'
  } else {
    return 'undefined'
  }
}
