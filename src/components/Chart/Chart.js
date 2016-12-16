import React, { Component } from 'react'
import './Chart.scss'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts'

const data = [
  { Ox: 2007, male: 106.898, female: 97.516 },
  { Ox: 2008, male: 103.937, female: 94.796 },
  { Ox: 2009, male: 99.492, female: 91.818 },
  { Ox: 2010, male: 87.213, female: 79.673 },
  { Ox: 2011, male: 101.943, female: 94.684 },
  { Ox: 2012, male: 118.848, female: 110.633 },
  { Ox: 2013, male: 103.120, female: 95.993 }
]

class Chart extends Component {
  constructor (props) {
    super(props)

    this.state = { data }
  }

  render () {
    const { data } = this.state

    return (
      <div className='someclass'>
        <LineChart
          width={630}
          height={430}
          data={data}
          margin={{ top: 30, bottom: 10, right: 40 }}
       >
          <XAxis
            dataKey='Ox'
            interval='preserveStartEnd'
            label='Year'
            padding={{ right: 15 }}
            name='year' />
          <YAxis
            type='number'
            yAxisId={0}
            padding={{ top: 10 }}
            domain={[70, 'auto']}
            label='People'
            tickFormatter={(t) => (t === 60) ? '' : t}
          />
          <Tooltip />
          <Legend verticalAlign='top' height={36} />
          <CartesianGrid stroke='#f5f5f5' />
          <Line
            type='monotone'
            dataKey='male'
            stroke='#ff7300'
            yAxisId={0}
            activeDot={{
              fill:'#ff7300',
              stroke: 'none'
            }}
            />
          <Line
            type='monotone'
            dataKey='female'
            stroke='#387908'
            yAxisId={0}
            activeDot={{ fill: '#387908', stroke: 'none', r: 6 }} />
        </ LineChart>
      </div>
    )
  }
}

export default Chart
