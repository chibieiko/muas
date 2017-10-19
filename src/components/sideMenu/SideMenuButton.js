import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {sideMenuButtonStyle as styles} from './SideMenuButtonStyles';

export default class SideMenuButton extends Component {
    render() {
        return (
            <TouchableNativeFeedback
                onPress={this.props.onPress}
                background={TouchableNativeFeedback.SelectableBackground()}
                disabled={this.props.disabled}>
                <View style={[styles.container, this.props.buttonStyle]} >
                    <Icon name={this.props.iconName} style={styles.icon}/>
                    <Text style={styles.content}>{this.props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}