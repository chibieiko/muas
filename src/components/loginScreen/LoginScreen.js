import React, {Component} from 'react';

import {
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

    openApp = async () => {
        let response;

        this.setState({
            loading: true
        });

        try {
            response = await fetch('https://jsonblob.com/api/jsonBlob/6bc26c55-b4ba-11e7-8ddf-15cd636b9d91');
            response = await response.json();
            console.log("Success");
        } catch (err) {
            console.log("Error");
            response = data;
        }

        this.props.setData(response);

        this.setState({
            loading: false
        });

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
            <View style={styles.container}>
                <Spinner visible={this.state.loading} />
                <Text style={styles.welcome}>
                    Login with your e-on account
                </Text>

                <InputField/>

                <PrimaryButton onPress={this.openApp}>Login</PrimaryButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: dimensions.horizontalMargin,
        marginVertical: dimensions.verticalMargin
    }
    /*
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },*/
});

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    setData: (exampleData) => dispatch(setData(exampleData))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
