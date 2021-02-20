import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient';
import { Form } from '@unform/mobile';

import { Dimensions, PixelRatio } from 'react-native';

interface Content {
  isFocused: boolean;
}

const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100
  );
};

const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(
    (screenHeight * parseFloat(heightPercent)) / 100
  );
};

export const Container = styled.ScrollView`
    height: ${heightPercentageToDP('100%')}px;
    background:#fff;
`;

export const Image = styled.Image`
    flex: 1;
    position: absolute;
`;

export const Content = styled.View<Content>`
    height: ${heightPercentageToDP('100%')}px;
    width: 100%;
    justify-content: ${props => props.isFocused ? 'flex-start': 'center'};
    align-items: center;
`;

export const Background = styled(LinearGradient).attrs({
    colors: ['rgba(0, 0, 0, 0)', '#130525'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0.6 },
})`
    height: ${heightPercentageToDP('100%')}px;
    align-items: center;
`;

export const ContainerLogin = styled(Form)`
    background: #fff;
    width: 80%;
    height: ${heightPercentageToDP('55%')}px;
    border-radius: 10px;
`;

export const ContainerTitle = styled.View`
    flex: 2.3;
    justify-content: center;
    align-items: center;
    
`;

export const Titulo = styled.Text`
    font-family: 'MontSerrat';
    font-size: 24px;
    width: 50%;
    color: #383E71;
    text-align: center;
`;

export const SubTitulo = styled.Text`
    font-family: 'MontSerrat';
    font-size: 12px;
    margin-top: 5%;
    width: 90%;
    color: #989FDB;
    text-align: center;
`;

export const ContainerInputs = styled.View`
    flex: 3;
    padding: 0 6%;
`;

export const ContainerButton = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    bottom: ${heightPercentageToDP('-4%')}px;
`;

export const ContainerBottom = styled.View`
  width: 80%;
  height: ${heightPercentageToDP('20%')}px;
  position: absolute;
  justify-content: flex-start;
  align-items: center;
  bottom: ${heightPercentageToDP('0%')}px;
`;

export const TextResetPassword = styled.Text`
  font-size: 14px;
  text-align: center;
  top: ${heightPercentageToDP('6%')}px;
  color: #E5E5E5;
`;
