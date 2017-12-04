import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import Svg, {Circle, Rect} from 'react-native-svg';

class SvgLegendCircle extends Component {
    render() {
        return (
            <Svg width={this.props.size} height={this.props.size} viewBox={this.getViewBox()} style={styles.svg}>
                <Circle
                    cx={this.props.size}
                    cy={this.props.size}
                    r={this.props.size}
                    fill={this.props.color}
                />
            </Svg>
        );
    }

    getViewBox() {
        const doubleSize = this.props.size*2;
        return "0 0 " + doubleSize + " " + doubleSize;
    }
}

const styles = StyleSheet.create({
    svg: {
    },
});

export default SvgLegendCircle;