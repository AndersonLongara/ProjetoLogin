import { action } from 'typesafe-actions';
import { UsersTypes, Users } from './types';

export const loadRequest = (data: Users) => action(UsersTypes.LOAD_REQUEST, data);

export const loadSuccess = (data: Users[]) => action(UsersTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(UsersTypes.LOAD_FAILURE);