import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.View`
    flex: 1;
    background-color: #FFFFFF;
`;

export const Texto = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const ListArea = styled.View`
    flex: 1;
    background-color: #FFFFFF;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: -20px;
    padding: 20px 0 0 0;
    z-index: 10;
`;

export const Campos = styled.View`
    width: 100%;
    padding: 0 20px;
`;

export const AreaCampoInput = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    border: 1px solid #89BF9F;
    background-color: #FFFFFF;
    border-radius: 10px;
    margin-bottom: 15px;
`;

export const Icone = styled(Icon)`
    padding-left: 10px;
`;

export const CampoInput = styled.TextInput`
    width: 100%;
    height: 50px;
    padding: 0 10px;
    color: #1E8449;
    font-size: 16px;
`;

export const PrecoInputTemplate = styled(TextInputMask)``;

export const PrecoInput = styled(PrecoInputTemplate)`
    width: 100%;
    height: 50px;
    padding: 0 10px;
    color: #1E8449;
    font-size: 16px;
`;

export const Botao = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #1E8449;
    border-radius: 10px;
    margin-bottom: 30px;
    margin-top: 15px;
`;

export const BotaoTexto = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
    font-weight: 700;
    text-transform: uppercase;
`;