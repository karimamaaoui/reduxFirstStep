import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import counterReducer from './store/counterReducer';
import {Provider} from 'react-redux';
import reducers from './store/reducer'

//Store (state)

 // let store = createStore(counterReducer);

  let store = createStore(reducers);

/*store.subscribe(()=>console.log(store.getState()))
// Dispatch
  store.dispatch(increment());
  store.dispatch(increment());
  store.dispatch(decrement());
*/
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
