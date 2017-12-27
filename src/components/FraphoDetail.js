import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'; 

const FraphoDetail = (props) => {
    const album = props.album;
    const { id, name, created_time, image_frames } = album;
    let { image_default } = album;
    //If server give wrong image_default url
    const image_default_url_compare = image_default.substring(0, 14);
    if ( image_default_url_compare !== 'https://vgy.me')
    {
        image_default = 'https://frapho.com/img/frame/' + image_default
    }
    else image_default = image_default;

    const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle, imageDefaultStyle } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                {
                    <Image
                            style={thumbnailStyle} 
                            source={{ uri: image_default }}
                    />
                }
                    
                </ View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{name}</Text>
                    <Text>{created_time}</Text>
                </View>
            </ CardSection>
            <TouchableOpacity onPress={() => props.navigation.navigate('ControlCenter', { image: image_frames, name_image: name })}>
                <CardSection>
                    <Image style={imageDefaultStyle} source={{ uri: image_default }} />
                    {  
                        image_frames.map((item) => {
                         const frame_url_compare = item.substring(0, 14);
                         console.log(frame_url_compare);
                         if ( frame_url_compare !== 'https://vgy.me')
                         {
                             item = 'https://frapho.com/img/frame/' + item;
                         }
                         else item = item;
                         console.log(item);
                            //
                            return (<Image 
                                style={imageStyle}
                                source={{ uri: item }} 
                            />);
                        })
                    }
                </CardSection>
            </TouchableOpacity>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 15,
        color: '#337AB7',
        textDecorationLine: 'underline',
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        flexWrap: 'wrap',
        flex: 1,
        width: 300
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        borderRadius: 100,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    imageDefaultStyle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        margin: 5
    }
};
export default FraphoDetail;
