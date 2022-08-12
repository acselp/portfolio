import Hexagon from "react-hexagon";
import "./index.scss";


export default function LanguageLevel(props) {

    let circStatus = [[1,0,0,0,0,0],
                      [1,1,0,0,0,0],
                      [1,1,1,0,0,0],
                      [1,1,1,1,0,0],
                      [1,1,1,1,1,0],
                      [1,1,1,1,1,1]];

    const statusDefault = ["active-circle", "inactive-circle"];




    function MapCircles(props) {

        switch(props.level) {
            case 'A1': {
                circStatus[0].map((circStatus) => {
                    return (
                        <div className={"circle " + statusDefault[circStatus]}></div>
                    );
                });
                break;
            }

            case 'A2': {
                circStatus[1].map((circStatus) => {
                    return (
                        <div className={"circle " + statusDefault[circStatus]}></div>
                    );
                });
                break;
            }

            case 'B1': {
                circStatus[2].map((circStatus) => {
                    return (
                        <div className={"circle " + statusDefault[circStatus]}></div>
                    );
                });
                break;
            }

            case 'B2': {
                circStatus[3].map((circStatus) => {
                    return (
                        <div className={"circle " + statusDefault[circStatus]}></div>
                    );
                });
                break;
            }

            case 'C1': {
                circStatus[4].map((circStatus) => {
                    return (
                        <div className={"circle " + statusDefault[circStatus]}></div>
                    );
                });
                break;
            }

            case 'C2': {
                circStatus[5].map((circStatus) => {
                    return (
                        <div className={"circle " + statusDefault[circStatus]}></div>
                    );
                });
                break;
            }
        }
    }


    

    return (
        <div className="level-container">

            <MapCircles level={props.level} />

        </div>
    );
}