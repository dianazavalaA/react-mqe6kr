import React from 'react';
import { render } from 'react-dom';

const App = ()=>{
  return <h1> <Button /> Hola perros! <Bunny/> </h1>
}

function Button (){
  return <p> "es un botón" </p>
}

const Bunny = ()=>{
  return <p> "eres el mejor conejo!" </p>
}

render (<App />, document.getElementById('root'))
