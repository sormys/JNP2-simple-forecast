import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    }
`

export default GlobalStyle
