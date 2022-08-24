import "./index.scss";

export default function PDFViewier(props) {

    return (
        <div className="pdf-viewier">
            <embed src={props.file} type="application/pdf"></embed>        
        </div>
    );
}