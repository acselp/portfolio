import PageTitle from "../PageTitle";
import InfoCell from "../InfoCell";
import cv_file from "../../files/CV_Plesca_Virgiliu.pdf";
// import ProgressBar from "../ProgressBar"
import { Link } from "react-router-dom";
// import Hexagon from "./Hexagon/index"
import Languages from "../Languages";
import styled from "styled-components";
import Experience from "../Experience";


import "./index.scss";
import LanguageLevel from "../LanguageLevel";
import EducationElem from "../EducationElem";
import ExperienceElem from "../ExperienceElem";

function About(props) {

    const StyledA = styled.a`
        background-color: ${props.themeColor};
    `

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
                    <Languages languages={[
                        <LanguageLevel themeColor={props.themeColor} title="Romainian" level="C2" level_title="Native C2"/>,
                        <LanguageLevel themeColor={props.themeColor} title="English" level="B1" level_title="Intermediate B1" />,
                        <LanguageLevel themeColor={props.themeColor} title="Russian" level="C1" level_title="Advanced C1" />,
                    ]} />
                    
                </div>
            </div>


            <div className="cv-download-section">
                <div className="cv-download">
                    <StyledA href={cv_file} className="about-btns" download>
                        Download CV
                    </StyledA>
                    
                    <StyledA href="#" className="about-btns">
                        Hire me
                    </StyledA>
                </div>
            </div>

            <div className="education-experience-container">
                <div className="education-container">
                    <Experience themeColor={props.themeColor} title="Education" positions={[
                        <EducationElem themeColor={props.themeColor} title="Bacalaureat diploma" years="2020" text="Just the school years." />,
                        <EducationElem themeColor={props.themeColor} title="Informatica Aplicata, FCIM, TUM" years="2020 - 2023" text="Informatics" />,
                    ]} />
                </div>
                <div className="experience-container">
                    <Experience title="Work experience" positions={[
                        <ExperienceElem themeColor={props.themeColor} title="PHP developer" years="11.2021 - 02.2022" company="Studio WEB Master" text="Just the school years." />,
                    ]} />
                </div>
            </div>
        </>
    );
}

export default About;