import React, { Component } from 'react';
import { render } from 'react-dom';

const Button = ()=>{
  return (
    <button>Click me!</button>
  )
}

const App = ()=>{
  return <div> </div>
}

render(<App />, document.getElementById('react-app'));