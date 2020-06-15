import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 20px;
    height: 800px;
    width: 100%;
    
    a{
        font-size: 20px;
        line-height: 24px;
        text-decoration: none;
        color: #9932cc
    }
`

export const List = styled.div`
    max-width: 800px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button{
        background-color: transparent;
    }
`