import React from 'react';
import logo from './logo.svg';
import Child from './child.js'
import './App.css';
import {TransactionProvider} from './transContext';


function App() {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}

export default App;
