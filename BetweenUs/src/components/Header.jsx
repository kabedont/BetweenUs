import './Header.css';

function Header({mode, onModeChange}){
    return(
        <nav className="navbar">
            <div className="logo"> <a href="/">Between Us</a></div>
            <ul className="options">
                <div className="mode-toggle">
                <button className={mode === 'edit' ? 'mode-btn active' : 'mode-btn'} onClick={() => onModeChange('edit')}>Edit</button>
                <button className={mode === 'view' ? 'mode-btn active' : 'mode-btn'} onClick={() => onModeChange('view')}>View</button>
                </div>
                <li><a href="/about">Share</a></li>
            </ul>
        </nav>   
    )
}

export default Header;