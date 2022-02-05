import React from 'react';
import { render } from 'react-dom';

const nombres = [
  'Alvaro',
  'Diana',
  'Laura',
  'Jose'
]

function getNombres(){
  const elementosLista = [];
  for(var i=0;i< nombres.length;i++ ){
    elementosLista.push(<li>{nombres[i]}</li>);
  }
  console.log(elementosLista);
  return elementosLista;
}

const Nombres = () =>{
  return <ul> {
      nombres.map (nombre => <li> {nombre} </li>)
    } </ul>
}

const App = ()=>{
  return <h1> <Nombres />  </h1>
}
render (<App />, document.getElementById('root'))
