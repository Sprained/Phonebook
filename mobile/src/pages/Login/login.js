import React from 'react';

import { TouchableOpacity, View, Text, TextInput } from 'react-native';

import {
    Container,
    Form,
    Label,
    Input,
    Button,
    ButtonText,
    ButtonCadastro
} from './styles'

export default function Login(){
    return(
        <Container>
            <Form>
                <View>
                    <Label>Email</Label>
                    <Input
                    />
                </View>

                <View>
                    <Label>Senha</Label>
                    <Input
                    />
                </View>

                <Button>
                    <ButtonText>Login</ButtonText>
                </Button>
                    
                <TouchableOpacity>
                    <ButtonCadastro>Não é cadastrado? Cadastre-se!</ButtonCadastro>
                </TouchableOpacity>
            </Form>
        </Container>
    )
}