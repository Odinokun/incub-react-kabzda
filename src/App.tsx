import React from 'react';
import './App.css';
import {Star} from './Star';
import {Accordion} from './Accordion';
import {AppTitle} from './AppTitle';
import {Rating} from './Rating';

function App() {
  return (
    <div className="App">
      <AppTitle/>
      <Rating/>
      <Accordion/>
    </div>
  );
}

export default App;
