import "./index.scss";
import styled from "styled-components";



function PageTitle(props) {

    const StyledH1 = styled.h1`
        &:after {
            background-color: ${props.themeColor};
        }
        
        &:before {
            background-color: ${props.themeColor};
        }
    `

    return (
        <StyledH1 className="page-title-h1">
            { props.title }
        </StyledH1>
    );
}

export default PageTitle;