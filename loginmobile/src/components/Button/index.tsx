import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';


import {BackgroundButton, Container, ButtonText} from './styles';

interface ButtonProps extends RectButtonProperties {
    children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
   <BackgroundButton>
        <Container {...rest}>
            <ButtonText>{children}</ButtonText>
        </Container>
    </BackgroundButton>     
);

export default Button;