const Home = () => {
    const containerStyle = {
        background: "url('/projects.png') no-repeat center center fixed",
        backgroundSize: "contain",
        margin: 0,
        minHeight: "100vh"
    };
    return (
        <div style={containerStyle}>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/App">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};
export default Home;