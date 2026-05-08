const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">Devendra Raj Gautam</div>
                <ul className="nav-links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                </ul>
            </nav>
        </div>
    );
};
export default Navbar;