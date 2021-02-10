import './styles.css';
import { Link } from 'react-router-dom' 

const NavBar = () => {
    return (
        <nav className="main-nav">
            <div>
                <Link to="/">
                    <h4 className="nav-title">Bootcamp DevSuperior</h4>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;