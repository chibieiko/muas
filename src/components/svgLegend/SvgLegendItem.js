import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import SvgLegendCircle from './SvgLegendCircle'

class SvgLegendItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SvgLegendCircle size={this.props.size} color={this.props.color}></SvgLegendCircle>
                <Text style={this.props.textStyle}>{this.props.label}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 2,
    },
});

export default SvgLegendItem;