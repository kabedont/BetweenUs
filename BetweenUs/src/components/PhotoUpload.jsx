import {useState} from 'react';
import './PhotoUpload.css'

function PhotoUpload({gridSize}) {
  const totalSlots = () => {
    const [rows, cols] = gridSize.split('x').map(Number);
    const totalSlots = rows * cols;
    return totalSlots;
  }

  return (
      <div style={{textAlign: 'center' }}>
        <h2>coming soon!</h2>
      </div>
  );
}

export default PhotoUpload;