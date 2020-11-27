import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
   --grey-main: #2C2C2C;
   --grey-50: #5F5F5F;
   
   --orange-main: #FEA676;
   --orange-75: #FFC491;
   
   --secondary1: #96EDE3;
   --secondary2: #ed96a0;
  
   --white1: #f8f8f8; //Guyabano
   --white2: #f5f5f5; //Cultured
   --white3: #fef3f4; //Anti-flash white
   
  
   --size-xs: 4px;
   --size-s: 8px;
   --size-m: 12px;
   --size-l: 16px;
   --size-xl: 24px;
   --size-xxl: 32px;
   
  }

  * {
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    font-family: 'Nunito', sans-serif;
   
  }
  
  body{
    background-color: var(--white1);
     display: grid;
  }
   
  input, textarea {
    font-size: 1em;
    font-family: inherit;
  }
`;