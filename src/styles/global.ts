import { createGlobalStyle } from 'styled-components'

export const Globalstyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['base-border']} ;
    }
    
    body {
        background-color: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
        
    }
    body, input, textarea, button{
        font: 400 1rem  Nunito, sans-serife; // para econizar e deixar mais simples
        
}
`
