import React from 'react'
import {Button} from "react-native-elements";

import * as colors from '../../res/colors.json';

export class PrimaryButton extends React.Component {
    render() {
        return <Button
            containerViewStyle={{
                marginRight: 0,
                marginLeft: 0
            }}
            raised
            title={this.props.children}
            onPress={this.props.onPress}
            backgroundColor={this.props.color ? this.props.color : colors.primary}/>
    }
}

export default PrimaryButton;