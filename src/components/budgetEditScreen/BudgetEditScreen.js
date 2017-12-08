import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableNativeFeedback,
    Slider,
} from 'react-native';
import {List, ListItem} from 'react-native-elements';

import * as strings from "../../res/strings.json";
import {mainStyle} from "../../appStyles";
import * as colors from '../../res/colors.json';
import { PrimaryButton } from '../primaryButton/PrimaryButton';
import {setBudget} from "../../store/actions";
import {connect} from "react-redux";
import * as dimensions from '../../res/dimensions.json';

class BudgetEditScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            budget: 1,
        }
    }

    componentWillMount() {
        this.props.navigator.setDrawerEnabled({
            side: 'left',
            enabled: false
        });
        this.setState({budget: this.props.budget})
    }

    componentWillUnmount() {
        this.props.navigator.setDrawerEnabled({
            side: 'left',
            enabled: true
        });
    }

    onSaveBudget = () => {
        console.log("save budget");
        this.props.setBudget(this.state.budget);
        this.props.navigator.pop({
            animated: true, 
            animationType: 'fade',
          });
    };

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.text}>Your monthly budget</Text>
            <Text style={styles.budgetValue}>{this.monthly()}</Text>
            <Text style={styles.text}>Your daily budget</Text>
            <Text style={styles.budgetValue}>{this.daily()}</Text>
            <Slider
                style={styles.slider}
                step={0.1}
                minimumValue={1}
                maximumValue={100}
                value={this.state.budget}
                onValueChange={ val => this.sliderChange(val)}
            />
            <PrimaryButton onPress={this.onSaveBudget}>Save</PrimaryButton>
          </View>
      );
    }

    sliderChange = (value) => {
        console.log("new value:", value);
        this.setState({ budget: value })
    }

    monthly() {
        return Math.round(this.state.budget*100) / 100 + "€";
    }

    daily() {
        return Math.round(this.state.budget / 30 * 100) / 100 + "€";
    }
}

const mapStateToProps = (state) => ({
    exampleData: state.exampleData,
    budget: state.budget
});

const mapDispatchToProps = (dispatch) => ({
    setBudget: (budget) => dispatch(setBudget(budget)),
    loggedIn: (loggedState) => dispatch(loggedIn(loggedState))
});

export default connect(mapStateToProps, mapDispatchToProps)(BudgetEditScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.backgroundColor,
        paddingHorizontal: 10,
        paddingVertical: dimensions.verticalMargin
    },
    slider: {
        width: '100%',
        marginTop: 20,
        marginBottom: 40,
    },
    text: {
        fontSize: dimensions.fontBig,
        margin: 5,
    },
    budgetValue: {
        fontSize: 50,
        marginBottom: dimensions.verticalMargin
    }
});
