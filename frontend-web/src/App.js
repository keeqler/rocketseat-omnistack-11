import styled from 'styled-components';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer as _ToastContainer } from 'react-toastify';

import Routes from './Routes';

import GlobalStyles from '~/components/GlobalStyles';

const ToastContainer = styled(_ToastContainer)`
  .toast {
    background: var(--primary);
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ToastContainer toastClassName="toast" autoClose={3000} />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
