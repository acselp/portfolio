import "./index.scss";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faList, faBriefcase, faMessage, faCode } from "@fortawesome/free-solid-svg-icons";


function SideBar() {

    let activeStyle = {
        color: "#FD670E"
    }

    return (
        <>  
            <div className="logo">
                <Link to="/">
                    <FontAwesomeIcon icon={ faCode } color="#FD670E" size="5x" />
                </Link>
            </div>
            <div className="sidebar">
                <ul>
                    <li><NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}><FontAwesomeIcon icon={ faHouse } /><span>Home</span></NavLink></li>
                    <li><NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined} ><FontAwesomeIcon icon={faUser} /><span>About</span></NavLink></li>
                    <li><NavLink to="/skills" style={({ isActive }) => isActive ? activeStyle : undefined}><FontAwesomeIcon icon={faList} /><span>Skills</span></NavLink></li>
                    <li><NavLink to="/portfolio" style={({ isActive }) => isActive ? activeStyle : undefined}><FontAwesomeIcon icon={faBriefcase} /><span>Portfolio</span></NavLink></li>
                    <li><NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : undefined}><FontAwesomeIcon icon={faMessage} /><span>Contact</span></NavLink></li>
                </ul>
            </div>
        </>
        
    );
}

export default SideBar;