import Hexagon from "react-hexagon";
import "./index.scss";


export default function LanguageLevel(props) {

    let circStatus = [[1,0,0,0,0,0],
                      [1,1,0,0,0,0],
                      [1,1,1,0,0,0],
                      [1,1,1,1,0,0],
                      [1,1,1,1,1,0],
                      [1,1,1,1,1,1]];

    const statusDefault = ["inactive-circle", "active-circle"];
    const levelTitle = ['Elementery', 'Pre intermediate', 'Intermediate', 'Upper intermediate', 'Advanced', 'Native'];



    function MapCircles(props) {
        switch(props.level) {
            case 'A1': {
                return circStatus[0].map((circStat) => {
                    return (
                        <div className={"circle " + statusDefault[circStat]}></div>
                    );
                });
            }

            case 'A2': {
                return circStatus[1].map((circStat) => {
                    return (
                        <div className={"circle " + statusDefault[circStat]}></div>
                    );
                });
            }

            case 'B1': {
                return circStatus[2].map((circStat) => {
                    return (
                        <div className={"circle " + statusDefault[circStat]}></div>
                    );
                });
            }

            case 'B2': {
                return circStatus[3].map((circStat) => {
                    return (
                        <div className={"circle " + statusDefault[circStat]}></div>
                    );
                });
            }

            case 'C1': {
                return circStatus[4].map((circStat) => {
                    return (
                        <div className={"circle " + statusDefault[circStat]}></div>
                    );
                });
            }

            case 'C2': {
                return circStatus[5].map((circStat) => {
                    return (
                        <div className={"circle " + statusDefault[circStat]}></div>
                    );
                });
            }
        }
    }

    function LevelTitle(props) {
        switch(props.level) {
            case 'A1': 
                return levelTitle[0];
            case 'A2':
                return levelTitle[1];
            case 'B1': 
                return levelTitle[2];
            case 'B2': 
                return levelTitle[3];
            case 'C1': 
                return levelTitle[4];
            case 'C2':
                return levelTitle[5];
        }
    }
    

    return (
        <div className="level-container">

            {/* <MapCircles level={props.level} /> */}

            <div className="level-text">
                <div className="language-title">
                    {props.title}
                </div>
                <div className="level-title">
                    <LevelTitle level={props.level} /> {" " + props.level}
                </div>
            </div>

            <div className="circles">
                <MapCircles level={props.level} />
            </div>
        </div>
    );
}