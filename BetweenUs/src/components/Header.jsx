import './Header.css';

function Header({mode, onModeChange, showControls}){
    return(
        <nav className="navbar">
            <div className="logo"> <a href="/">Between Us</a></div>
            <ul className="options">
                {showControls && (
                <>
                <div className="mode-toggle">
                <button className={mode === 'edit' ? 'mode-btn active' : 'mode-btn'} onClick={() => onModeChange('edit')}>edit</button>
                <button className={mode === 'view' ? 'mode-btn active' : 'mode-btn'} onClick={() => onModeChange('view')}>view</button>
                </div>
                <button className="share-btn">share</button>
                </>
                )}
            </ul>
        </nav>   
    )
}

export default Header;