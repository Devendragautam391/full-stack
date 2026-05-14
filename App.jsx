import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Projects from './pages/projects.jsx';
import Center from './components/center.jsx';
import Right from './components/right.jsx';
import Left from './components/left.jsx';
import Navbar from './layouts/navbar.jsx';
import './App.css'
const App = () => {
    return (
        <div className="app-container">
            <Navbar/>
            <Routes>
                <Route path="/" element={
                    <div>
                        <Center />
                        <Right />
                        <Left />
                    </div>
                } />
                <Route path="/contact" element={
                    <div>
                        <Center />
                        <Right />
                        <Left />
                    </div>
                } />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
    );
}
export default App;