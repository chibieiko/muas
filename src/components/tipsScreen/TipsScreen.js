/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableWithoutFeedback,
} from 'react-native';
import {connect} from "react-redux";
import * as strings from "../../res/strings.json";
<<<<<<< HEAD
=======
import {mainStyle} from "../../appStyles";
>>>>>>> Add navigation to TipScreen and show full tip in that view

class TipCard extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.props.onPress}>
        <View style={styles.tipCard}>
          <Text style={styles.tipCardTitle}>
            {this.props.title}
          </Text>
          <Text
            style={styles.tipCardText}
            numberOfLines={3}>
            {this.props.text}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

class TipsScreen extends Component {

<<<<<<< HEAD
    componentWillMount() {
        this.props.navigator.setDrawerEnabled({
            side: 'left',
            enabled: false
        });
    }

    componentWillUnmount() {
        this.props.navigator.setDrawerEnabled({
            side: 'left',
            enabled: true
        });
    }

=======
>>>>>>> Add navigation to TipScreen and show full tip in that view
    onCardPress = (card) => {
        this.props.navigator.push({
            screen: strings.tipScreen,
            title: card.title,
<<<<<<< HEAD
=======
            passProps: {text: card.text},
>>>>>>> Add navigation to TipScreen and show full tip in that view
            navigatorStyle: mainStyle.navigatorStyle,
        });
    }

    render() {
        return (
            <FlatList
              data={this.props.exampleData.consumption_tips}
              renderItem={({item}) => <TipCard
                                        title={item.title}
                                        text={item.text}
                                        onPress={() => this.onCardPress(item)}
                                      />}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    exampleData: state.exampleData
});

export default connect(mapStateToProps)(TipsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tipCard: {
      borderWidth: 2,
      borderColor: 'black',
      margin: 5,
      padding: 10,
    },
    tipCardTitle: {
      fontSize: 20,
      textAlign: 'right',
    },
    tipCardText: {

    },
});
