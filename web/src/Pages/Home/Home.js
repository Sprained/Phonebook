import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { MdClose } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

import {
    Container,
    List
} from './styles';

export default function Home(){
    return(
        <Container>
            <Form>
                <div>
                    <label>Nome</label>
                    <Input 
                        name="nome"
                        type="text" 
                    />
                </div>

                <div>
                    <label>Telefone</label>
                    <Input
                        name="phone"
                        type="text"
                    />
                </div>

                <button>Registrar</button>
            </Form>

            <List>
                <label>teste</label>
                <button>
                    <MdClose
                        size={30}
                        color='#9932cc'
                    />
                </button>
                <button>
                    <FaWhatsapp
                        size={30}
                        color='#9932cc'
                    />
                </button>
            </List>
        </Container>
    );
}