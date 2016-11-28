import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'searchBar',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([
      /*'./containers/searchBarContainer',
      './modules/searchBar'*/
    ], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const searchBar = require('./containers/searchBarContainer').default
      const reducer = require('./modules/searchBar').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'searchBar', reducer })
      store.subscribe(() => { console.log('subscriber updated') })

      /*  Return getComponent   */
      cb(null, searchBar)

    /* Webpack named bundle   */
    }, 'searchBar')
  }
})
