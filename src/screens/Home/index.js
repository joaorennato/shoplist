import React, { useContext, useEffect } from 'react';
import { Alert } from 'react-native';

import Header from '../../components/Header';
import ListItem from '../../components/ListItem';

import { Container, ListArea, Spacer } from './style'; 

import AppContext from '../../contexts';

export default () => {

    const { state, dispatch } = useContext(AppContext);

    const handleShowPrompt = (item) => {
        Alert.alert(
            'O que deseja fazer?',
            '',
            [
                {
                    'text': 'Editar',
                    onPress: () => {
                        handleEdit(item)
                    }
                },
                {
                    'text': 'Excluir',
                    onPress: () => {
                        handleDelete(item)
                    },
                    'style': 'destructive'
                },
                {
                    'text': 'Cancelar',
                    onPress: () => {},
                    'style': 'cancel'
                },
            ]
        );
    }

    const handleToggleDone = (item) => {
        dispatch({
            type: 'handleToggleDone',
            payload: {
                id: item.id,
                done: !item.done
            }
        });
        dispatch({
            type: 'handleTotal',
            payload: true
        })
    }

    const handleEdit = (item) => {
        dispatch({
            type: 'setEditItem',
            payload: item
        });

        dispatch({
            type: 'handleIsEdit',
            payload: true
        });

        dispatch({
            type: 'handleModal',
            payload: true
        });
    }


    const handleDelete = (item) => {
        dispatch({
            type: 'handleDeleteProduto', 
            payload: item.id
        });

        dispatch({
            type: 'handleTotal',
            payload: true
        })
    }

    useEffect(()=>{
        //console.log(state);
    }, []);

    return (
        <Container>
            <Header titulo="Lista de Compras" />
            <ListArea>
                {state.produtos.length > 0 && state.produtos.map((item,key) => {
                    
                    if(state.show_done === false && item.done === true) return;
                    
                    return (
                        <ListItem 
                            key={key} 
                            item={item}
                            onPress={()=>{
                                handleToggleDone(item)
                            }} 
                            onLongPress={()=>{
                                handleShowPrompt(item)
                            }} />
                    )

                })}
                <Spacer />
            </ListArea>
        </Container>
    );
}