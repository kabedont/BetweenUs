import { useState } from 'react'
import Header from './components/Header.jsx'
import GridSelection from './components/GridSelection.jsx'
import PhotoUpload from './components/PhotoUpload.jsx'
import './App.css'

function App(){
  const [gridSize, setGridSize] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('setup');
  const handleConfirm = (size) => {
    setGridSize(size); //save the picked size
    setCurrentScreen('upload'); //switch to upload screen
  }

  const [currentMode, setCurrentMode] = useState('edit');
  const setMode = (newMode) => {
    setCurrentMode(newMode);
  }

  return(
    <div className="App">
      <Header mode={currentMode} onModeChange={setMode} showControls={currentScreen === 'upload'} />
        <div className="main-content">
          {currentScreen === 'setup' && (<GridSelection onConfirm={handleConfirm}/>)}
          {currentScreen === 'upload' && (<PhotoUpload gridSize={gridSize} mode={currentMode}/>)}
        </div>
    </div>
  );
}

export default App;