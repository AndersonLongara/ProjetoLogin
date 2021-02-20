import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField }  from '@unform/core';
import Icon from 'react-native-vector-icons/Feather';

import {Container, TextInput, Titulo, MessageError} from './styles';

interface InputProps extends TextInputProps {
    name: string;
    titulo: string;
}

interface InputValueReference {
    value: string;
}

interface inputRef {
    focus(): void;
}

const Input: React.ForwardRefRenderFunction<inputRef, InputProps> = ({titulo, name, ...rest}, ref) => {
    const inputElementRef = useRef<any>(null);
    const { registerField, defaultValue = '', fieldName, error } = useField(name);
    const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
    
    useImperativeHandle(ref, () => ({
        focus() {
            inputElementRef.current.focus();
        }
    }));

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
        })
    }, [fieldName, registerField])

    return (
        <>
            <Titulo isErrored={!!error} name={name}>{titulo}</Titulo>
            <Container isErrored={!!error}>
                <TextInput
                    ref={inputElementRef}
                    placeholderTextColor="#989FDB"
                    defaultValue={defaultValue}
                    onChangeText={(value) => {
                        inputValueRef.current.value = value;
                    }}
                    {...rest}
                />
                {!!error &&
                    <Icon name="x" size={15} color="#FF377F" />
                }
            </Container>
            {!!error &&
                <MessageError>{error}</MessageError>
            }
        </>
    );
    
};

export default forwardRef(Input);