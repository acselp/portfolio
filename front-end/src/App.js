import './App.scss';


import SideBar from './components/SideBar/index';
import Home from './components/Home/index';
import Contact from './components/Contact/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

import { Colors } from './colors';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


const MyRoutes = function(props) {
  return (
    <Routes>
        <Route path="/" element={ <Home themeColor={ props.themeColor }/> }/>
        <Route path="/contact" element={ <Contact themeColor={ props.themeColor }/> }/>
        <Route path="/about" element={ <About themeColor={ props.themeColor }/> }/>
        <Route path="/skills" element={ <Skills themeColor={ props.themeColor }/> }/>
        <Route path="/portfolio" element={ <Portfolio themeColor={ props.themeColor }/> }/>
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

  const [themeColor, setThemeColor] = useState(Colors.orange);


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


  const changeThemeColor = (color) => {
    setThemeColor(color);
  }

  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="wrapper-left">
          <SideBar themeColor={ themeColor } />
        </div>

        <div className="wrapper-right">
          <MyRoutes themeColor={ themeColor } />
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
              
              <div style={{backgroundColor: Colors.orange}} onClick={() => { changeThemeColor(Colors.orange) } }>
              </div>
              <div style={{backgroundColor: Colors.red}} onClick={() => { changeThemeColor(Colors.red) } }>
              </div>
              <div style={{backgroundColor: Colors.green}} onClick={() => { changeThemeColor(Colors.green) } }>
              </div>
              <div style={{backgroundColor: Colors.blue}} onClick={() => { changeThemeColor(Colors.blue) } }> 
              </div>

            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
