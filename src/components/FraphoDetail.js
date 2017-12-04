import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'; 

const FraphoDetail = (props) => {

    const album = props.album;

    const { id, name, image_default, image_frames } = album;
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
                    <Text>{id}</Text>
                </ View>
            </ CardSection>
            <TouchableOpacity onPress={() => props.navigation.navigate('ControlCenter', { image: image_frames, name_image: name })}>
            
                <CardSection>
                    <Image style={imageDefaultStyle} source={{ uri: image_default }} />
                    {  
                        image_frames.map(function (item) {
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
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
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