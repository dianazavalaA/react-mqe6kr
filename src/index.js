import React, { Component } from 'react';
import { render } from 'react-dom';

const Button = ()=>{
  return <button>Enviar</button>
}

const App = ()=>{
  return <div><Button /> </div>
}

render(<App />, document.getElementById('react-app'));