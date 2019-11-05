import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from 'reducers';

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
  /*
  redux state remained consistent on saves with only react-hot-loader
  if (module.hot) {
    module.hot.accept('../../client/reducers', () => {
      const nextReducer = require('reducers');
      store.replaceReducer(nextReducer);
    });
  }
  */

  return store;
};
