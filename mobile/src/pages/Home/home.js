import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { AsyncStorage, Linking } from 'react-native';

import { MaterialIcons, FontAwesome } from '@expo/vector-icons'

import Api from '../../services/api';

import { phoneMask, cleanMask } from '../../utils/mask';

import {
    Container,
    Form,
    Input,
    Label,
    Button,
    ButtonText
} from '../../global/global';

import {
    List, 
    LabelList,
    ButtonList
} from './styles';

export default function Home(){
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneList, setPhoneList] = useState([]);
    const [contador, setContador] = useState(true);

    const navigation = useNavigation();

    useEffect(() => {
        userLogged();
        requestPhone();
    }, [contador]);

    //verificar se usuario ta logado
    const userLogged = async () => {
        const token = await AsyncStorage.getItem('phone_token');
        if(!token){
            navigation.navigate('login');
        }
        Api.defaults.headers.authorization = `Bearer ${token}`;
    }

    //buscar numeros cadastrados
    const requestPhone = async () => {
        const response = await Api.get('/phonebook');

        setPhoneList(response.data);

        setContador(false);
    }

    const newPhone = async () => {
        const phoneClean = cleanMask(phone);
        const info = { name, phone: phoneClean };

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
        Linking.openURL(`whatsapp://send?phone=55${phone}`);
    }

    return(
        <Container>
            
            <Form>
                <Label>Nome</Label>
                <Input 
                    value={name}
                    onChangeText={setName}
                />
                    
                <Label>Telefone</Label>
                <Input 
                    autoCapitalize='none'
                    value={phone}
                    onChangeText={(text) => setPhone(phoneMask(text))}
                />

                <Button
                    onPress={() => newPhone()}
                >
                    <ButtonText>Registrar</ButtonText>
                </Button>
            </Form>

            {
                phoneList.map(phone =>
                    <List key={phone.id_phonebook}>
                        <LabelList>{phone.name}</LabelList>
                        <LabelList>{phoneMask(phone.phone)}</LabelList>

                        <ButtonList
                            onPress={() => deletePhone(phone.id_phonebook)}
                        >
                            <MaterialIcons
                                name="close"
                                size={20}
                                color='#9932cc'
                            />
                        </ButtonList>

                        <ButtonList
                            onPress={() => wppNumber(phone.phone)}
                        >
                            <FontAwesome
                                name="whatsapp"
                                size={20}
                                color='#9932cc'
                            />
                        </ButtonList>
                    </List>
                    )
            }
        </Container>
    )
}