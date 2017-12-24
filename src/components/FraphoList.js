import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
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
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default FraphoList;