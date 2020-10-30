import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${ ({theme}) => theme.colors.MainBackgroundColor };
        color: ${({theme}) => theme.colors.textColor};
    }
`;