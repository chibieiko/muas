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
    ScrollView,
    List,
    ListItem,
    TouchableNativeFeedback,
} from 'react-native';
import {connect} from "react-redux";
import * as strings from "../../res/strings.json";
import {mainStyle} from "../../appStyles";

class TipCard extends Component {
  render() {
    return (
      <TouchableNativeFeedback
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
      </TouchableNativeFeedback>
    )
  }
}

class TipsScreen extends Component {

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
            <ScrollView contentContainerStyle={styles.container}>
              <List>
                {this.props.exampleData.consumption_tips.map((tip, i) => (
                    <ListItem
                      hideChevron
                      roundAvatar
                      key={i}
                      badge={{
                          element: <TipCard
                            title={tip.title}
                            text={tip.text}
                            onPress={() => this.onCardPress(tip)}/>
                      }}
                      title={tip.title}
                  />
              ))
              }
              </List>
            </ScrollView>
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
      margin: 5,
      padding: 10,
    },
    tipCardTitle: {
      fontSize: 20,
      textAlign: 'left',
    },
    tipCardText: {

    },
});
