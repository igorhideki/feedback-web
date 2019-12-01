import React from 'react';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <GlobalStyles />
      <h1>Feedback App</h1>
    </>
  )
}

export default App;
