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
import {mainStyle} from "../../appStyles";

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

    onCardPress = (card) => {
        this.props.navigator.push({
            screen: strings.tipScreen,
            title: card.title,
            passProps: {text: card.text},
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
