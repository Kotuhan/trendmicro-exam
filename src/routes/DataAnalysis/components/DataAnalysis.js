import React from 'react'
import './DataAnalysis.scss'
import Chart from '../../../components/Chart'
export const DataAnalysis = () => (
  <div className='container'>
    <div className='header'>
      Data Analysis
    </div>
    <hr className='devider' />
    <Chart />
  </div>
)

DataAnalysis.propTypes = {
  dataAnalysis     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default DataAnalysis
