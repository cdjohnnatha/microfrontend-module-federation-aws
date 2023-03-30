import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

const mount = (el) => {
  ReactDom.render(<App />, el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// Mount function to start up the app

// if we are in development and in isolation
// call mount immediately

export { mount };
