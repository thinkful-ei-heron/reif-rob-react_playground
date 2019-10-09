import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
// import HelloWorld from './state-drills/HelloWorld';
// import Bomb from './state-drills/Bomb';
// import RouletteGun from './state-drills/RouletteGun';
import Accordion from './state-drills/Accordion'

import './index.css';

// When calling the RouletteGun
// pass in bulletInChamber={8}
// as a default prop

ReactDOM.render(
  <Accordion />,
  document.getElementById('root')
);