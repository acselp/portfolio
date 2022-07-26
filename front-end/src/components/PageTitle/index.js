import "./index.scss";
import { ThemeColor } from "../../colors";

function PageTitle(props) {
    return (
        <h1 className="page-title-h1" style={{ color: ThemeColor }}>
            { props.title }
        </h1>
    );
}

export default PageTitle;