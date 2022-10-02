import { createGlobalStyle } from "styled-components";
import { BackgroundColor } from "./Variables";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
}
::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-track-piece {
    border: 8px solid black;
}
::-webkit-scrollbar-thumb:vertical,
::-webkit-scrollbar-thumb:horizontal {
    background-color: "white"
}
body {
    background: ${BackgroundColor};
}
`;
