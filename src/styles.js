import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.mainColor};
    }
`;
export const Timeline = styled.h1`
 text-align: center;
  font-style:italic;
  font-family: "Bebas Neue", sans-serif;
`;
export const Title = styled.h2`
  font-style:italic;
  font-family: "Bebas Neue", sans-serif;
`;

export const Description = styled.h4`
  text-align: center;
`;
export const Location = styled.h5`
`;

