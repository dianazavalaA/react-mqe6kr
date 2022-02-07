import React, { Component } from 'react';
import { render } from 'react-dom';

const nombres = [
  'Diana',
  'Laura',
  'Alvaro',
  'Cuco'
]

const Saludar = ({ nombre, idioma })=>{
  const saludo = idioma === 'es' ? 'Hola' : 'Hello';
  return <p>{saludo} {nombre}</p>
}

const App = ()=>{
  return <div> <Saludar nombre= 'Daiana'   idioma='en'  /> </div>
}

render(<App />, document.getElementById('react-app'));