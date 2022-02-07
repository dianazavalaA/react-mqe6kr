import React, { Component } from 'react';
import { render } from 'react-dom';

const nombres = [
  'Diana',
  'Laura',
  'Alvaro',
  'Cuco'
]

const Saludar = ()=>{
  const nombre = 'Uriel';
  return <p>Hola {nombre}</p>
}

const App = ()=>{
  return <div> <Saludar /> </div>
}

render(<App />, document.getElementById('react-app'));