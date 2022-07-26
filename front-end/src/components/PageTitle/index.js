import "./index.scss";
import { ThemeColor } from "../../colors";
import styled from "styled-components";

const StyledH1 = styled.h1`
    &:after {
        background-color: ${ThemeColor}
    }
    
    &:before {
        background-color: ${ThemeColor}
    }
`

function PageTitle(props) {
    return (
        <StyledH1 className="page-title-h1">
            { props.title }
        </StyledH1>
    );
}

export default PageTitle;