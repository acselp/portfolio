import "./index.scss";
import ExperienceElem from "../EducationElem";

function Experience(props) {

    return (
        <div className="exp-edc-blok">
            <h2>{ props.title }</h2>
            
            <div className="main-blok">
                
            {   props.positions.map((position) => {
                    return position;
                })
            }
            </div>
        </div>
    );
}

export default Experience;