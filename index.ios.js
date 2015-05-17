/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;
var ParallaxView = require('react-native-parallax-view');
var screen = require('Dimensions').get('window');

var bug = React.createClass({
  render: function() {
    return (
        <ParallaxView
      backgroundSource={{uri: 'https://www.meneame.net/backend/media?type=link&id=2412018'}}
      windowHeight={100}
      header={(
        <Text>Title</Text>
      )}>
        <Text>Text body</Text>
        </ParallaxView>
    );
  }
});

var navi = React.createClass({
  _press: function() {
    this.props.navigator.push({
      title: 'bug',
      component: bug,
    });
  },
  render: function() {
    return (
        <View style={{flex: 1}}>
        <TouchableHighlight onPress={this._press} style={{flex: 1}}>
        <Text style={{flex: 1, color: '#000000'}}>Go</Text>
        </TouchableHighlight>
        </View>
    );
  }
});

var parallaxBug = React.createClass({
  render: function() {
    console.log(JSON.stringify(screen, null, 2));
    return (
        <React.NavigatorIOS
      style={{flex:1}}
      initialRoute={{
        component: navi,
        title: 'parallax-bug'
      }}
        />
    );
  }
});

AppRegistry.registerComponent('parallaxBug', () => parallaxBug);
