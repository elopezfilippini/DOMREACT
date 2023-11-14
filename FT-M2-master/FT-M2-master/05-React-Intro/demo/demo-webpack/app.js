import React from 'react';
import ReactDOM from 'react-dom';
import Musicos from './src/Musicos.jsx';
import Saludo from './src/Saludo.jsx';
import SaludoFuncional from './src/SaludoFuncional.jsx';

const musicos = [
  {
    name: 'Jimmi',
    lastname: 'Hendrix',
    band: 'UKNW'
  },
  {
    name: 'David',
    lastname: 'Gilmour',
    band: 'Pink Floyd'
  },
  {
    name: 'Tom',
    lastname: 'Yorke',
    band: 'Radiohead'
  }
];

function App() {
  return (
    <div pp>
      {/* <Saludo nombre='Soy Henry' lang='en'/>
      <SaludoFuncional nombre='Soy Henry' lang='es'/>
      <Musicos musicos={musicos} /> */}
      <h1>Los de boca son...</h1>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('app'));