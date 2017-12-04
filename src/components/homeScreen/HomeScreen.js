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
import SvgLegend from '../../components/svgLegend/SvgLegend'

import {mainStyle} from "../../appStyles";

import * as colors from '../../res/colors.json';
import * as strings from '../../res/strings.json';

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
        this.state = {
            hours: 10,
            minutes: 31,
            legendItems: [
                "Gas cost",
                "Electricity cost",
                "Remaining budget",
            ],
            colorScale: [
                colors.gas,
                colors.electricity,
                colors.budget,
                "#F66D3B",
                "#aaFFaa",
                "#D73C4C",
                "#FFAF59",
                "#E28300",
                "#F6A57F"
            ],
            electricityPrice: props.exampleData.prices.electricityPrices[0].price,
            gasPrice: props.exampleData.prices.gasPrices[0].price,
            dailyBudget: 3,
            budgetData: [
                { x: "1.2€", y: 1.2 },
                { x: "4.5€", y: 4.5 },
                { x: "3€", y: 3 }
            ],
        }
    }

    componentDidMount() {
        this.setState({dailyBudget: this.props.budget / 30});
    }

    onNavigatorEvent(event) {
        switch (event.id) {
            case 'didAppear':
                console.log(event.id);
                this.updateDataFromTime();
                break;
        
            default:
                console.log("default");
                console.log(event.id);
                break;
        }
    }

    onAdjustBudget = () => {
        console.log("Go to adjust budget");
        console.dir(this.props);
        this.props.navigator.push({
            screen: strings.budgetEditScreen,
            title: "Edit Budget",
            // passProps: {text: card.text},
            navigatorStyle: mainStyle.navigatorStyle,
        });
    }

    updateDataFromTime() {
        console.group("updateData");
        console.log("before daily: ", this.state.dailyBudget);
        console.log("before budget: ", this.state.budget);
        this.setState({dailyBudget: this.props.budget / 30});
        console.log("after daily: ", this.state.dailyBudget);
        console.groupEnd();
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const time = hours + ":" + minutes;
        // const time = "00:59";
        let eTotal = 0;
        let gasTotal = 0;
        const today = this.props.exampleData.consumption.recent.today;
        today.forEach(entry => {
            if (entry.time <= time) {
                eTotal += entry.electricityWH;
                gasTotal += entry.gasL;
            } 
        });

        const ePrice = (eTotal / 1000) * this.state.electricityPrice;
        const gPrice = (gasTotal / 1000) * this.state.gasPrice;
        const remaining = this.state.dailyBudget*100 - ePrice - gPrice;

        const usedElectricityEuros = Math.round(ePrice) / 100;
        const usedGasEuros = Math.round(gPrice) / 100;
        let remainingBudgetEuros = Math.round(remaining) / 100; 
        remainingBudgetEuros = Math.max(remainingBudgetEuros, 0);

        const budgetData = [
            {
                x: usedGasEuros + "€",
                y: usedGasEuros,
            },
            {
                x: usedElectricityEuros + "€",
                y: usedElectricityEuros,
            },
            {
                x: remainingBudgetEuros + "€",
                y: remainingBudgetEuros,
            },
        ];

        this.setState({
            hours: hours,
            minutes: minutes,
            budgetData: budgetData,
        })   
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container2}>
            <Text style={styles.title}>Today's budget: {this.props.budget}</Text>
                <Svg width={400} height={400} viewBox="0 0 400 400" style={styles.svg}>
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
                        data={this.state.budgetData}
                        innerRadius={60}
                        labelRadius={90}
                        colorScale={this.state.colorScale}
                    />
                </Svg>
                <SvgLegend
                    size={25}
                    textStyle={styles.legendText}
                    items={this.state.legendItems}
                    colorScale={this.state.colorScale}/>
         
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
        paddingTop: 5,
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
    },
    legendText: {
        marginLeft: 10,
        fontSize: 25,
    },
    title: {
        fontSize: 30,
    },
    svg: {
        width: "100%",
        height: "auto",
        marginTop: -35,
        marginBottom: -40,
    }
});

const mapStateToProps = (state) => ({
    exampleData: state.exampleData,
    budget: state.budget,
});

export default connect(mapStateToProps)(HomeScreen);
