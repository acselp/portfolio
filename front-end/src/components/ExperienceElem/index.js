import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";


function ExperienceElem(props) {
    const StyledDiv = styled.div`
        &::before {
            background-color: ${props.themeColor}
        }
        &::after {
            background-color: ${props.themeColor}
        }

    `
    
    return (
        <StyledDiv className="exp-elem">
            <div className="years">
                <FontAwesomeIcon icon={faCalendar} />{props.years}
            </div>
            <div className="exp-elem-title">
                {props.title}
            </div>
            <div className="company-title">
                Company: {props.company}
            </div>
            <div className="exp-elem-text">
                {props.text}
            </div>
        </StyledDiv>
    );
}

export default ExperienceElem;