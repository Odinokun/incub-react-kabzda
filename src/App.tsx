import React from 'react';
import './App.css';
import {Star} from './components/Rating/Star';
import {Accordion} from './components/Accordion/Accordion';
import {PageTitle} from './PageTitle';
import {Rating} from './components/Rating/Rating';

function App() {
  return (
    <div className="App">
      <PageTitle title='This propsTitle is App component'/>
      <Rating value={4}/>
      <Accordion title='This is Accordion Title' collapsed={true}/>
      <Accordion title='This is Accordion Title' collapsed={false}/>
    </div>
  );
}

export default App;
