'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} = React;


var Card = React.createClass({
  getInitialState: function() {
    return {
      url: 'https://facebook.github.io/react/img/logo_og.png',
      front: true,
      side: 'front',
      text: 'This is the front',
    };
  },

  flip: function() {
    console.log("flip button");
    var url = 'https://facebook.github.io/react/img/logo_og.png',
    backUrl = 'http://270c81.medialib.glogster.com/kamicek1993/media/fa/fa4707071c0b95333c3067c820120b30dd1651b1/dynamo-design-lendl-mucha-03.jpg',
    side = 'front',
    text = 'This is the front';

    if (this.state.front) {
      url = backUrl;
      side = 'back';
      text = 'Back is this'
    }

    this.setState({
      front: !this.state.front,
      side: side,
      url: url,
      text: text,
    });
  },

  render: function() {
    return (
      <View>
        <TouchableHighlight 
          onPress={this.flip}
          style={styles.goButton}
          underlayColor={'transparent'}
        >
          <View 
            side={this.state.side}
          >
            <Text>{this.state.text}</Text>
            <Image
              source={{uri: this.state.url}}
              style={styles.cardStyle}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  cardStyle: {
    width: 200,
    height: 200, 
  },
  goButton: {
  },
  goButtonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
});

module.exports = Card;
