import React from 'react';
import { render } from 'react-dom';

const App = ()=>{
  return <h1> <Saludo />  </h1>
}

function SaludarEnIdiomas({idioma}){
  if(idioma === "es") return <p> Hola</p>;
  if(idioma === "es") return <p> Hello</p>;
}

const Saludo = () =>{
const name = 'Diana Laura';
  return <p> <SaludarEnIdiomas idioma="es" /> { name } </p>;
}

render (<App />, document.getElementById('root'))
