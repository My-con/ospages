import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.color.primary};

    display: flex;
    flex-direction: column
`