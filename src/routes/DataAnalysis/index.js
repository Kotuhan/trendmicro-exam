import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'dataAnalysis',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const DataAnalysis = require('./containers/DataAnalysisContainer').default
      const reducer = require('./modules/dataAnalysis').default

      /*  Add the reducer to the store on key 'dataAnalysis'  */
      injectReducer(store, { key: 'dataAnalysis', reducer })

      /*  Return getComponent   */
      cb(null, DataAnalysis)

    /* Webpack named bundle   */
    }, 'dataAnalysis')
  }
})
