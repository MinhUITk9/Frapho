import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, CameraRoll } from 'react-native';
import PhotoView from 'react-native-photo-view';
import { captureRef, ViewShot } from 'react-native-view-shot';

const Platform = require('react-native').Platform;
const ImagePicker = require('react-native-image-picker');

class ControlCenter extends Component {
    static navigationOptions = {
        headerTitleStyle: { alignSelf: 'center', color: '#FFFFFF' },
        title: 'Frapho',
        headerStyle: { backgroundColor: '#0B4239' },
    };

    constructor(props) {
        super(props);
        this.state = { image_frame: props.navigation.state.params.image, name: props.navigation.state.params.name_image, image: null, isSave: false, link_uri: null };   
        (console.log(props.navigation.state.params.name_image));
        this.chooseImage = this.chooseImage.bind(this);
        this.snapshot = this.snapshot.bind(this);
    }

    componentDidMount() {
       const input = this.refs.viewShot;
       console.log(input);
    }
    snapshot(refname) {
        console.log(this.refs[refname]);
        captureRef(this.refs[refname], { format: 'jpg', quality: 1.0 })
            .then(
                //uri => console.log('Image saved to', uri),
                uri => CameraRoll.saveToCameraRoll(uri, 'photo'),
                //uri => this.setState({ link_uri: uri }),
                //console.log(this.state.link_uri),
                error => console.error('Oops, snapshot failed', error)
            );
    }
    

    chooseImage() {
        ImagePicker.showImagePicker({ noData: true }, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            //If it is iOS, remove 'file://' prefix
            let source = { uri: response.uri.replace('file://', ''), isStatic: true };
    
            //If android, don't need to remove the 'file://'' prefix
            if (Platform.OS === 'android') {
              source = { uri: response.uri, isStatic: true };
            }
            this.setState({ image: source.uri, isSave: true });
            console.log(this.state.image);
          }
        });
      }
      
      renderIf(condition, content) {
        if (condition === true)
            return content;
        else 
            return null;
     }   
    

    render() { 
        return (
            <View style={{ backgroundColor: '#e9ebee', height: '100%' }}>
                <Text style={styles.TitleStyle}>{this.state.name}</Text>
                <View style={styles.imageStyleContainer}>
                    <View ref='viewShot' collapsable={false}>
                        {
                            this.state.image_frame.map((item) => {
                                return (<Image 
                                    style={styles.imageStyle}
                                    source={{ uri: item }} 
                                />);
                            })
                        }
                        <PhotoView minimumZoomScale={0.5} maximumZoomScale={3} androidScaleType="center" style={styles.imageEditableStyle} source={{ uri: this.state.image }} />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={this.chooseImage}>
                            <Text style={styles.buttonText}>Choose...</Text>
                        </TouchableOpacity>
                        {this.renderIf(this.state.isSave,
                            <TouchableOpacity 
                                style={styles.button} 
                                onPress={() => this.snapshot('viewShot')}
                            >
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>
                        )}
                </View>
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
        marginTop: 10,
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
        textAlign: 'center',
        color: '#333',
        paddingTop: 10
    },
    button: {
        backgroundColor: '#E34517',
        width: 140,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
      },
      buttonText: {
        color: 'white'
      },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    imageEditableStyle: {
        height: 300,
        width: 300,
        position: 'absolute',
        top: 10,
        //left: 30.7,
        zIndex: -1
    }
};


export default ControlCenter;
