import React from 'react';
import { render } from 'react-dom';

const Saludo = () =>{
const name = 'Diana Laura';
const idioma = "es";
return{
    <div>
     {
       idioma=== "es"&& <p>Hola</p>
     }
    </div>
  }
}

const App = ()=>{
  return <h1> <Saludo />  </h1>
}
render (<App />, document.getElementById('root'))
