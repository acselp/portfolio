import PageTitle from "../PageTitle";
import "./index.scss";


function Portfolio(props) {
    return (
        <>
            <PageTitle title="Portfolio" themeColor={props.themeColor} />
        </>
    );
}

export default Portfolio;