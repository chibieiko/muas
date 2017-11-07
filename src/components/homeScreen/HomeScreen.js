import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import {connect} from "react-redux";
import {Svg} from 'react-native-svg'
import {VictoryChart, VictoryBar, VictoryScatter, VictoryTheme, VictoryPie, VictoryLegend, VictoryLabel} from "victory-native"
import PrimaryButton from "../../components/primaryButton/PrimaryButton"

import * as colors from '../../res/colors.json';

class HomeScreen extends Component {
    static navigatorButtons = {
        leftButtons: [
            {
                id: 'sideMenu'
            }
        ]
    };

    constructor(props) {
        super(props);
        //  For listening navigator events.
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) {
        console.log(event.type);
    }

    onAdjustBudget() {
        console.log("Go to adjust budget");
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container2}>
                <Svg width={400} height={400} viewBox="0 0 400 400" style={{ width: "100%", height: "auto" }}>
                    <VictoryPie
                        standalone={false}
                        style={{
                            labels: {
                            fill: "white",
                            stroke: "black",
                            fontSize: 32,
                            fontWeight: "bold"
                            }
                        }}
                        data={[
                            { x: "1.2€", y: 1.2 },
                            { x: "4.5€", y: 4.5 },
                            { x: "3€", y: 3 }
                        ]}
                        innerRadius={60}
                        labelRadius={90}
                        colorScale={[
                            "#D85F49",
                            "#F66D3B",
                            "#aaFFaa",
                            "#D73C4C",
                            "#FFAF59",
                            "#E28300",
                            "#F6A57F"
                        ]}
                    />
                </Svg>
                <Svg width={400} height={150} viewBox="0 0 400 150" style={{ width: "100%", height: "auto"}}>
                    <VictoryLegend height={150}
                        standalone={false}
                        centerTitle
                        orientation="vertical"
                        style={{ labels: {fontSize: 20} }}
                        data={[
                        { name: "Used gas" }, { name: "Used electricity" }, { name: "Remaining budget" }
                        ]}
                        colorScale={[
                            "#D85F49",
                            "#F66D3B",
                            "#aaffaa"
                        ]}
                        labelComponent={<VictoryLabel dy={-10}/>}
                    />
                </Svg>
                <PrimaryButton onPress={this.onAdjustBudget}>Adjust budjet</PrimaryButton>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundColor,
    },
    container2: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
        backgroundColor: colors.backgroundColor
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
    },
    scrollFixer: {
        backgroundColor: 'black', 
        opacity: 0,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    }
});

const mapStateToProps = (state) => ({
    exampleData: state.exampleData
});

export default connect(mapStateToProps)(HomeScreen);
