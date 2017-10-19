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
import {Button} from 'react-native-elements';
import * as colors from '../../res/colors.json';
import * as strings from '../../res/strings.json';
import * as dimensions from '../../res/dimensions.json';
import {mainStyle} from "../../appStyles";


export default class RankingScreen extends Component {
    openApp = () => {
        console.log("trying to open tab app");
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

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    We make together:D
                </Text>

                <Button
                    raised
                    title='Press me:3'
                    onPress={this.openApp}/>
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
