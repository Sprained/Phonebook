import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';

import Api from '../../services/api';

import {
    Container,
    Form,
    Label,
    Input,
    Button,
    ButtonText
} from '../../global/global';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [repeat, setRepeat] = useState('');

    const navigation = useNavigation();

    const handleRegister = async () => {
        const info = { name, email, password }

        // if(password != repeat){
        //     return <h1>Senhas diferentes!</h1>
        // }

        try {
            const response = await Api.post('/users', info);

            Api.defaults.headers.authorization = `Bearer ${response.data.token}`;
            
            await AsyncStorage.setItem('phone_token', response.data.token);

            navigation.navigate('home');
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Container>
            <Form>
                <Label>Nome</Label>
                <Input 
                    value={name}
                    onChangeText={setName}
                />

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

                <Label>Repita a senha</Label>
                <Input 
                    autoCapitalize='none'
                    // onChange={text => setRepeat(text.target.value)}
                />

                <Button
                    onPress={() => handleRegister()}
                >
                    <ButtonText>Cadastar</ButtonText>
                </Button>
            </Form>
        </Container>
    )
}