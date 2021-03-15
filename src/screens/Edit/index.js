import React, { useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
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

export default () => {

    const navigation = useNavigation();
    const route = useRoute();

    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');
    const [precoMasked, setPrecoMasked] = useState('');
    const [done, setDone] = useState(false);

    const setItems = () => {
        setId(route.params.id);
        setNome(route.params.nome);
        setQuantidade(`${route.params.quantidade}`);
        setPreco(route.params.preco);
        setPrecoMasked(route.params.preco);
    }

    const editCurrentProduto = async () => {
        if(id !== '' && nome !== ''){

            let novoProduto = {
                id: id,
                nome: nome,
                quantidade: quantidade == '' ? '1' : quantidade,
                preco: precoMasked
            };

            const produtos = await api.editProduct(novoProduto);
            await api.setLista(produtos);

            setId('');
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
        setItems();
        nomeInput.focus();
    },[]);

    return (
        <Container>
            <Header titulo="Editar Produto" showBackButton={true} />
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
                            includeRawValueInChangeText={true}
                            onChangeText={(text, masked)=>{
                                setPreco(text);
                                setPrecoMasked(masked);
                            }} 
                            keyboardType="decimal-pad" 
                            returnKeyType="done" 
                            ref={(refInput) => { precoInput = refInput; }} 
                        />
                    </AreaCampoInput>
                    <Botao onPress={editCurrentProduto}>
                        <BotaoTexto>Editar</BotaoTexto>
                    </Botao>
                </Campos>
            </ListArea>
        </Container>
    );
}