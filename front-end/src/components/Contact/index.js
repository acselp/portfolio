import PageTitle from "../PageTitle";
import "./index.scss";


function Contact(props) {
    return (
        <div className="contact">
            <PageTitle title="Contact" themeColor={ props.themeColor } />
        </div>
    );
}

export default Contact;