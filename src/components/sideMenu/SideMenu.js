import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';

import {mainStyle} from "../../appStyles";
import {sideMenuStyle as styles} from "./SideMenuStyles";
import SideMenuButton from './SideMenuButton'

import * as strings from '../../res/strings.json';

export default class RankingScreen extends Component {
    state = {
        screens: [
            {
                icon: 'home',
                title: 'Home screen',
                name: 'app.HomeScreen'
            },
            {
                icon: 'euro-symbol',
                title: 'Consumption tips',
                name: 'app.ConsumptionScreen'
            },
            {
                icon: 'list',
                title: 'Prices',
                name: 'app.PricesScreen'
            }
        ]
    };

    openScreen = screenName => {
        // todo check screenName and compare to currently visible screen

        switch (screenName) {
            case 'app.HomeScreen':
                this.props.navigator.resetTo({
                    screen: 'app.HomeScreen',
                    title: strings.title,
                    navigatorStyle: mainStyle.navigatorStyle,
                    topTabs: [
                        {
                            title: strings.homeScreen,
                            screenId: 'app.HomeScreen',
                        },
                        {
                            title: strings.consumptionScreen,
                            screenId: 'app.ConsumptionScreen',
                        },
                        {
                            title: strings.rankingScreen,
                            screenId: 'app.RankingScreen',
                        }
                    ]
                });

            default:
                this.props.navigator.push({
                    screen: screenName,
                    title: strings.title,
                    navigatorStyle: mainStyle.navigatorStyle,
                })
        }

        this.props.navigator.toggleDrawer({
            side: 'left',
            animated: true,
            to: 'closed'
        })
    };

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.pictureContainer}>
                    <Text>
                        E ON
                    </Text>
                </View>
                <View>
                    {
                        this.state.screens.map((screen, index) => {
                            return <SideMenuButton
                                key={index}
                                title={screen.title}
                                onPress={() => this.openScreen(screen.screen)}
                                iconName={screen.icon}/>
                        })
                    }
                    <View style={styles.divider}/>
                    <SideMenuButton title='Logout'
                                    bu
                                    onPress={() => this.openScreen('app.LogoutScreen')}/>

                </View>

            </ScrollView>
        );
    }
}
