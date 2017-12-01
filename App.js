//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import FraphoList from './src/components/FraphoList';
import { StackNavigator } from 'react-navigation';


const RootNavigator = StackNavigator({
  FraphoList: {
        screen: FraphoList,
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
AppRegistry.registerComponent('Frapho', () => App);
export default App; 