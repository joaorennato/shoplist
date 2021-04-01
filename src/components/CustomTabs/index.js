import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    TabArea, 
    TabItem, 
    TabItemFilled, 
    TabItemPreco, 
    PrecoContainer, 
    Preco
} from './style';

import AppContext from '../../contexts';

export default () => {

    const { state: appstate, dispatch } = useContext(AppContext);
    
    const handleModal = () => {
        dispatch({
            type: 'handleModal',
            payload: true
        })
    }

    const handleShowDone = (what) => {
        dispatch({
            type: 'handleShowDone',
            payload: what
        })
    }

    return (
        <TabArea>
            {appstate.show_done === false && <TabItem onPress={()=>{
                handleShowDone(true);
            }}>
                <Icon 
                    name="eye-slash" 
                    size={24} 
                    color="#1E8449"
                />
            </TabItem>}
            {appstate.show_done === true && <TabItem onPress={()=>{
                handleShowDone(false)
            }}>
                <Icon 
                    name="eye" 
                    size={26} 
                    color="#1E8449"
                />
            </TabItem>}
            <TabItemPreco>
                <PrecoContainer>
                    <Preco>{`R$ ${appstate.total}`}</Preco>
                </PrecoContainer>
            </TabItemPreco>
            <TabItemFilled onPress={handleModal}>
                <Icon 
                    name="plus-square" 
                    size={24} 
                    color="#FFFFFF" 
                />
            </TabItemFilled>
        </TabArea>
    );
}

