import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';

import * as colors from '../../res/colors.json';

export class InputField extends Component {
    state = {
        value: "",
    };

    onChange = (value) => {
        this.setState({
            value
        });
    };

    render() {
        return (
            <TextField
                label={this.props.label}
                value={this.state.value}
                tintColor={colors.primary}
                onChangeText={this.onChange}
            />
        );
    }
}