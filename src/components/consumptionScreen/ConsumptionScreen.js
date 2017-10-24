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

const MODE = {
  WEEK: 0,
  MONTH: 1,
  YEAR: 2
};

class ConsumptionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: MODE.WEEK
    };

    this.renderChartLine = this.renderChartLine.bind(this);
    this.handleModeWeek = this.handleModeWeek.bind(this);
    this.handleModeMonth = this.handleModeMonth.bind(this);
    this.handleModeYear = this.handleModeYear.bind(this);
  }

  renderChartLine() {
    const {
      january,
      february
    } = this.props.exampleData.consumption.history.year;
    const { year } = this.props.exampleData.consumption.history;

    const data = [];
    switch (this.state.mode) {
      case MODE.WEEK:
        january.slice(0, 8).forEach((element, index, array) => {
          data.push(element);
        });
        break;
      case MODE.MONTH:
        february.forEach((element, index, array) => {
          data.push(element);
        });
        break;
      /*      case MODE.YEAR:
        february.forEach((element, index, array) => {
          data.push(element);
        });
        break;*/
    }

    const max = data.reduce((a, b, i, arr) => Math.max(a, b));
    const min = data.reduce((a, b, i, arr) => Math.min(a, b));

    return (
      <VictoryLine
        animate={{
          duration: 2000,
          onLoad: { duration: 2000 }
        }}
        categories={{ x: [1, data.length] }}
        domain={{ x: [1, data.length - 1], y: [min, max + max / 5] }}
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

  render() {
    return (
      <View style={styles.container}>
        <Svg width={400} height={400}>
          <VictoryChart theme={VictoryTheme.material} standalone={false}>
            {this.renderChartLine()}
          </VictoryChart>

        </Svg>
        <Text>
          {this.state.mode}
        </Text>
        <PrimaryButton onPress={this.handleModeWeek}>
          Week
        </PrimaryButton>
        <PrimaryButton onPress={this.handleModeMonth}>
          Month
        </PrimaryButton>
        {/*<PrimaryButton onPress={this.handleModeYear}>
          Year
        </PrimaryButton>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const mapStateToProps = state => ({
  exampleData: state.exampleData
});

export default connect(mapStateToProps)(ConsumptionScreen);
