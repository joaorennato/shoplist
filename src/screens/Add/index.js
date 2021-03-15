import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

import { 
    Container, 
    ListArea, 
    Campos, 
    AreaCampoInput, 
    Icone, 
    CampoInput, 
    PrecoInput, 
    Botao, 
    BotaoTexto 
} from './style'; 

import api from '../../api';
import { useEffect } from 'react';

export default () => {

    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');

    let nomeInput = null;

    const addNovoProduto = async () => {
        if(nome !== ''){

            const precoRaw = precoInput.getRawValue();
            let novoProduto;

            novoProduto = await api.addProduct(nome, quantidade == '' ? '1' : quantidade, isNaN(precoRaw) ? '0' : precoRaw);
            
            await api.setLista(novoProduto);

            setNome('');
            setQuantidade('');
            setPreco('');
            
            navigation.reset({
                routes: [{
                    name: 'MainTabs'
                }]
            });

        } else {
            Alert.alert('Atenção', 'Preencha o nome do produto!');
        }
    }

    useEffect(()=>{
        nomeInput.focus();
    },[]);

    return (
        <Container>
            <Header titulo="Adicionar Produto" showBackButton={true} />
            <ListArea>
                <Campos behavior={ Platform.OS === 'ios' ? 'padding' : 'margin' }>
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
                            returnKeyType={ Platform.OS === 'ios' ? 'done' : 'next' } 
                            ref={(input) => { quantidadeInput = input; }} 
                            onSubmitEditing={() => { precoInput.getElement().focus(); }} 
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
                            ref={(refInput) => { precoInput = refInput; }} 
                        />
                    </AreaCampoInput>
                    <Botao onPress={addNovoProduto}>
                        <BotaoTexto>Adicionar</BotaoTexto>
                    </Botao>
                </Campos>
            </ListArea>
        </Container>
    );
}