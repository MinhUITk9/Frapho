import React, { Component } from 'react';
import { ScrollView, } from 'react-native';
import axios from 'axios';
import FraphoDetail from './FraphoDetail';

class FraphoList extends Component {
    static navigationOptions = {
        headerTitleStyle: { alignSelf: 'center' },
        title: 'Frapho',
      };
    /*static async getInitialProps() {
        const res = axios.get('https://frapho.com/api/get-frames?limit=1');
        const data = await res.json;
        return data;
    }*/
    state ={ albums: {
        data: []
    } };
    componentWillMount() {
        axios.get('https://frapho.com/api/get-frames?limit=10')
         .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.data.map(album => 
            <FraphoDetail key={album.id} album={album} />);
    }
    
    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default FraphoList;