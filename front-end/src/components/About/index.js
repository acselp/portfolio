import PageTitle from "../PageTitle";
import InfoCell from "../InfoCell";
// import ProgressBar from "../ProgressBar"
import { Link } from "react-router-dom";
// import Hexagon from "./Hexagon/index"


import "./index.scss";
import LanguageLevel from "../LanguageLevel";


function About(props) {
    return (
        <>
            <PageTitle title="About" themeColor={ props.themeColor } />

            <div className="about-text mb-about">
                <h1>
                    Hy, I am Virgiliu Plesca. And I am a Web Developer 
                </h1>

                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

            </div>

            <div className="cv-section mb-about">
                <div className="cv-section-left">
                    <InfoCell title="Birthday" content="15 june 2001"/>
                    <InfoCell title="Website" content="www.domain.info"/>

                    <InfoCell title="Age" content="21"/>


                    <InfoCell title="Email" content="virgiliu.plesca@iis.utm.md"/>
                    <InfoCell title="Degree" content="Computer Science"/>
                    <InfoCell title="Phone" content="+373 672 08 737"/>
                    <InfoCell title="Freelance" content="Available"/>
                    <InfoCell title="City" content="Chisinau"/>



                </div>

                <div className="cv-section-right">
                    <LanguageLevel />
                </div>
            </div>
        </>
    );
}

export default About;