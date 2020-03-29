import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './Routes';

import GlobalStyles from '~/components/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
