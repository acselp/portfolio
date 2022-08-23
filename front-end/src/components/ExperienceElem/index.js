import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function ExperienceElem(props) {
    return (
        <div className="exp-elem">
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
        </div>
    );
}

export default ExperienceElem;