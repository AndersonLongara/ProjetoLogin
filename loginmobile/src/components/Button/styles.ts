import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export const BackgroundButton = styled(LinearGradient).attrs({
    colors: ['#9D25B0', '#383E71'],
    useAngle: true, 
    angle: 80
})`
    
    width: 60%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

export const Container = styled(RectButton)`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: rgba(0,0,0,0);
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
`;
