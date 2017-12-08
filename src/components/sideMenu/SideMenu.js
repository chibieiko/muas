import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    Switch,
    Image
} from 'react-native';

import {mainStyle} from "../../appStyles";
import {sideMenuStyle as styles} from "./SideMenuStyles";
import SideMenuButton from './SideMenuButton'
import {loggedIn} from "../../store/actions";
import {connect} from "react-redux";
import {ScreenVisibilityListener} from 'react-native-navigation';

import * as strings from '../../res/strings.json';
import * as colors from '../../res/colors.json';

export class SideMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            screens: [
                {
                    icon: 'home',
                    title: strings.drawerHomeTitle,
                    name: strings.homeScreen
                },
                {
                    icon: 'lightbulb-outline',
                    title: strings.drawerConsumptionTitle,
                    name: strings.tipsScreen
                },
                {
                    icon: 'euro-symbol',
                    title: strings.drawerPricesTitle,
                    name: strings.pricesScreen
                }
            ],
            notifications: true
        };
    }

    openScreen = screen => {
        switch (screen.name) {
            case strings.homeScreen:
                this.props.navigator.resetTo({
                    screen: strings.homeScreen,
                    title: strings.title,
                    navigatorStyle: mainStyle.navigatorStyle,
                    topTabs: [
                        {
                            title: strings.budgetTab,
                            screenId: strings.homeScreen,
                        },
                        {
                            title: strings.consumptionTab,
                            screenId: strings.consumptionScreen,
                        },
                        {
                            title: strings.rankingTab,
                            screenId: strings.rankingScreen,
                        }
                    ]
                });
                break;

            case strings.loginScreen:
                this.props.navigator.resetTo({
                    screen: strings.loginScreen,
                    title: strings.title,
                    navigatorStyle: mainStyle.navigatorStyle,
                });

                this.props.logout(false);
                break;

            default:
                this.props.navigator.push({
                    screen: screen.name,
                    title: screen.title,
                    navigatorStyle: mainStyle.navigatorStyle,
                });
                break;
        }

        this.props.navigator.toggleDrawer({
            side: 'left',
            animated: true,
            to: 'closed'
        })
    };

    updateNotifications = () => {
        this.setState({
            notifications: !this.state.notifications
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    resizeMode={'contain'}
                    source={require('./e-on-logo.png')}/>
                {
                    this.props.loggedIn &&
                    <View>
                        {
                            this.state.screens.map((screen, index) => {
                                return <SideMenuButton
                                    key={index}
                                    title={screen.title}
                                    onPress={() => this.openScreen(screen)}
                                    iconName={screen.icon}/>
                            })
                        }
                        <View style={styles.divider}/>
                        <View style={styles.notificationContainer}>
                            <Text style={styles.notificationText}>
                                Notifications
                            </Text>
                            <Switch onValueChange={this.updateNotifications}
                                    onTintColor={colors.textSecondary}
                                    thumbTintColor={colors.primary}
                                    value={this.state.notifications}/>
                        </View>
                        <SideMenuButton title={strings.drawerLogoutTitle}
                                        onPress={() => this.openScreen({name: strings.loginScreen})}/>
                    </View>
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn
});

const mapDispatchToProps = (dispatch) => ({
    logout: (loggedState) => dispatch(loggedIn(loggedState))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);