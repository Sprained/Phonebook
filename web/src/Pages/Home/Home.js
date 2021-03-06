import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { MdClose } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

import Api from '../../Services/Api';

import { phoneMask, cleanMask } from '../../Utils/Maks';

import {
    Container,
    List
} from './styles';

const schema = Yup.object().shape({
    nome: Yup.string()
        .required('Campo de nome é obrigatorio!'),
    phone: Yup.string()
        .required('Campo de telefone é obrigatorio!')
})

export default function Home(){
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneList, setPhoneList] = useState([]);
    const [contador, setContador] = useState(true);

    const history = useHistory();

    useEffect(() => {
        userLogged();
        requestPhone();
    }, [contador]);

    //verificar se usuario ta logado
    const userLogged = () => {
        const token = localStorage.getItem('phone_token');
        if(!token){
            history.push('/');
        }
        Api.defaults.headers.authorization = `Bearer ${token}`;
    }

    //buscar numeros cadastrados
    const requestPhone = async () => {
        const response = await Api.get('/phonebook');

        setPhoneList(response.data);

        setContador(false);
    }

    const newPhone = async (e) => {
        const phoneClean = cleanMask(phone);
        const info = { name, phone: phoneClean };
        console.log(phoneClean);

        await Api.post('/phonebook', info);

        setName('');
        setPhone('');
        setContador(true);
    }

    const deletePhone = async (id) => {
        await Api.delete(`/phonebook/${id}`);

        setContador(true);
    }

    const wppNumber = async (phone) => {
        window.open(`https://api.whatsapp.com/send?phone=55${phone}`);
    }

    return(
        <Container>
            <Form schema={schema} onSubmit={newPhone}>
                <div>
                    <label>Nome</label>
                    <Input 
                        name="nome"
                        type="text" 
                        onChange={text => setName(text.target.value)}
                    />
                </div>

                <div>
                    <label>Telefone</label>
                    <Input
                        name="phone"
                        type="text"
                        value={phone}
                        onChange={text => setPhone(phoneMask(text.target.value))}
                    />
                </div>

                <button>Registrar</button>
            </Form>

            {
                phoneList.map(phone => 
                    <List>
                        <label>{phone.name}</label>
                        <label>{phoneMask(phone.phone)}</label>
                        <button
                            onClick={() => deletePhone(phone.id_phonebook)}
                        >
                            <MdClose
                                size={30}
                                color='#9932cc'
                            />
                        </button>
                        <button
                            onClick={() => wppNumber(phone.phone)}
                        >
                            <FaWhatsapp
                                size={30}
                                color='#9932cc'
                            />
                        </button>
                    </List>
                    )
            }
        </Container>
    );
}