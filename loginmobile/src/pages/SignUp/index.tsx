import React, { useState, useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform, TextInput, Alert } from 'react-native';
import * as Yup from 'yup';

import { connect, useDispatch } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

import { Users } from '../../store/ducks/users/types'
import { ApplicationState } from '../../store';
import * as UsersActions from '../../store/ducks/users/actions'

import { 
    Container, 
    Image,
    Content,
    Background, 
    ContainerLogin, 
    ContainerTitle, 
    Titulo, 
    SubTitulo, 
    ContainerInputs, 
    ContainerButton,
    ContainerBottom,
    TextResetPassword
    } from './styles'; 

import fundoImg from '../../assests/shutterstock_1220809918.png';

interface StateProps {
  users: Users[]
}

interface DispatchProps {
  loadRequest(data : Users) : void
}

type Props = StateProps & DispatchProps

const SignUp: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const formRef = useRef<FormHandles>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    interface SignInFormData {
        email: string;
        password: string;
    }
    const handleSignIn = useCallback(
        async (data: SignInFormData) => {
          try {
            formRef.current?.setErrors({});
    
            const schema = Yup.object().shape({
              email: Yup.string()
                .email('Digite um e-mail válido')
                .required('E-mail obrigatório'),
              password: Yup.string().required('Senha obrigatória'),
            });
    
            await schema.validate(data, {
              abortEarly: false,
            });

            dispatch(UsersActions.loadRequest(data));

          } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationErrors(err);
    
              formRef.current?.setErrors(errors);
    
              return;
            }
    
            Alert.alert(
              'Erro na autenticação',
              'Ocorreu um erro ao fazer login, cheque as credenciais.',
            );
          }
        },
        [],
      );

    return(
      <>
        <KeyboardAvoidingView 
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding': undefined}
          enabled
        > 
          <Container keyboardShouldPersistTaps="handled" >
          <Image source={fundoImg}/>  
          <Background >
            <Content isFocused={isFocused}>
                <ContainerLogin ref={formRef} onSubmit={handleSignIn}>
                  <ContainerTitle>
                    <Titulo>Olá, seja</Titulo>
                    <Titulo>bem-vindo!</Titulo>
                    <SubTitulo>Para acessar a plataforma, faça seu login.</SubTitulo>
                  </ContainerTitle>
                    <ContainerInputs>
                        <Input
                          autoCorrect={false}
                          autoCapitalize="none"
                          keyboardType="email-address"
                          name="email"
                          titulo="E-MAIL" 
                          placeholder="seuemai@email.com" 
                          onFocus={() => {}}
                          onEndEditing={() => {}}
                          returnKeyType="next"
                          onSubmitEditing={() => { 
                              passwordInputRef.current?.focus();
                          }}
                        />
                        <Input
                          secureTextEntry
                          ref={passwordInputRef}
                          name="password"  
                          titulo="SENHA" 
                          placeholder="******"
                          returnKeyType="send"
                          onSubmitEditing={() => formRef.current?.submitForm()}
                        />
                    </ContainerInputs>
                    <ContainerButton>
                      <Button onPress={() => formRef.current?.submitForm()}>
                          Entrar
                      </Button>
                    </ContainerButton>
                </ContainerLogin>
                <ContainerBottom>
                  <TextResetPassword>Esqueceu seu login ou senha? Clique aqui</TextResetPassword>
                </ContainerBottom>
              </Content>
            </Background>
          </Container>
        </KeyboardAvoidingView>
      </>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(UsersActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)<any>(SignUp);