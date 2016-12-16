import React from 'react'

export const Chart = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Whafdsafsaddfsaddrt: {props.chart}</h2>

  </div>
)

Chart.propTypes = {
  chart     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Chart
