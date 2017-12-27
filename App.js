//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import FraphoList from './src/components/FraphoList';
import { StackNavigator } from 'react-navigation';
import ControlCenter from './src/components/ControlCenter';
import ScanScreen from './src/components/ScanScreen';


const RootNavigator = StackNavigator({
  FraphoList: {
        screen: FraphoList,
    },
    ControlCenter: {
        screen: ControlCenter,
    },
     ScanScreen: {
         screen: ScanScreen,
     }
});
//Creat a component
const App = () => (
    <View style={styles.containerStyle}>
        <RootNavigator />
    </View>
);

const styles = {
    containerStyle: {
        flex: 1
    }
};

//render it to the screen
AppRegistry.registerComponent('Frapho', () => App);
export default App; 