
import './App.css';
import logo from './logo.png';
import axios from 'axios';
import React, { useState } from 'react';
import XMLData from './languages_all.xml';

function App() {

  // Read XML file and store it as a string
  const [XMLtext, setXMLtext] = useState("");
  axios.get(XMLData, {
    "Content-Type": "application/xml; charset=utf-8"
  })
    .then((response) => {
      setXMLtext(response.data)
    });

  // Define variables/react hooks
  const [clicked, setClicked] = useState(false);
  const [numberOfSeconds, setNumberOfSeconds] = useState(0);
  const [textVisibility, setVisibility] = useState(true);

  // Functions
  function getTranslation(XMLtext, element, language) {
    // WIP: Code that returns the correct element based on the inputted language.
    return "Fin de la ruta";
  }

  function handleChange(e) {
    setNumberOfSeconds(e.target.value);
  }

  function handleClick() {
    setClicked(true)
    setTimeout(() => { setVisibility(false); }, numberOfSeconds * 1000);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Bikelabyrinth logo" />
      </header>
      <div className="div-padding">
        <span className="text-styling">The sentence is "End of route".</span>
      </div>
      <div className="div-padding">
        <input value={numberOfSeconds} onChange={handleChange} />
      </div>
      <div className="div-padding">
        <button onClick={handleClick}>Click me to see the Spanish translation for {numberOfSeconds} seconds!</button>
      </div>
      <div class="text-styling">
        {clicked &&
          <span className={textVisibility ? 'visible' : 'invisible'}>{getTranslation(XMLtext, "endTour", "sp")}</span>}
      </div>
    </div >
  );
}

export default App;
