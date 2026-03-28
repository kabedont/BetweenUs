import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx'
import GridSelection from './components/GridSelection.jsx'
import PhotoUpload from './components/PhotoUpload.jsx'
import saveGallery from './saveGallery.js'
import './App.css'

function App(){
  const [gridSize, setGridSize] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('setup');
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState([]);
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [totalSlots, setTotalSlots] = useState(0);

  const handleConfirm = (size) => {
    //calculating total number of slots
    const [rows, cols] = size.split('x').map(Number);
    const totalSlots = rows * cols;
    setRows(rows);
    setCols(cols);
    setTotalSlots(totalSlots);

    const initialPhotos = Array(totalSlots).fill(null);
    const initialDescription = Array(totalSlots).fill(null);

    setGridSize(size); //save the picked size
    setPhotos(initialPhotos);
    setDescription(initialDescription);
    setCurrentScreen('upload'); //switch to upload screen
  }

  const handleShare = async () => {
    const hasPhotos = photos.some(photo => photo !== null);

    if (!gridSize || !hasPhotos){
      alert("Please add at least one photo first!")
      return
    }

    const galleryId = await saveGallery(gridSize, photos, description)

    if(!galleryId){
      alert("Failed to save gallery")
      return
    }

    const shareLink = `${window.location.origin}/gallery/${galleryId}`
    await navigator.clipboard.writeText(shareLink)
    alert(`Link copied: ${shareLink}`)
  }

  const [currentMode, setCurrentMode] = useState('edit');
  const setMode = (newMode) => {
    setCurrentMode(newMode);
  }

  return(
    <BrowserRouter>
      <div className="App">
        <Header mode={currentMode} onModeChange={setMode} showControls={currentScreen === 'upload'} onShare={handleShare}/>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<GridSelection onConfirm={handleConfirm}/>}/>
              <Route 
                path="/upload" 
                element={
                  <PhotoUpload 
                    gridSize={gridSize} 
                    mode={currentMode}
                    rows={rows}
                    cols={cols}
                    totalSlots={totalSlots}
                    photos={photos}
                    setPhotos={setPhotos}
                    description={description}
                    setDescription={setDescription}
                  />
                }
              />
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;