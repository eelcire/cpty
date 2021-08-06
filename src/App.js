import React, { useContext } from 'react';
import './App.css';

import CardComponent from './containers/CardComponent/CardComponent';
import DonoText from "./components/DonoText/DonoText"
import InfoError from './components/InfoError/InfoError';
import InfoText from './components/InfoText/InfoText'

import { StoreContext } from './store'

function App() {
  const { state: { setBackground } } = useContext(StoreContext)

  return (
      <div className={ setBackground ? "App donated" : "App"}>
        <DonoText />
        <InfoText />
        <CardComponent />
        <InfoError />
      </div>
    
  );
}

export default App;
