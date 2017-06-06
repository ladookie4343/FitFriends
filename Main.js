import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import App from './app/App';

const FitFriends = StackNavigator({
    App: {
        screen: App,
        navigationOptions: {
            title: 'Fit Friends'
        }
    }
});

AppRegistry.registerComponent('FitFriends', () => FitFriends);