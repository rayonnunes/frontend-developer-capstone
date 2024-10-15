import { Link } from 'react-router-dom';
import Logo from '../../assets/logo-horizontal.jpg';
import './navbar.css';

export function Navbar() {
    return (
        <nav className="navbar-container">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={Logo} alt="little-lemon-logo" width={200} />
                </Link>
            </div>
            <div className="hamburguer-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}