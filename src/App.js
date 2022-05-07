import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import getPhrases from './helpers/getPhrases';

//const initialPhrase = { id: 1, content: "Confía en Dios. Buenas cosas vienen para aquellos que creen, cosas mejores vienen para aquellos que son pacientes." }

function App() {

  //const [phrases, setPhrases] = useState(initialPhrase);
  const [phrases, setPhrases] = useState({});
  const [counter, setCounter] = useState(0)

  const updatePhrase = () => {
    
    const newPhrase = getPhrases();

    let rand = Math.floor(Math.random()*newPhrase.length);
    let rValue = newPhrase[rand];
    //console.log(rValue)

    //let indice = newPhrase.indexOf(newPhrase[counter]);
    let indice = rValue.id;
    //console.log(`indice ${indice}`);
    //console.log(newPhrase.length);
    //console.log(`counter ${counter}`);
    if(counter <= indice && (counter + 1) <= newPhrase.length) {
        //console.log('Por el If')
        setCounter(counter+1);
        setPhrases(rValue);
    } else {
        //console.log('Por el Else')
        indice = 0;
        setCounter(indice + 1);
        setPhrases(rValue);
    }
  }

  useEffect(() => {
    updatePhrase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    
    <Fragment>
    <div className="container">
      <h1>{`"  ${phrases.content}`}</h1>

      <button 
        className="boton"
        onClick={() => updatePhrase(counter)}
        >Obtener Frase</button>
    </div>
    <div className="footer">
      <p>
        &copy; Sitio desarrollado por el Ing. Edys Perez
      </p>
    </div>
  </Fragment>
  );
}

export default App;
