import './App.scss';


import SideBar from './components/SideBar/index';
import Home from './components/Home/index';
import Contact from './components/Contact/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import RoundButton from './components/RoundButton/index';
import { Colors } from './colors';


import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


const MyRoutes = function() {
  return (
    <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/contact" element={ <Contact/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/skills" element={ <Skills/> }/>
        <Route path="/portfolio" element={ <Portfolio/> }/>
    </Routes>
  );
}


function showThemeMenu() {

}


function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="wrapper-left">
          <SideBar />
        </div>

        <div className="wrapper-right">
          <MyRoutes />
        </div>


        <div className="menu">
          <RoundButton icon={ faCog } onClick={ showThemeMenu } />
          <RoundButton icon={ faMoon }  />

          <div className="theme-menu">
            <div className="theme-menu-text">
              Theme colors
            </div>
            <div className="theme-menu-colors">
              <div style={{backgroundColor: Colors.orange}}>

              </div>
              <div style={{backgroundColor: Colors.red}}>
                
              </div>
              <div style={{backgroundColor: Colors.green}}>
                
              </div>
              <div style={{backgroundColor: Colors.blue}}> 
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
