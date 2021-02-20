import { Alert } from 'react-native';
import {call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';
import { Users } from './types';

export function* load({payload}: any) {
    try{
        const response = yield call(api.get, 'users');

        const users = <Users>response.data[0];

        const {email, password} = payload;

        if(email === users.email) {
            if(password === users.password) {
                Alert.alert('Login Success')
                yield put(loadSuccess(response.data));
            } else {
                Alert.alert('Senha incorreta')
            }
            
        } else {
            Alert.alert('confira o e-mail informado')
        }
    } catch (err) {
        yield put(loadFailure());
    }
}