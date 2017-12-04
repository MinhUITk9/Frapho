import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

class ControlCenter extends Component {
    static navigationOptions = {
        headerTitleStyle: { alignSelf: 'center' },
        title: 'Frapho',  
    };

    constructor(props) {
        super(props);
        this.state = { image_frame: props.navigation.state.params.image, name: props.navigation.state.params.name_image };   
        (console.log(props.navigation.state.params.name_image));
    }
    

    render() {
        return (
            <View style={styles.imageStyleContainer}>
                <Text>{this.state.name}</Text>   
                {
                    this.state.image_frame.map(function (item) {
                        return (<Image 
                            style={styles.imageStyle}
                            source={{ uri: item }} 
                        />);
                    })
                }
            
            
            </View>
        );
    }
}

const styles = {
    imageStyleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    },
    imageStyle: {
        height: 300,
        width: 300
    }
};


export default ControlCenter;
