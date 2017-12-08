import React, {Component} from "react";
import {connect} from "react-redux";
import Svg from "react-native-svg";
import {Platform, StyleSheet, Text, View, ScrollView} from "react-native";

import {
    VictoryChart,
    VictoryBar,
    VictoryLine,
    VictoryTheme,
    VictoryPie,
    VictoryLegend
} from "victory-native";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import SecondaryButton from "../../components/secondaryButton";
import styles from "./ConsumptionScreenStyles";
import * as colors from '../../res/colors.json';

const CATEGORY = {
    ELECTRICITY: "electricity",
    GAS: "gas"
};

const MODE = {
    WEEK: "WEEK",
    MONTH: 1,
    YEAR: 2
};

class ConsumptionScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: CATEGORY.ELECTRICITY,
            mode: MODE.WEEK
        };

        this.renderChartLine = this.renderChartLine.bind(this);
        this.handleModeWeek = this.handleModeWeek.bind(this);
        this.handleModeMonth = this.handleModeMonth.bind(this);
        this.handleModeYear = this.handleModeYear.bind(this);
        this.handleCategoryElectricity = this.handleCategoryElectricity.bind(this);
        this.handleModeGas = this.handleModeGas.bind(this);
    }

    renderChartLine() {
        const {
            january,
            february,
            march,
            april,
            may,
            june,
            july,
            august,
            september,
            october,
            november,
            december
        } = this.props.exampleData.consumption.history.year;
        const {year} = this.props.exampleData.consumption.history;
        const {category} = this.state;

        const data = [0];
        switch (this.state.mode) {
            case MODE.WEEK:
                january[category].slice(0, 7).forEach((element, index, array) => {
                    data.push(element);
                });
                break;
            case MODE.MONTH:
                january[category].forEach((element, index, array) => {
                    data.push(element);
                });
                break;
            case MODE.YEAR:
                for (const [key, value] of Object.entries(year)) {
                    const monthTotal = value[category].reduce(
                        (sum, value) => sum + value
                    );
                    const monthAverage = monthTotal / value[category].length;
                    data.push(monthAverage);
                }
                break;
        }

        const min = data.reduce((a, b, i, arr) => Math.min(a, b));
        const max = data.reduce((a, b, i, arr) => Math.max(a, b));

        return (
            <VictoryLine
                animate={{
                    duration: 1000,
                    onLoad: {duration: 2000}
                }}
                categories={{x: [1, data.length - 1]}}
                domain={{y: [min, max + max / 5]}}
                style={{
                    data: {stroke: "#c43a31"},
                    parent: {border: "1px solid #ccc"}
                }}
                data={data}
            />
        );
    }

    handleModeWeek() {
        this.setState({
            mode: MODE.WEEK
        });
    }

    handleModeMonth() {
        this.setState({
            mode: MODE.MONTH
        });
    }

    handleModeYear() {
        this.setState({
            mode: MODE.YEAR
        });
    }

    handleCategoryElectricity() {
        this.setState({
            category: CATEGORY.ELECTRICITY
        });
    }

    handleModeGas() {
        this.setState({
            category: CATEGORY.GAS
        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.header}>Consumption Category</Text>

                <View style={styles.buttonContainer}>
                    <View style={styles.primaryButton}>
                        <PrimaryButton onPress={this.handleCategoryElectricity}
                                       color={this.state.category === CATEGORY.ELECTRICITY ? colors.primary : colors.secondary}>
                            Electricity
                        </PrimaryButton>
                    </View>
                    <View style={styles.primaryButton}>
                        <PrimaryButton onPress={this.handleModeGas}
                                       color={this.state.category === CATEGORY.GAS ? colors.primary : colors.secondary}>
                            Gas
                        </PrimaryButton>
                    </View>
                </View>

                <Svg width={400} height={400} marginBottom={"-10%"}>
                    <VictoryChart theme={VictoryTheme.material}
                                  standalone={false}>
                        {this.renderChartLine()}
                    </VictoryChart>
                </Svg>

                <Text style={styles.header}>Show Timeline</Text>

                <View style={styles.buttonContainer}>
                    <View style={styles.secondaryButton}>
                        <PrimaryButton onPress={this.handleModeWeek}
                                       color={this.state.mode === MODE.WEEK ? colors.primary : colors.secondary}>
                            Week
                        </PrimaryButton>
                    </View>
                    <View style={styles.secondaryButton}>
                        <PrimaryButton onPress={this.handleModeMonth}
                                         color={this.state.mode === MODE.MONTH ? colors.primary : colors.secondary}>
                            Month
                        </PrimaryButton>
                    </View>
                    <View style={styles.secondaryButton}>
                        <PrimaryButton onPress={this.handleModeYear}
                                         title='Year'
                                         color={this.state.mode === MODE.YEAR ? colors.primary : colors.secondary}>
                            Year
                        </PrimaryButton>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    exampleData: state.exampleData
});

export default connect(mapStateToProps)(ConsumptionScreen);
