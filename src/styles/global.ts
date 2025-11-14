import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
        width: 22px;
        height: 22px;
        border-radius: 9999px;
        
        @media (max-width: 768px) {
          width: 8px;
          height: 8px;
        }
    }

  *::-webkit-scrollbar-corner {
      background-color: transparent;  
  }

  *::-webkit-scrollbar-thumb {
      width: 6px;
      background-color: transparent;
      border-radius: 80px;
      box-shadow: inset 0 0 0px 6px ${(props) => props.theme["green-300"]};
      border: solid 10px transparent;
      
      @media (max-width: 768px) {
        width: 3px;
        border: solid 2px transparent;
        box-shadow: inset 0 0 0px 3px ${(props) => props.theme["green-300"]};
      }
  }

  :root {
    font-size: 62.5%;
    
    @media (max-width: 768px) {
      font-size: 60%;
    }
    
    @media (max-width: 480px) {
      font-size: 58%;
    }
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
  }

  body {
    background: ${(props) => props.theme["gray-800"]};
    color: ${(props) => props.theme["gray-100"]};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font: 400 1.6rem Roboto, sans-serif;
  }
  
  /* Prevent horizontal scroll on mobile */
  html, body {
    max-width: 100%;
    overflow-x: hidden;
  }
  
  /* Improve touch targets on mobile */
  @media (max-width: 768px) {
    button, a, input, select {
      min-height: 44px;
    }
  }
`;
