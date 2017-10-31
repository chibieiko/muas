import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View
} from 'react-native';

import {Avatar, Button, List, ListItem} from 'react-native-elements';

import Octicon from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'

import {connect} from 'react-redux';

import styles from './RankingScreenStyles';
import {facebookLogin} from "../../store/actions";

class RankingScreen extends Component {
    loginWithFacebook = () => {
        console.log("login with fb");
        this.props.facebookLogin();
    };

    render() {
        return this.props.facebookLoggedIn ?
            <List>
                {
                    this.props.friends.map((friend, i) => (
                        <ListItem
                            hideChevron
                            avatar={<View style={styles.avatar}>
                                <Text style={styles.ranking}>{i+1}</Text>
                                <Avatar rounded source={{uri: friend.image}}/>
                            </View>}
                            key={i}
                            badge={{
                                element: <View style={styles.icons}>
                                    <Octicon name="flame" style={styles.icon}/>
                                    <Text style={styles.iconText}>
                                        {
                                            friend.gas
                                        }
                                    </Text>
                                    <Entypo name="flash" style={styles.icon}/>
                                    <Text style={styles.iconText}>
                                        {
                                            friend.electricity
                                        }
                                    </Text>
                                </View>
                            }}
                            title={friend.name}
                            titleStyle={{
                                paddingLeft: 14,
                                fontSize: 16
                            }}
                        />
                    ))
                }
            </List>
            :
            <View style={styles.container}>
                <Text style={styles.info}>
                    To compare energy consumption with your friends, please login with Facebook.
                </Text>
                <Button large
                        iconLeft
                        backgroundColor="#3B5998"
                        icon={{name: 'facebook', type: 'font-awesome'}}
                        onPress={this.loginWithFacebook}
                        title='Login with Facebook' />
            </View>;
    }
}

const mapStateToProps = (state) => ({
    facebookLoggedIn: state.facebookLoggedIn,
    friends: state.exampleData.friends
});

const mapDispatchToProps = {
    facebookLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(RankingScreen);
