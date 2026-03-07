import {useState} from 'react';
import './PhotoUpload.css'

function PhotoUpload({gridSize}) {
  //calculating total number of slots
  const [rows, cols] = gridSize.split('x').map(Number);
  const totalSlots = rows * cols;

  //return function
  return (
      <>
        <h2>{totalSlots} pictures to upload</h2>
        <div className='photo-grid'>
          {Array.from({length: totalSlots}).map((_, index) => (
            <button key={index} className='slots'>+</button>
          ))}
        </div>
      </>
  );
}

export default PhotoUpload;