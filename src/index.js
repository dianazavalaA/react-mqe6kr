import React, { Component } from 'react';
import { render } from 'react-dom';

componentDidMount()
componentDidUpdate()
componentWillUnmount()

const Button = ()=>{
  //Aquí no debe haber efectos secundarios
  return <button>Enviar</button>
}

const App = ()=>{
  return <div><Button /> </div>
}

render(<App />, document.getElementById('react-app'));