/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {mainStyle} from "../../appStyles";

import * as strings from '../../res/strings.json';
import PrimaryButton from "../primaryButton/PrimaryButton";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class RankingScreen extends Component {

    openTips = () => {
        this.props.navigator.push({
            screen: 'app.TipsScreen',
            title: strings.title,
            navigatorStyle: mainStyle.navigatorStyle,
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Erika designs and implements
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit SideMenu.js
                </Text>
                <PrimaryButton onPress={this.openTips}>Tips here</PrimaryButton>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
