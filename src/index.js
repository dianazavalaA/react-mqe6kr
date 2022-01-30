import React from 'react';
import { render } from 'react-dom';

const App = ()=>{
  return <h1> <Button /> <Saludo /> <Bunny/> </h1>
}

function Button (){
  return <p> "es un botón" </p>
}

const Bunny = ()=>{
  return <p> "eres el mejor conejo!" </p>
}


const Saludo = () =>{
  return <p> Que onda { 5/6 } </p>
}

render (<App />, document.getElementById('root'))
