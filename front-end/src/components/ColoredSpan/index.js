import styled from "styled-components";
import "./index.scss";

export default function ColoredSpan(props) {

    let StyledSpan = styled.span`
        color: ${ props.color }
    `

    return (
        <StyledSpan className="colored-header">
            { props.text }
        </StyledSpan>
    );
}