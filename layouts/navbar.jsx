import {Link} from 'react-router-dom';
function Navbar  () {
    return (
            <nav className="navbar">
                <div className="logo">Devendra Raj Gautam</div>
                <ul className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                </ul>
            </nav>
    );
}
export default Navbar;