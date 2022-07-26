import "./index.scss";

function PageTitle(props) {
    return (
        <h1 className="page-title-h1">
            { props.title }
        </h1>
    );
}

export default PageTitle;