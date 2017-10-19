import React, {Component} from 'react';

import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import * as data from '../../res/data.json';

import * as colors from '../../res/colors.json';
import * as strings from '../../res/strings.json';
import * as dimensions from '../../res/dimensions.json';
import {mainStyle} from "../../appStyles";

import {InputField} from "./InputField";
import PrimaryButton from "../primaryButton/PrimaryButton";
import Spinner from "react-native-loading-spinner-overlay";
import {setData} from "../../store/actions";
import {connect} from "react-redux";


class LoginScreen extends Component {
    state = {
        email: "",
        password: "",
        loading: false
    };

    toggleLoading = () => {
        this.setState({
            loading: !this.state.loading
        });
    };

    fetchData = async () => {
        let response;

        this.toggleLoading();

        try {
            response = await fetch('https://jsonblob.com/api/jsonBlob/6bc26c55-b4ba-11e7-8ddf-15cd636b9d91');
            response = await response.json();
            console.log("Success");
        } catch (err) {
            console.log("Error");
            response = data;
        }

        this.toggleLoading();

        return response;
    };

    openApp = async () => {
        const result = await this.fetchData();

        this.props.setData(result);

        this.props.navigator.resetTo({
            screen: 'app.HomeScreen',
            title: strings.title,
            navigatorStyle: mainStyle.navigatorStyle,
            topTabs: [
                {
                    title: strings.homeScreen,
                    screenId: 'app.HomeScreen',
                },
                {
                    title: strings.consumptionScreen,
                    screenId: 'app.ConsumptionScreen',
                },
                {
                    title: strings.rankingScreen,
                    screenId: 'app.RankingScreen',
                }
            ]
        });
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={50} behavior="padding">
                <Spinner visible={this.state.loading} />

                <Text style={styles.intro}>
                    LOGIN WITH E-ON ACCOUNT
                </Text>

                <View style={styles.inputs}>
                    <InputField label="Email address"/>
                    <InputField label="Password"/>
                </View>

                <PrimaryButton onPress={this.openApp}>Login</PrimaryButton>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: dimensions.horizontalMargin,
        marginVertical: dimensions.verticalMargin
    },
    intro: {
        textAlign: "center",
        fontSize: 20,
        color: colors.primary,
        marginTop: 16,
        marginBottom: 8
    },
    inputs: {
        marginBottom: 24
    }
});

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    setData: (exampleData) => dispatch(setData(exampleData))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
