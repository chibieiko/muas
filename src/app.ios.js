import React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from 'react-native-navigation';

import {registerScreens} from './screens';
import configureStore from './store/configureStore';

import * as colors from './res/colors.json';
import * as dimensions from './res/dimensions.json';
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
        screen: 'app.App',
        title: strings.title,
        navigatorStyle
    }
});