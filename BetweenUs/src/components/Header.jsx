import './Header.css';

function Header(){
    return(
        <nav className="navbar">
            <div className="logo"> <a href="/">Between Us</a></div>
            <ul className="nav-links">
                <a>Current mode: </a>
                <li><a href="/about">Share</a></li>
            </ul>
        </nav>   
    )
}

export default Header;