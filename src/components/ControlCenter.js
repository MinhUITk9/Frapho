import React, { Component } from 'react';
import { Text } from 'react-native';

class ControlCenter extends Component {
    static navigationOptions = {
        headerTitleStyle: { alignSelf: 'center' },
        title: 'Frapho',  
    };

    constructor(props) {
        super(props);
        this.state = { data: props.navigation.state.params.image };
        
        //(console.log(props.navigation.state.params.image));
        
    }

    render() {
        return (
            <Text> {this.state.data} </Text>
        );
    }
}


export default ControlCenter;
