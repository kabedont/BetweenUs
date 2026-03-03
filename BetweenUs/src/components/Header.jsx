import './Header.css';

function Header(){
    return(
        <nav className="navbar">
            <div className="logo"> <a href="/">Between Us</a></div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>   
    )
}

export default Header;