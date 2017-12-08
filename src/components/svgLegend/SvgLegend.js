import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import SvgLegendItem from './SvgLegendItem'

import * as dimensions from '../../res/dimensions.json';

class SvgLegend extends Component {
    
    constructor(props) {
        super(props);

        const items = [];
        this.props.items.forEach((item, i) => {
            items.push({label: item, color: this.props.colorScale[i]});
        });
        this.state = {
          items: items,
        }
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                {
                    this.state.items.map((item) => {
                        return <SvgLegendItem 
                                size={this.props.size}
                                textStyle={this.props.textStyle ? this.props.textStyle : styles.text}
                                label={item.label}
                                color={item.color} />
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 5,
    },
    text: {
        marginLeft: 10,
        fontSize: dimensions.fontBig,
    },
});

export default SvgLegend;