import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {PriceBlockStyles as styles} from "./PriceBlockStyles";

export default class PriceBlock extends Component {
    render() {
        const item = this.props.item;
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Icon name={item.icon} style={styles.icon}/>
                    <Text style={styles.text}>
                        {item.time}
                    </Text>
                </View>

                <View style={styles.innerContainer}>
                    <Text style={styles.text}>
                        {item.price}
                    </Text>
                    <Icon name={item.stateIcon} style={styles.icon}/>
                </View>
            </View>
        );
    }
}


