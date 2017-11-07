import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableNativeFeedback,
} from 'react-native';
import {List, ListItem} from 'react-native-elements';

import {connect} from "react-redux";
import * as strings from "../../res/strings.json";
import {mainStyle} from "../../appStyles";
import * as colors from '../../res/colors.json';

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
    };

    render() {
        return (
          <View style={styles.container}>
          <ScrollView>
          {this.props.exampleData.consumption_tips.map((tip, i) => (
            <TipCard
              title={tip.title}
              text={tip.text}
              onPress={() => this.onCardPress(tip)}/>
        ))
        }
          </ScrollView>
          </View>
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
        backgroundColor: colors.backgroundColor,
    },
    tipCard: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: colors.divider,
    },
    tipCardTitle: {
      fontSize: 20,
      textAlign: 'left',
      color: colors.primary,
    },
    tipCardText: {

    },
});
