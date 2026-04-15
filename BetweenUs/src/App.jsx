import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx'
import GridSelection from './components/GridSelection.jsx'
import PhotoUpload from './components/PhotoUpload.jsx'
import saveGallery from './saveGallery.js'
import GalleryView from './components/GalleryView.jsx';
import './App.css'

function AppContent() {
  const location = useLocation();
  const isGalleryView = location.pathname.startsWith('/gallery');

  const [gridSize, setGridSize] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState([]);
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [totalSlots, setTotalSlots] = useState(0);
  const [currentMode, setCurrentMode] = useState('edit');
  const [isExpiryModalOpen, setIsExpiryModalOpen] = useState(null);

  const handleConfirm = (size) => {
    const [rows, cols] = size.split('x').map(Number);
    const totalSlots = rows * cols;
    setRows(rows);
    setCols(cols);
    setTotalSlots(totalSlots);

    const initialPhotos = Array(totalSlots).fill(null);
    const initialDescription = Array(totalSlots).fill(null);

    setGridSize(size);
    setPhotos(initialPhotos);
    setDescription(initialDescription);
  }

  const handleShare = async (expiryDays) => {
    const hasPhotos = photos.some(photo => photo !== null);

    if (!gridSize || !hasPhotos){
      return false;
    }

    const galleryId = await saveGallery(gridSize, photos, description, expiryDays)

    if(!galleryId){
      alert("Failed to save gallery")
      return
    }

    const shareLink = `${window.location.origin}/gallery/${galleryId}`
    await navigator.clipboard.writeText(shareLink)
    return shareLink
  }

  const setMode = (newMode) => {
    setCurrentMode(newMode);
  }

  const openExpiryModal = () => {
    setIsExpiryModalOpen(true);
  }

  const closeExpirymodal = () => {
    setIsExpiryModalOpen(false);
  }

  return (
    <div className="App">
      <Header 
        mode={currentMode} 
        onModeChange={setMode} 
        showControls={location.pathname==='/upload'} 
        onShare={handleShare}
        onShareClick={openExpiryModal}
      />
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
                isExpiryModalOpen={isExpiryModalOpen}
                closeExpiryModal={closeExpirymodal}
                handleShare={handleShare}
              />
            }
          />
          <Route path="/gallery/:id" element={<GalleryView />}/>
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;