import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';

import {mainStyle} from "../../appStyles";
import {sideMenuStyle} from "./SideMenuStyles";
import SideMenuButton from './SideMenuButton'

import * as strings from '../../res/strings.json';
import PrimaryButton from "../primaryButton/PrimaryButton";

export default class RankingScreen extends Component {
    openScreen = screenName => {
        // todo check screenName and compare to currently visible screen

        this.props.navigator.toggleDrawer({
            side: 'left',
            animated: true,
            to: 'closed'
        })
       /* this.props.navigator.push({
            screen: screenName,
            title: strings.title,
            navigatorStyle: mainStyle.navigatorStyle,
        })*/
    };

    render() {
        return (
            <ScrollView contentContainerStyle={sideMenuStyle.container}>
                <View style={sideMenuStyle.pictureContainer}>
                    <Text>
                        E ON
                    </Text>
                </View>
                <View>
                    <SideMenuButton title='Test screen'
                                    onPress={() => this.openScreen('app.RankingScreen')}
                                    iconName='home'/>
                    <SideMenuButton title='Test screen'
                                    onPress={() => this.openScreen('app.RankingScreen')}
                                    iconName='flash-on'/>
                    <SideMenuButton title='Test screen'
                                    onPress={() => this.openScreen('app.RankingScreen')}
                                    iconName='people'/>
                    <SideMenuButton title='Test screen'
                                    onPress={() => this.openScreen('app.RankingScreen')}
                                    iconName='euro-symbol'/>
                </View>

            </ScrollView>
        );
    }
}
