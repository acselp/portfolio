import "./index.scss";

export default function InfoCell(props) {

    return (
        <div className="info-cell">
            <b>{ props.title + ": " }</b> { props.content }
        </div>
    );
}