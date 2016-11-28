import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { fetchVideos } from './actions'

store.dispatch(fetchVideos('kitty'))

ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
