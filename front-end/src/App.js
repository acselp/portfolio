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
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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


function App() {


  const [menuStyle, setMenuStyle] = useState ({
    right: "-100%"
  }); 

  const [btnsStyle, setBtnsStyle] = useState ({
    right: "50px"
  })

  const [visible, setVisible] = useState(false);


  const toggleThemeMenu = () => {

    if (visible) {
      setBtnsStyle({right: "50px"});
      setMenuStyle({right: "-300px"});
      setVisible(false);
    }
    else {
      setBtnsStyle({right: "250px"});
      setMenuStyle({right: "25px"});
      setVisible(true);
    }
  }

  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="wrapper-left">
          <SideBar />
        </div>

        <div className="wrapper-right">
          <MyRoutes />
        </div>


        <div className="menu" >

        <div className="round-btn" style={ btnsStyle } onClick={ toggleThemeMenu }>
            <FontAwesomeIcon icon={ faCog } />
        </div>

        <div className="round-btn rbtn-2" style={ btnsStyle }>
            <FontAwesomeIcon icon={ faMoon } />
        </div>

          <div className="theme-menu" style={ menuStyle }>
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
