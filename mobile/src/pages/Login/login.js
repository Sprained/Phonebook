import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity, AsyncStorage } from 'react-native';

import Api from '../../services/api';

import {
    Container,
    Form,
    Label,
    Input,
    Button,
    ButtonText
} from '../../global/global';

import {
    ButtonCadastro
} from './styles';

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        userLogged();
    });

    const userLogged = async () =>{
        const token =  await AsyncStorage.getItem('phone_token');

        if(token){
            Api.defaults.headers.authorization = `Bearer ${token}`;
            navigation.navigate('home');
        }
    }

    const handleLogin = async () => {
        const info = { email, password };

        try {
            const response = await Api.post('/session', info);

            Api.defaults.headers.authorization = `Bearer ${response.data.token}`;
            
            await AsyncStorage.setItem('phone_token', response.data.token);

            navigation.navigate('home');
        } catch (error) {
            console.log(error);
        }
    } 

    return(
        <Container>
            <Form>
                <Label>Email</Label>
                <Input
                    autoCapitalize='none'
                    value={email}
                    onChangeText={setEmail}
                />

                <Label>Senha</Label>
                <Input
                    autoCapitalize='none'
                    value={password} 
                    onChangeText={setPassword}
                />

                <Button
                    onPress={() => handleLogin()}
                >
                    <ButtonText>Login</ButtonText>
                </Button>
                    
                <TouchableOpacity
                    onPress={() => navigation.navigate('register')}
                >
                    <ButtonCadastro>Não é cadastrado? Cadastre-se!</ButtonCadastro>
                </TouchableOpacity>
            </Form>
        </Container>
    )
}