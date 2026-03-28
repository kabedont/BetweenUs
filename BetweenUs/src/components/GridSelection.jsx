import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './GridSelection.css';

function GridSelection({onConfirm}){
    const [grid, setGrid] = useState(null)
    const navigate = useNavigate();
    return(
        <>
        <h2 className="question">select your grid!</h2>

        <div className="button-group">
            <button className={`grid-option ${grid === "2x2" ? "selected" : ""}`}
                    onClick={() => setGrid("2x2")}>2x2
            </button>
            
            <button className={`grid-option ${grid === "3x3" ? "selected" : ""}`} 
                    onClick={() => setGrid("3x3")}>3x3
            </button>
            
            <button className={`grid-option ${grid === "4x4" ? "selected" : ""}`}
                    onClick={() => setGrid("4x4")}>4x4
            </button>
        </div>
        
        <p>selected grid: {grid || "none"}</p>

        <button className="confirm" onClick={() => {onConfirm(grid); navigate('/upload');}} disabled={!grid}>confirm</button> 
        </>
    )
}
export default GridSelection;