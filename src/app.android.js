import React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from 'react-native-navigation';

import {registerScreens} from './screens';
import configureStore from './store/configureStore';

import * as colors from './res/colors.json';
import * as strings from './res/strings.json';
import * as dimensions from './res/dimensions.json';

const initialState = {
    budget: 30,
}

const store = configureStore(initialState);

registerScreens(store, Provider);

const navigatorStyle = {
    statusBarColor: colors.primaryDark,
    statusBarTextColorScheme: 'light',
    navigationBarColor: 'black',
    navBarBackgroundColor: colors.primary,
    navBarTextColor: 'white',
    navBarButtonColor: 'white',
    navBarHiddenOnScroll: true,

    topTabTextColor: colors.textSecondary,
    selectedTopTabTextColor: colors.textLight,
    selectedTopTabIndicatorHeight: dimensions.indicatorHeight,
    selectedTopTabIndicatorColor: colors.textLight,
    tabBarHidden: false,
    drawUnderTabBar: true
};

Navigation.startSingleScreenApp({
    screen: {
        screen: strings.loginScreen,
        title: strings.title,
        navigatorStyle
    },
    drawer: {
        left: {
            screen: strings.sideMenu
        }
    },
    appStyle: {
        orientation: "portrait"
    }
});