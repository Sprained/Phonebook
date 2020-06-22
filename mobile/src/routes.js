import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login/login';
import Register from './pages/Register/register';
import Home from './pages/Home/home';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name='login' component={Login} />
                <Stack.Screen name='register' component={Register} />
                <Stack.Screen name='home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}