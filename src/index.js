import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux Toolkit
import { store } from './redux/store';
import { Provider } from 'react-redux';

// Api From RTK
import { Api } from './RTK/ApiRequests';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={Api}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
