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
    } };
    componentWillMount() {
        axios.get('https://frapho.com/api/get-frames?limit=12')
         .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.data.map(album => 
            <FraphoDetail key={album.id} album={album} navigation={this.props.navigation} />);
    }
    
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#e9ebee' }}>
                {<StatusBar
                    backgroundColor="#00251a"
                    barStyle="light-content"
                /> }
                <View style={style.container}>
                    <TextInput style={style.inputBox} placeholder="Key word: "></TextInput>
                    <TouchableOpacity style={style.btnStyle}>
                        <Text>🔍 Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../qr-code.png')} />
                    </TouchableOpacity>
                </View>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

const style = {
    container: {
        flex: 1,
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