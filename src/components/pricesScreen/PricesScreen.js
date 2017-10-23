import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

import * as strings from '../../res/strings.json';
import {PricesScreenStyles as styles} from "./PricesScreenStyles";
import PriceBlock from './PriceBlock';

export default class PricesScreen extends Component {
    state = {
        electricityPrices: [
                {
                    time: '8.00 - 20.00',
                    price: 20.53,
                    icon: 'wb-sunny',
                    stateIcon: 'arrow-upward'
                },
                {
                    time: '20.00 - 8.00',
                    price: 17.73,
                    icon: 'brightness-3',
                    stateIcon: 'arrow-downward'
                },
                {
                    time: 'weekend',
                    price: 17.73,
                    icon: 'star',
                    stateIcon: 'arrow-downward'
                }
            ],
        gasPrices: [
                {
                    time: '8.00 - 20.00',
                    price: 53,
                    icon: 'wb-sunny',
                    stateIcon: 'arrow-downward'
                },
                {
                    time: '20.00 - 8.00',
                    price: 50,
                    icon: 'brightness-3',
                    stateIcon: 'arrow-upward'
                },
                {
                    time: 'weekend',
                    price: 50,
                    icon: 'star',
                    stateIcon: 'arrow-downward'
                }
            ]
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {strings.electricityPrices}
                </Text>
                {
                    this.state.electricityPrices.map((item, index) => {
                        return <PriceBlock item={item} key={index}/>
                    })
                }

                <Text style={styles.title}>
                    {strings.gasPrices}
                </Text>
                {
                    this.state.gasPrices.map((item, index) =>
                        <PriceBlock item={item} key={index} />
                    )
                }
            </View>
        );
    }
}