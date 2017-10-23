import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {PriceBlockStyles as styles} from "./PriceBlockStyles";

export default class PriceBlock extends Component {
    render() {
        return (
            <View>
                <Text>
                    8.00 - 20.00
                </Text>
                <Text>
                    20,53
                </Text>
            </View>
        );
    }
}


