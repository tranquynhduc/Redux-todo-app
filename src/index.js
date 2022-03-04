import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Chakra UI
import { ChakraProvider } from '@chakra-ui/react'

import { Provider } from 'react-redux';
import store from './redux/Store'

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </Provider>
  ,
  document.getElementById('root')
);

