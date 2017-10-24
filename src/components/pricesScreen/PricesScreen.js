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
                    time: '8:00 - 20:00',
                    price: 20.53,
                    icon: 'wb-sunny',
                    hasRisen: true
                },
                {
                    time: '20:00 - 8:00',
                    price: 17.73,
                    icon: 'brightness-3',
                    hasRisen: false
                },
                {
                    time: 'weekend',
                    price: 17.73,
                    icon: 'star',
                    hasRisen: false
                }
            ],
        gasPrices: [
                {
                    time: '8:00 - 20:00',
                    price: 53,
                    icon: 'wb-sunny',
                    hasRisen: false
                },
                {
                    time: '20:00 - 8:00',
                    price: 50,
                    icon: 'brightness-3',
                    hasRisen: true
                },
                {
                    time: 'weekend',
                    price: 50,
                    icon: 'star',
                    hasRisen: false
                }
            ]
    };

    componentWillMount() {
        this.props.navigator.setDrawerEnabled({
            side: 'left',
            enabled: false
        });
    }

    componentWillUnmount() {
        this.props.navigator.setDrawerEnabled({
            side: 'left',
            enabled: true
        });
    }

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