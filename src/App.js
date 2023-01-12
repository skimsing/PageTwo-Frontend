import './App.css';
//components
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import LoadGame from './Components/LoadGame/LoadGame.jsx'

//pages
import Home from './Pages/Home/Home.jsx';
import Game from './Pages/Game/Game.jsx';
import About from './Pages/About/About';
import UserHomePage from './Pages/UserHomePage/UserHomePage';
import CreateAccount from './Pages/CreateAccount/CreateAccount';
import LoginModal from './Components/LoginModal/LoginModal';
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
          <Route path="/UserHome" element={<UserHomePage />}/>
          <Route path="/CreateAccount" element={<CreateAccount />}/>
          <Route path="/Login" element={<LoginModal />}/>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
