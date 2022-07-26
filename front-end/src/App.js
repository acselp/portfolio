import './App.scss';


import SideBar from './components/SideBar/index';
import Home from './components/Home/index';
import Contact from './components/Contact/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';


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
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="wrapper-left">
          <SideBar />
        </div>

        <div className="wrapper-right">
          <MyRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
