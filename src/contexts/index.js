import React, { createContext, useReducer } from 'react';
import initialState, { Api } from '../data';

const AppContext = createContext({});

const actions = {
    setDados(state, action){
        Api.setDados(action.payload);
        return action.payload
    },
    handleShowDone(state, action){
        let newState = {...state, show_done: action.payload};
        Api.setDados(newState);
        return {
            ...state,
            show_done: action.payload
        }
    },
    handleIsEdit(state, action){
        let newState = {...state, is_edit: action.payload};
        Api.setDados(newState);
        return {
            ...state,
            is_edit: action.payload
        }
    },
    setEditItem(state, action){
        let newState = {...state, edit_item: action.payload};
        Api.setDados(newState);
        return {
            ...state,
            edit_item: action.payload
        }
    },
    handleModal(state, action){
        let newState = {...state, show_modal: action.payload};
        Api.setDados(newState);
        return {
            ...state,
            show_modal: action.payload
        }
    },
    handleAddNewProduto(state, action){
        let newState = {...state, produtos: [action.payload, ...state.produtos]};
        Api.setDados(newState);
        return {
            ...state,
            produtos: [action.payload, ...state.produtos]
        }
    },
    handleEditProduto(state, action){
        let produto = action.payload;
        state.produtos.forEach(item => {
            if(item.id === produto.id){
                item.nome = produto.nome;
                item.quantidade = produto.quantidade;
                item.preco = produto.preco
            }
        });
        let newState = {...state, produtos: state.produtos};
        Api.setDados(newState);
        return {
            ...state,
            produtos: state.produtos
        }
    },
    handleDeleteProduto(state, action){
        item = action.payload;
        let newState = {...state, produtos: state.produtos.filter(i => i.id !== item)};
        Api.setDados(newState);
        return {
            ...state,
            produtos: state.produtos.filter(i => i.id !== item)
        }
    },
    handleToggleDone(state, action){
        let produto = action.payload;
        state.produtos.forEach(item => {
            if(item.id === produto.id){
                item.done = produto.done;
            }
        });
        let newState = {...state, produtos: state.produtos};
        Api.setDados(newState);
        return {
            ...state,
            produtos: state.produtos
        }
    },
    handleTotal(state, action){
        let total = 0;
        state.produtos.map((item)=>(
            total = total + (parseInt(item.quantidade)*parseFloat(item.preco))
        ));

        total = parseFloat(total).toFixed(2);
        let newState = {...state, total: total};
        Api.setDados(newState);
        return {
            ...state,
            total: total
        }

    }
}

export const AppProvider = props => {

    function reducer(state, action){
        const fn = actions[action.type];
        return fn ? fn(state, action) : state;
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{
            state, dispatch
        }}>
            { props.children }
        </AppContext.Provider>
    );
}

export default AppContext;