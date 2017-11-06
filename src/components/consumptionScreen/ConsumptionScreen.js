/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import Svg from "react-native-svg";
import { Platform, StyleSheet, Text, View } from "react-native";

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
    const { year } = this.props.exampleData.consumption.history;
    const { category } = this.state;

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
          onLoad: { duration: 2000 }
        }}
        categories={{ x: [1, data.length - 1] }}
        domain={{ y: [min, max + max / 5] }}
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc" }
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
      <View style={styles.container}>
        <Text style={styles.header}>Consumption Category</Text>

        <View style={styles.buttonContainer}>
          <View style={styles.primaryButton}>
            <PrimaryButton onPress={this.handleCategoryElectricity}>
              Electricity
            </PrimaryButton>
          </View>
          <View style={styles.primaryButton}>
            <PrimaryButton onPress={this.handleModeGas}>
              Gas
            </PrimaryButton>
          </View>
        </View>

        <Svg width={400} height={400} marginBottom={"-10%"}>
          <VictoryChart theme={VictoryTheme.material} standalone={false}>
            {this.renderChartLine()}
          </VictoryChart>
        </Svg>

        <Text style={styles.header}>Show Timeline</Text>

        <View style={styles.buttonContainer}>
          <View style={styles.secondaryButton}>
            <SecondaryButton onPress={this.handleModeWeek}>
              Week
            </SecondaryButton>
          </View>
          <View style={styles.secondaryButton}>
            <SecondaryButton onPress={this.handleModeMonth}>
              Month
            </SecondaryButton>
          </View>
          <View style={styles.secondaryButton}>
            <SecondaryButton onPress={this.handleModeYear}>
              Year
            </SecondaryButton>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  exampleData: state.exampleData
});

export default connect(mapStateToProps)(ConsumptionScreen);
