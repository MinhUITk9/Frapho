import React, { Component } from 'react';
import { ScrollView, StatusBar, TextInput, View, TouchableOpacity, Text, Image } from 'react-native';
import axios from 'axios';
import FraphoDetail from './FraphoDetail';

class FraphoList extends Component {
    static navigationOptions = {
        headerTitleStyle: { alignSelf: 'center', color: '#FFFFFF' },
        title: 'Frapho',
        headerStyle: { backgroundColor: '#0B4239' },
      };
      
    state ={ albums: {
        data: []
    }, 
    text: '' };
    componentWillMount() {
        axios.get('https://frapho.com/api/get-frames?limit=12')
         .then(response => this.setState({ albums: response.data }));
    }

    searchAlbums(key_word) {
        console.log(key_word);
        axios.get('https://frapho.com/api/get-frames?key=' + key_word)
         .then(response => this.setState({ albums: response.data }));
        return this.state.albums.data.map(album => 
            <FraphoDetail key={album.id} album={album} navigation={this.props.navigation} />);
    }

    renderAlbums() {
        return this.state.albums.data.map(album => 
            <FraphoDetail key={album.id} album={album} navigation={this.props.navigation} />);
    }
    
    render() {
        return (
        <View>
            <View style={style.container}>
                    <TextInput style={style.inputBox} placeholder="Key word: " onChangeText={(text) => this.setState({ text })}></TextInput>
                    <TouchableOpacity 
                        style={style.btnStyle} 
                        onPress={() => this.searchAlbums(this.state.text)}>
                            <Text>🔍 Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../qr-code.png')} />
                    </TouchableOpacity>
            </View>
            <ScrollView style={{ backgroundColor: '#e9ebee' }}>
                {<StatusBar
                    backgroundColor="#00251a"
                    barStyle="light-content"
                /> }
                
                {this.renderAlbums()}
            </ScrollView>
        </View>
        );
    }
}

const style = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    inputBox: {
        borderRadius: 25,
        width: 280,
        height: 45,
        paddingHorizontal: 5,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },
    btnStyle: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 25,
        width: 70,
        height: 23,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 7,
    }
};

export default FraphoList;