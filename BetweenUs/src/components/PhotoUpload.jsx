import {useState, useRef} from 'react';
import './PhotoUpload.css';

function PhotoUpload({gridSize}) {
  //calculating total number of slots
  const [rows, cols] = gridSize.split('x').map(Number);
  const totalSlots = rows * cols;

  //uploaded pictures
  const [photos, setPhotos] = useState(Array(totalSlots).fill(null));
  const [selectedSlot,setSelectedSlot] = useState(null); //remember clicked slot
  const handleSlotClick = (index) => {
    setSelectedSlot(index);         //remember which slot
    fileInputRef.current.click();   //open file picker
  }
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    console.log(`File selected: `, file);
    console.log(`For Slot`, selectedSlot);
  }
  
  //making a ref
  const fileInputRef = useRef(null); //a pointer to the file input element

  //return function
  return (
      <>
        <h2>{totalSlots} pictures to upload</h2>
        <div className='photo-grid' style={{gridTemplateColumns: `repeat(${cols}, 1fr)`}}>
          {Array.from({length: totalSlots}).map((_, index) => (
            <button key={index} className='slots' onClick={() => handleSlotClick(index)}>+</button>
          ))}
        
        <input type="file" accept="image/*" onChange={handleFileSelect} ref={fileInputRef} style={{display: 'none'}}/>
        </div>
      </>
  );
}

export default PhotoUpload;