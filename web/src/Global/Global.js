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

    form{
        width: 100%;
        max-width: 800px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    button{
        width: 100%;
        border-radius: 4px;
        background: #bf40bf;
        padding: 7px;
        color: #fff;
        font-size: 20px;
        line-height: 24px;
        outline: none;
        border: none;
    }

    label{
        color: #9932cc;
        font-size: 20px;
        line-height: 24px;
    }

    input{
        color: #9932cc;
        font-size: 20px;
        line-height: 24px;

        border: none;
        border-bottom: 1px solid #bf40bf;
    }

    span{
        color: #ff0000;
    }

    div{
        margin: 20px auto;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`