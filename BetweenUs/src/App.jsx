import { useState } from 'react'
import Header from './components/Header.jsx'
import GridSelection from './components/GridSelection.jsx'
import './App.css'

function App(){
  return(
    <div className="App">
      <Header />
        <div className="main-content">
        <GridSelection />
        </div>
    </div>
  );
}

export default App;