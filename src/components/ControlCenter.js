import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

class ControlCenter extends Component {
    static navigationOptions = {
        headerTitleStyle: { alignSelf: 'center' },
        title: 'Frapho'
    };

    constructor(props) {
        super(props);
        this.state = { image_frame: props.navigation.state.params.image, name: props.navigation.state.params.name_image };   
        (console.log(props.navigation.state.params.name_image));
    }
    

    render() {
        return (
            <View style={styles.imageStyleContainer}>
                <Text style={styles.TitleStyle}>{this.state.name}</Text>   
                {
                    this.state.image_frame.map((item) => {
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
        marginBottom: 15,
        marginTop: 10,
        height: 300,
        width: 300,
    },
    TitleStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
        textAlign: 'center'
    }
};


export default ControlCenter;
