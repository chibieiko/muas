/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    Button,
    FormLabel,
    FormInput,
    FormValidationMessage
} from 'react-native-elements';

import * as colors from '../../res/colors.json';
import * as strings from '../../res/strings.json';
import * as dimensions from '../../res/dimensions.json';
import {mainStyle} from "../../appStyles";


export default class RankingScreen extends Component {
    openApp = () => {
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
        })
    };

    onChange = (input) => {
        console.log(input);
    };

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
                    Login with your e-on account
                </Text>

                <FormLabel>Email</FormLabel>
                <FormInput onChangeText={this.onChange}/>
                <Button
                    raised
                    title='Login'
                    onPress={this.openApp}
                    backgroundColor={colors.primary}/>

                <Button
                    raised
                    title='TipsAndTricksHereForNow'
                    onPress={this.openTips}/>
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
