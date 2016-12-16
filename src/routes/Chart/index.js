import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'chart',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Chart = require('./containers/ChartContainer').default
      const reducer = require('./modules/chart').default

      /*  Add the reducer to the store on key 'chart'  */
      injectReducer(store, { key: 'chart', reducer })

      /*  Return getComponent   */
      cb(null, Chart)

    /* Webpack named bundle   */
    }, 'chart')
  }
})
