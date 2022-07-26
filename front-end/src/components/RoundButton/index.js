import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";


export default function RoundButton(props) {
    return (
        <div className="round-btn" style={props.style}>
            <FontAwesomeIcon icon={ props.icon } />
        </div>
    );
}