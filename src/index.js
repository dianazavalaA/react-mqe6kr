import React, { useState } from 'react';
import { render } from 'react-dom';

const Button = ()=>{

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Presionado: {counter} </p>
      <button>Click me!</button>
    </div>
  )
}

const App = ()=>{
  return <div><Button /> </div>
}

render(<App />, document.getElementById('react-app'));