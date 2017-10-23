import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {PricesScreenStyles as styles} from "./PricesScreenStyles";
import PriceBlock from './PriceBlock';

export default class PricesScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Electricity prices (Cent/kWh)
                </Text>

                <Text style={styles.title}>
                    Gas prices (Cent/Liter)
                </Text>
            </View>
        );
    }
}