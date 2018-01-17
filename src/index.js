// React
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { loop } from './actions/index';
import appReducers from './reducers/index';

// App
import App from './components/App';

// Store
const store = createStore(appReducers);

/*let unsubscribe = */store.subscribe(() => {}
  // console.log(store.getState())
);

// store.dispatch(incrementCoins(1));
// store.dispatch(incrementCoins(2));
// store.dispatch(incrementCoins(5));
// store.dispatch(incrementCoins(39742390423));

export { store };

// Render
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

setInterval(() => {
  store.dispatch(loop());
}, 100);

// Service worker
registerServiceWorker();
