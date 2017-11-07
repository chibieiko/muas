import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    ScrollView,
} from 'react-native';
import HTMLView from 'react-native-htmlview';

import * as colors from '../../res/colors.json';

export default class TipScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
              <HTMLView
                value={this.props.text}
              />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: colors.backgroundColor,
    },
});
