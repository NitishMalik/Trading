import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Template from './common/Template';

import OrderContainer from './components/Order/OrderContainer';

function App() {
  return (
    <div className="App">
      <Template>
        <OrderContainer />
      </Template>
    </div>
  );
}

export default App;
