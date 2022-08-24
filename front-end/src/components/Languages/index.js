import "./index.scss";

function Languages(props) {
    return (
        <div className="languages">
            <div className="lang-header">
                Languages
            </div>
            <div className="languages-container">
                {props.languages.map((language) => {
                    return language;
                })}
            </div>
        </div>
    );
}

export default Languages;