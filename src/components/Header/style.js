import styled from 'styled-components/native';

export const HeaderArea = styled.View`
    width: 100%;
    position: relative;
`;

export const HeaderImage = styled.Image.attrs({
    resizeMode: 'cover'
})`
    width: 100%;
    height: 130px;
    z-index: 4;
`;

export const HeaderTitleArea = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 10px 20px;
    align-items: center;
    justify-content: space-between;
    background-color: #1E8449;
`;

export const HeaderTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;