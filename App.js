//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import AlbumList from './src/components/AlbumList';
import { StackNavigator } from 'react-navigation';


const RootNavigator = StackNavigator({
    AlbumList: {
        screen: AlbumList,
    },
    /*DetailScreen: {
        screen: DetailScreen,
    },*/
});
//Creat a component
const App = () => (
    <View style={{ flex: 1 }}>
        <RootNavigator />
    </View>
);

//render it to the screen
AppRegistry.registerComponent('frapho', () => App);
export default App; 