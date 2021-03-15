import React, { useEffect, useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useNavigation } from '@react-navigation/native';

import { Container, ListArea, Lista, TotalArea, TextBold, TextNormal } from './style'; 

import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import ListItemBack from '../../components/ListItemBack';

import api from '../../api';

export default () => {

    const navigation = useNavigation();

    const [lista, setLista] = useState({});
    const [total, setTotal] = useState('');

    const getLista = async () => {
        let produtos = await api.getLista();
        setLista(produtos);
        getTotal();
    }

    const getTotal = async () => {
        let valor = await api.getTotal();
        setTotal(valor);
    }

    const deleteItem = async (id) => {
        let novosProdutos = lista.filter(item => item.id !== id);
        await api.setLista(novosProdutos);
        getLista();
    }

    const editItem = (item) => {
        navigation.navigate('Edit', {
            id: item.id,
            nome: item.nome,
            quantidade: item.quantidade,
            preco: item.preco
        });
    }

    const toggleDone = async (item) => {
        let novosProdutos = await api.toggleDone(item.id);
        setNovosProdutos = await api.setLista(novosProdutos);
        getLista();
    }

    useEffect(()=>{
        getLista();
    }, []);

    return (
        <Container behavior={ Platform.OS === 'ios' ? 'padding' : 'margin' }>
            <Header titulo="Total de Compras" />
            <ListArea>
                <SwipeListView 
                    data={lista} 
                    keyExtractor={data => `${data.id}`} 
                    renderItem={(data, rowMap) => <ListItem 
                        id={data.item.id} 
                        nome={data.item.nome} 
                        quantidade={data.item.quantidade} 
                        preco={data.item.preco} 
                        done={data.item.done} 
                        onPress={()=>toggleDone(data.item)}
                    />} 
                    renderHiddenItem={ (data, rowMap) => <ListItemBack onDelete={()=>deleteItem(data.item.id)} onEdit={()=>editItem(data.item)} />}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                />
            </ListArea>
            <TotalArea>
                <TextBold>Total:</TextBold>
                <TextNormal>R$ { total }</TextNormal>
            </TotalArea>
        </Container>
    );
}