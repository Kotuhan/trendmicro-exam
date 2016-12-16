import React from 'react'
import './DataAnalysis.scss'

export const DataAnalysis = (props) => (
  <div className='container'>
    <div className='header'>
      Data Analysis
    </div>
    <hr className='devider' />
  </div>
)

DataAnalysis.propTypes = {
  dataAnalysis     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default DataAnalysis
