import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import { connect } from "react-redux";

import * as strings from '../../res/strings.json';
import {PricesScreenStyles as styles} from "./PricesScreenStyles";
import PriceBlock from './PriceBlock';

export class PricesScreen extends Component {
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
        const prices = this.props.exampleData.prices;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {strings.electricityPrices}
                </Text>
                {
                    prices.electricityPrices.map((item, index) => {
                        return <PriceBlock item={item} key={index}/>
                    })
                }

                <Text style={styles.title}>
                    {strings.gasPrices}
                </Text>
                {
                    prices.gasPrices.map((item, index) =>
                        <PriceBlock item={item} key={index} />
                    )
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    exampleData: state.exampleData
});

export default connect(mapStateToProps)(PricesScreen);