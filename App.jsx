import Center from './components/center.jsx';
import Right from './components/right.jsx';
import Left from './components/left.jsx';
import Navbar from './layouts/navbar.jsx';
const App = () => {
    return (
        <div>
          <Center/>
            <Right/>
            <Left/>
            <Navbar/>
        </div>
    );
}
export default App;