// src/App.js

import React from 'react';
import MyComponent from './MyComponent';
import CalcApp from './CalcApp';
import './index.css';
const App = () => {
  return (
    <>
       <CalcApp/>
      <MyComponent /> {/* Use the MyComponent here */}
    </>
  );
};

export default App;
