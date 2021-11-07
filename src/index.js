import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root')
)



// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import reducer from './reducers';

// const store = createStore(reducer);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,document.getElementById('root')
// );
