import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import SvgLegendItem from './SvgLegendItem'

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
        // backgroundColor: '#555555',
        width: '100%',
        padding: 5,
    },
    text: {
        marginLeft: 10,
        fontSize: 25,
    },
});

export default SvgLegend;