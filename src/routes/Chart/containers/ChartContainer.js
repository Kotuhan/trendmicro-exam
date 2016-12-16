import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/chart'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the chart:   */

import Chart from '../components/Chart'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  increment : () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  chart : state.chart
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const chart = (state) => state.chart
    const tripleCount = createSelector(chart, (count) => count * 3)
    const mapStateToProps = (state) => ({
      chart: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(Chart)
