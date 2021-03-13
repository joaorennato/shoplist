import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';

import { Container, ListArea, Lista } from './style'; 
import ListItem from '../../components/ListItem';

import api from '../../api';

export default () => {

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

    const deleteItem = async (id) => {
        let novosProdutos = lista.filter(item => item.id !== id);
        await api.setLista(novosProdutos);
        getListas();
    }

    const toggleDone = async (id) => {
        let novosProdutos = await api.toggleDone(id);
        setNovosProdutos = await api.setLista(novosProdutos);
        getListas();
    }

    useEffect(()=>{
        getListas();
    }, []);

    return (
        <Container behavior={ Platform.OS === 'ios' ? 'padding' : 'margin' }>
            <Header titulo="Lista de Compras" />
            <ListArea>
                <Lista 
                    data={listaNotDone} 
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
        </Container>
    );
}