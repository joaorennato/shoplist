import React, { useContext, useState } from 'react';
import { Alert, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Modal, Fundo, Janela, JanelaInner, Titulo, InfosArea, CampoArea, Campo, CampoQuantidade, CampoNome, CampoPreco, Botao, BotaoTexto, CloseButton
} from './style';

import AppContext from '../../contexts';

export default () => {

    const { state, dispatch } = useContext(AppContext);
    const [id, setId] = useState(state.is_edit ? state.edit_item.id : '');
    const [nome, setNome] = useState(state.is_edit ? state.edit_item.nome : '');
    const [quantidade, setQuantidade] = useState(state.is_edit ? state.edit_item.quantidade : '');
    const [preco, setPreco] = useState(state.is_edit ? state.edit_item.preco : '');
    const [precoMasked, setPrecoMasked] = useState(state.is_edit ? state.edit_item.preco : '');

    let nomeInput = null;
    
    const handleOperation = () => {

        //console.log(precoMasked);

        if(!nome || nome == ''){
            Alert.alert('Atenção','Preencha o nome!');
            return;
        }

        let newItem = {
            id: state.is_edit ? id : Math.random()*100000,
            quantidade: quantidade === 0 || quantidade === '' || quantidade === undefined ? '1' : quantidade,
            nome: nome,
            preco: isNaN(precoMasked) || precoMasked == '' ? '0' : precoMasked,
            done: false
        }

        dispatch({
            type: state.is_edit ? 'handleEditProduto' : 'handleAddNewProduto', 
            payload: newItem
        });

        dispatch({
            type: 'handleTotal',
            payload: true
        })

        handleCloseModal();
    }



    const handleCloseModal = () => {
        setId('');
        setNome('');
        setQuantidade('');
        setPreco('');
        setPrecoMasked('');

        dispatch({
            type:'setEditItem',
            payload: {}
        });
        
        dispatch({
            type:'handleIsEdit',
            payload: false
        });

        dispatch({
            type:'handleModal',
            payload: false
        });
    }

    return (
        <Modal 
            animationType="slide"
            transparent={true}
            visible={state.show_modal} 
            onShow={() => {
                if(state.is_edit){
                    setId(state.edit_item.id);
                    setNome(state.edit_item.nome);
                    setQuantidade(state.edit_item.quantidade.toString());
                    setPreco(state.edit_item.preco);
                    setPrecoMasked(state.edit_item.preco);
                }
                nomeInput.focus();
            }}
        >
            <Fundo behavior={Platform.OS === 'ios' ? 'padding' : 'height' }>
                <Janela>
                    <Titulo>{ state.is_edit ? 'Alterar Produto' : 'Adicionar Produto' }</Titulo>
                    <JanelaInner>
                        <InfosArea>
                            <CampoArea>
                                <CampoNome placeholder="Produto" 
                                    placeholderTextColor="#0D6631" 
                                    value={nome} 
                                    onChangeText={nome => setNome(nome)} 
                                    returnKeyType="next" 
                                    ref={(input) => { nomeInput = input; }} 
                                    onSubmitEditing={() => { quantidadeInput.focus(); }} 
                                    blurOnSubmit={false} />
                            </CampoArea>

                            <CampoArea>
                                <CampoQuantidade placeholder="Quantidade" 
                                    placeholderTextColor="#0D6631" 
                                    value={quantidade} 
                                    onChangeText={quantidade => setQuantidade(quantidade)} 
                                    keyboardType="number-pad" 
                                    returnKeyType="next" 
                                    ref={(input) => { quantidadeInput = input; }} 
                                    onSubmitEditing={() => { precoInput.getElement().focus(); }} 
                                    blurOnSubmit={false} />

                                <CampoPreco type={'money'}
                                    placeholder="Preço" 
                                    placeholderTextColor="#0D6631" 
                                    value={preco} 
                                    includeRawValueInChangeText={true}
                                    onChangeText={(text, masked)=>{
                                        setPreco(text);
                                        setPrecoMasked(masked);
                                    }} 
                                    keyboardType="decimal-pad" 
                                    returnKeyType="done" 
                                    ref={(refInput) => { precoInput = refInput; }} />
                            </CampoArea>

                            <Botao onPress={handleOperation}>
                                <BotaoTexto>{ state.is_edit ? 'Alterar' : 'Adicionar' }</BotaoTexto>
                            </Botao>
                        </InfosArea>
                    </JanelaInner>
                    <CloseButton onPress={handleCloseModal}>
                        <Icon name="close" size={24} color="#FFFFFF" />
                    </CloseButton>
                </Janela>
            </Fundo>
        </Modal>
    );
}

