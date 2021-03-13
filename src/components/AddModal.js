import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInputMask } from 'react-native-masked-text';

import api from '../api';

export default ({showModal, setShowModal}) => {

    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');

    const addNovoProduto = async () => {
        if(nome !== ''){

            const precoRaw = precoInput.getRawValue();

            let novoProduto = await api.addProduct(nome, quantidade == '' ? '1' : quantidade, isNaN(precoRaw) ? '0' : precoRaw);
            
            await api.setLista(novoProduto);

            setNome('');
            setQuantidade('');
            setPreco('');

            setShowModal(false);
            
            navigation.reset({
                routes: [{
                    name: 'Home'
                }]
            });

        } else {
            Alert.alert('Atenção', 'Preencha o nome do produto!');
        }
    }

    return (
        <Modal visible={showModal} transparent={true} animationType="slide" onShow={()=>this.nomeInput.focus()}>
            <ModalArea behavior={ Platform.OS === 'ios' ? 'padding' : 'margin' }>
                <ModalBody>
                    <TituloArea>
                        <TituloButton onPress={()=>setShowModal(false)}>
                            <Icone name="arrow-left" size={24} color="#FFFFFF" />
                        </TituloButton>
                        <Titulo>Adicionar</Titulo>
                    </TituloArea>
                    <Campos>
                        <AreaCampoInput>
                            <Icone name="arrow-circle-right" size={24} color="#1E8449" />
                            <CampoInput 
                                placeholder="Informe o produto" 
                                placeholderTextColor="#0D6631" 
                                value={nome} 
                                onChangeText={t=>setNome(t)} 
                                returnKeyType="next" 
                                ref={(input) => { nomeInput = input; }} 
                                onSubmitEditing={() => { quantidadeInput.focus(); }} 
                                blurOnSubmit={false}
                            />
                        </AreaCampoInput>

                        <AreaCampoInput>
                            <Icone name="arrow-circle-right" size={24} color="#1E8449" />
                            <CampoInput 
                                placeholder="Informe a quantidade" 
                                placeholderTextColor="#0D6631" 
                                value={quantidade} 
                                onChangeText={t=>setQuantidade(t)} 
                                keyboardType="number-pad" 
                                returnKeyType="next" 
                                ref={(input) => { quantidadeInput = input; }} 
                                onSubmitEditing={() => { precoInput.focus(); }} 
                                blurOnSubmit={false}
                            />
                        </AreaCampoInput>
                        
                        <AreaCampoInput>
                            <Icone name="arrow-circle-right" size={24} color="#1E8449" />
                            <PrecoInput 
                                type={'money'}
                                placeholder="Informe o preço" 
                                placeholderTextColor="#0D6631" 
                                value={preco} 
                                onChangeText={t=>setPreco(t)} 
                                keyboardType="decimal-pad" 
                                returnKeyType="done" 
                                ref={(input) => { precoInput = input; }} 
                            />
                        </AreaCampoInput>
                        <Botao onPress={addNovoProduto}>
                            <BotaoTexto>Adicionar</BotaoTexto>
                        </Botao>
                    </Campos>
                </ModalBody>
            </ModalArea>
        </Modal>
    );
}

const Modal = styled.Modal``;

const ModalArea = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    background-color: rgba(0,0,0,.5);
`;

const ModalBody = styled.View`
    width: 100%;
    min-height: 200px;
    background-color: #89BF9F;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`;

const TituloArea = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px 30px 10px;
`;

const TituloButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
`;

const Titulo = styled.Text`
    width: 100%;
    font-size: 32px;
    font-weight: 700;
    color: #FFFFFF;
`;

const Campos = styled.View`
    width: 100%;
    padding: 0 20px;
`;

const AreaCampoInput = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;
    border-radius: 10px;
    margin-bottom: 15px;
`;

const Icone = styled(Icon)`
    padding-left: 10px;
`;

const CampoInput = styled.TextInput`
    width: 100%;
    height: 50px;
    padding: 0 10px;
    color: #1E8449;
    font-size: 16px;
`;

const PrecoInputTemplate = styled(TextInputMask)``;

const PrecoInput = styled(PrecoInputTemplate)`
    width: 100%;
    height: 50px;
    padding: 0 10px;
    color: #1E8449;
    font-size: 16px;
`;

const Botao = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #1E8449;
    border-radius: 10px;
    margin-bottom: 30px;
    margin-top: 15px;
`;

const BotaoTexto = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
    font-weight: 700;
    text-transform: uppercase;
`;