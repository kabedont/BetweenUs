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
    const imgUrl = URL.createObjectURL(file);
    //create new array with the image URL at selected slot
    const updatedPhotos = [...photos];
    updatedPhotos[selectedSlot] = imgUrl;
    setPhotos(updatedPhotos);
  }
  
  //making a ref
  const fileInputRef = useRef(null); //a pointer to the file input element

  //hover functionality after image upload
  const[hover, setHover] = useState(null);
  const handleHover = (index) => {
    setHover(index);
    console.log(`Hovering over slot ${index}`);
  }
  const handleLeave = () => {
    setHover(null);
    console.log(`Hover ended`);
  }

  //return function
  return (
      <>
        <div className='photo-grid' style={{gridTemplateColumns: `repeat(${cols}, 1fr)`}}>
          {Array.from({length: totalSlots}).map((_, index) => (
            <div key = {index} className='slot-container'>
              {photos[index] ? ( 
                <div className='image-wrapper' onMouseEnter={() => handleHover(index)} onMouseLeave={handleLeave}> 
                  <img src={photos[index]} alt={`Upload ${index+1}`} className='photo-image'/>
                  {hover === index && (
                    <div className='hover-menu'> 
                      <button className='menu-btn'>📝</button>
                      <button className='menu-btn'>🗑️</button>
                    </div>
                  )}
                </div>
              ) : (
                <button className='slots' onClick={() => handleSlotClick(index)}>+</button>
              )}
            </div>
          ))}
        <input type="file" accept="image/*" onChange={handleFileSelect} ref={fileInputRef} style={{display: 'none'}}/>
        </div>
      </>
  );
}

export default PhotoUpload;