import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: 0;
    }

    body {
        background-color: #FFF;
        font-family: 'Roboto', sans-serif;
    }

    html, input, button, textarea{
        font-family: 'Roboto', sans-serif;
    }
`