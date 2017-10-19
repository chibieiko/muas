import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {mainStyle} from "../../appStyles";
import {sideMenuStyle} from "./SideMenuStyles";

import * as strings from '../../res/strings.json';
import PrimaryButton from "../primaryButton/PrimaryButton";

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
            <View style={sideMenuStyle.container}>
                <Text>
                    Moi
                </Text>
            </View>
        );
    }
}
