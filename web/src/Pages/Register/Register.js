import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import Api from '../../Services/Api';

import {
    Container
} from './styles';

const schema = Yup.object().shape({
    nome: Yup.string()
        .required('Campo de nome é obrigatorio!'),
    email: Yup.string()
        .email('Insira um e-mail válido!')
        .required('Campo de e-mail é obrigatório!'),
    password: Yup.string()
        .required('Campo de senha é obrigatório!'),
    repeat: Yup.string()
        .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais!')
});

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleRegister = async (e) => {
        // e.preventDefault();

        const info = { name, email, password }

        try {
            const response = await Api.post('/users', info);

            history.push('/');
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Container>
            <Form schema={schema} onSubmit={handleRegister}>
                <div>
                    <label>Nome</label>
                    <Input 
                        name="nome"
                        type="text"
                        onChange={text => setName(text.target.value)}
                    />
                </div>

                <div>
                    <label>Email</label>
                    <Input 
                        name="email"
                        type="text"
                        onChange={text => setEmail(text.target.value)}
                    />
                </div>
                
                <div>
                    <label>Senha</label>
                    <Input 
                        name="password"
                        type="password"
                        onChange={text => setPassword(text.target.value)}
                    />
                </div>

                <div>
                    <label>Repita a senha</label>
                    <Input 
                        name="repeat"
                        type="password"
                    />
                </div>

                <button type="submit">Cadastrar</button>
            </Form>
        </Container>
    );
}