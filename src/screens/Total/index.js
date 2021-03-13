import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';

import { Container, ListArea, Lista, TotalArea, TextBold, TextNormal } from './style'; 
import ListItem from '../../components/ListItem';

import api from '../../api';

export default () => {

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

    const toggleDone = async (id) => {
        let novosProdutos = await api.toggleDone(id);
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
                <Lista 
                    data={lista} 
                    renderItem={({item}) => <ListItem 
                        id={item.id} 
                        nome={item.nome} 
                        quantidade={item.quantidade} 
                        preco={item.preco} 
                        done={item.done} 
                        onPress={()=>toggleDone(item.id)} 
                        onLongPress={()=>deleteItem(item.id)}
                    />} 
                    keyExtractor={item => item.id.toString() }
                />
            </ListArea>
            <TotalArea>
                <TextBold>Total:</TextBold>
                <TextNormal>R$ { total }</TextNormal>
            </TotalArea>
        </Container>
    );
}