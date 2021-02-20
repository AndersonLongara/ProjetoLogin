import 'react-native-gesture-handler';
import React from 'react'
import { View, StatusBar } from 'react-native'
import { Provider } from 'react-redux';

import SignUp from './pages/SignUp';

import store from './store';

const App: React.FC = () => (
    <>
    <Provider store={store}>
        <StatusBar barStyle="dark-content" backgroundColor="rgba(0, 0, 0, 0)" translucent/>
        <SignUp />
    </Provider>
    </>
)


export default App;