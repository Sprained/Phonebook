import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Form = styled.View`
    width: 80%;
`

export const Label = styled.Text`
    color: #9932cc;
    font-size: 18px;
    line-height: 24px;
`
export const Input = styled.TextInput`
    color: #9932cc;
    font-size: 16px;
    line-height: 24px;

    border: none;
    border-bottom-width: 1px;
    border-color: #bf40bf;
    margin-bottom: 40px;
`

export const Button = styled.TouchableOpacity`
    width: 100%;
    border-radius: 4px;
    background-color: #bf40bf;
    padding: 7px;
`

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 20px;
    line-height: 24px;
    border: none;
    text-align: center;
`