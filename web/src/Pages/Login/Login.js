import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import Api from '../../Services/Api';

import {
    Container
} from './styles';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido!')
        .required('Campo de e-mail é obrigatório!'),
    password: Yup.string()
        .required('Campo de senha é obrigatório!')
})

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    useEffect(() => {
        userLogged();
    });

    const userLogged = () => {
        const token = localStorage.getItem('phone_token');

        if(token){
            Api.defaults.headers.authorization = `Bearer ${token}`;
            history.push('/home');
        }
    }

    const handleLogin = async (e) => {
        const info = { email, password };

        try {
            const response = await Api.post('/session', info);

            Api.defaults.headers.authorization = `Bearer ${response.data.token}`;
            
            localStorage.setItem('phone_token', response.data.token);

            setEmail('');
            setPassword('');

            history.push('/home');
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Container>
            <Form schema={schema} onSubmit={handleLogin}>
                <div>
                    <label>Email</label>
                    <Input 
                        name="email"
                        type="text"
                        value={email}
                        onChange={text => setEmail(text.target.value)}
                    />
                </div>
                
                <div>
                    <label>Password</label>
                    <Input 
                        name="password"
                        type="password" 
                        value={password} 
                        onChange={text => setPassword(text.target.value)} 
                    />
                </div>

                <button type="submit">Login</button>

                <div>
                    <Link to='/register'>Não é cadastrado? Cadastre-se!</Link>
                </div>
            </Form>
        </Container>
    );
}