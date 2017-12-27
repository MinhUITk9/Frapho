'use strict';

import React, { Component } from 'react';
import axios from 'axios';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  TouchableOpacity,
  Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanScreen extends Component {

  state ={ albums: {
    data: []
  }
  };

  onSuccess(e) {
    console.log(e.data);
    return axios.get('https://frapho.com/api/get-frames?code=' + e.data)
    .then(response => this.setState({ albums: response.data }));
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={(
          <Text style={styles.centerText}>
            Go to <Text style={styles.textBold}>frapho.com</Text> choose Frame and scan the QR code.
          </Text>
        )}
        bottomContent={(
          <TouchableOpacity style={styles.buttonTouchable} onPress={() => this.state.albums.data.map(album => {
            return this.props.navigation.navigate('ControlCenter', { id: album.id, image: album.image_frames, name_image: album.name });
            })}
          >
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },

  textBold: {
    fontWeight: '500',
    color: '#000',
  },

  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },

  buttonTouchable: {
    padding: 16,
  },
});

export default ScanScreen;