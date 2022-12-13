import './App.css';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Pages/Home/Home.jsx';
import Game from './Pages/Game/Game.jsx';
import About from './Pages/About/About';
import Scene from './Components/Scene/Scene';

import {BrowserRouter,Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Scene />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Game" element={<Game />}/>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
