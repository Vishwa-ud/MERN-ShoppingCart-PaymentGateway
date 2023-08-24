import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h2>Deals And Exclusives</h2>
            </div>
            <ul className="navbar__links">
                <li>
                    <Link></Link>
                </li>
            </ul>
                </nav>
    )
}
export default Navbar