import "./index.scss";
import ImageMan from "./img/happy_man.jpg";
import PageTitle from "../PageTitle/index";
import { Link } from "react-router-dom";
import ColoredSpan from "../ColoredSpan";
import styled from "styled-components";

function Home(props) {

    return (
        <div className="home">
            
            <PageTitle title="Home" themeColor={ props.themeColor } />
            
            <div className="home-div">
                <div className="home-text">
                    <h1>Hy, my name is <span className="author-name" style={{color: props.themeColor}}>Virgiliu Plesca</span></h1>
                    <h1>I am a <ColoredSpan color={ props.themeColor } text="Web Developer" /></h1>
                    <p>
                        I have been a web developer for nearly 1 year. Blah blah blah sjdgnksdjgfn safjgn nd ndjfn jndfn skkfe,i mskm fjn djs 'sdf ' sdf sadfsdf'f dsf ajsndfjndsv
                    </p>

                    <Link to="/about" className="home-more-link" style={{backgroundColor: props.themeColor}}>
                        <nobr>More About Me</nobr>
                    </Link>
                </div>
                
                <div className="home-img">
                    <img src={ ImageMan } alt="Image" />
                </div>
            </div>
        </div>
    );
}

export default Home;