import React, { useContext, useEffect } from 'react';
import Image from 'react-native-scalable-image';

import { useNavigation } from '@react-navigation/native';

import {
    Container, Loading
} from './styles';

import AppContext from '../../contexts';
import { Api } from '../../data';

export default () => {

    const navigation = useNavigation();
    const { dispatch } = useContext(AppContext);

    useEffect(async ()=>{

        let initialState = await Api.getDados();
        
        Api.setDados(initialState);
        
        dispatch({
            type: 'setDados',
            payload: initialState
        });
        
        dispatch({
            type: 'handleTotal',
            payload: true
        });
        
        setTimeout(()=>{
            navigation.reset({
                routes: [{
                    name: 'MainTabs'
                }]
            });
        }, 500)
    },[]);

    return (
        <Container>
            <Image
                width={200} 
                source={require('../../assets/icon-square.png')} 
            />
        </Container>
    );
}