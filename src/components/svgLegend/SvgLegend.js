import React, { Component } from 'react';
import Svg, {Circle} from 'react-native-svg';

class SvgLegend extends Component {
    render() {
        return (
                <Svg width={400} height={150} viewBox="0 0 400 150">
                    <Circle
                        cx='10'
                        cy='10'
                        r='20'
                        fill='0xff0000'
                    />
                </Svg>
        );
    }
}

export default SvgLegend;