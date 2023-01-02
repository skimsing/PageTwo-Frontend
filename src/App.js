import './App.css';
//components
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import LoadGame from './Components/LoadGame/LoadGame.jsx'

//pages
import Home from './Pages/Home/Home.jsx';
import Game from './Pages/Game/Game.jsx';
import About from './Pages/About/About';
import LoginHomePage from './Pages/LoginHomePage/LoginHomePage';

import {BrowserRouter,Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <LoadGame /> */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Game" element={<Game />}/>
          <Route path="/LoginHome" element={<LoginHomePage />}/>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
