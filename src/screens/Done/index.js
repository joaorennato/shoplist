import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SwipeListView } from 'react-native-swipe-list-view';

import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import ListItemBack from '../../components/ListItemBack';

import { Container, ListArea } from './style'; 

import api from '../../api';

export default () => {

    const navigation = useNavigation();

    const [listaDone, setListaDone] = useState({});
    const [listaNotDone, setListaNotDone] = useState({});
    
    const getListas = () => {
        getListaDone();
        getListaNotDone();
    }

    const getListaDone = async () => {
        let produtos = await api.getLista();
        produtos = produtos.filter(item => item.done === true);
        setListaDone(produtos);
    }

    const getListaNotDone = async () => {
        let produtos = await api.getLista();
        produtos = produtos.filter(item => item.done === false);
        setListaNotDone(produtos);
    }

    const editItem = (item) => {
        navigation.navigate('Edit', {
            id: item.id,
            nome: item.nome,
            quantidade: item.quantidade,
            preco: item.preco
        });
    }

    const deleteItem = async (id) => {
        let novosProdutos = lista.filter(item => item.id !== id);
        await api.setLista(novosProdutos);
        getListas();
    }

    const toggleDone = async (item) => {
        let novosProdutos = await api.toggleDone(item.id);
        setNovosProdutos = await api.setLista(novosProdutos);
        getListas();
    }

    useEffect(()=>{
        getListas();
    }, []);

    return (
        <Container behavior={ Platform.OS === 'ios' ? 'padding' : 'margin' }>
            <Header titulo="Produtos Comprados" />
            <ListArea>
                <SwipeListView 
                    data={listaDone} 
                    keyExtractor={data => `${data.id}`} 
                    renderItem={(data, rowMap) => <ListItem 
                        id={data.item.id} 
                        nome={data.item.nome} 
                        quantidade={data.item.quantidade} 
                        preco={data.item.preco} 
                        done={data.item.done} 
                        onPress={()=>toggleDone(data.item)}
                        onLongPress={()=>editItem(data.item)} 
                    />} 
                    renderHiddenItem={ (data, rowMap) => <ListItemBack onDelete={()=>deleteItem(data.item.id)} onEdit={()=>editItem(data.item)} />}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                />
            </ListArea>
        </Container>
    );
}