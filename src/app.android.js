import React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from 'react-native-navigation';

import {registerScreens} from './screens';
import configureStore from './store/configureStore';

import * as colors from './res/colors.json';
import * as strings from './res/strings.json';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
    statusBarColor: colors.primaryDark,
    statusBarTextColorScheme: 'light',
    navigationBarColor: 'black',
    navBarBackgroundColor: colors.primary,
    navBarTextColor: 'white',
    navBarButtonColor: 'white',
};

Navigation.startSingleScreenApp({
    screen: {
        screen: 'app.HomeScreen',
        title: strings.title,
        navigatorStyle
    }
});