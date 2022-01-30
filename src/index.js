import React from 'react';
import { render } from 'react-dom';

const App = ()=>{
  return <h1> <Button /> <Saludo /> <Bunny/> </h1>
}

function SaludarEnIdiomas(){
  if(idioma === "es") return <p> Hola</p>;
  if(idioma === "es") return <p> Hello</p>;
}

function Button (){
  return <p> "es un botón" </p>
}

const Bunny = ()=>{
  return <p> "eres el mejor conejo!" </p>
}


const Saludo = () =>{
const name = 'Diana Laura';

  return <p> Que onda { name } </p>
}

render (<App />, document.getElementById('root'))
