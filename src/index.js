import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import musicPlayerReducer from './store/musicPlayerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(musicPlayerReducer, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);
