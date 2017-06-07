import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import App from './app/App';
import LoginPage from './app/components/LoginPage';
import LoginPrompt from './app/components/LoginPrompt';
import PostView from './app/components/PostView';
import WebViewWrapper from './app/components/WebViewWrapper';

const FitFriends = StackNavigator({
    App: {
        screen: App,
        navigationOptions: {
            title: 'Fit Friends'
        }
    },
    LoginPage: {
        screen: LoginPage,
        navigationOptions: {
            title: 'Log In to Facebook',
            header: null
        }
    },
    PostView: {
        screen: PostView,
        navigationOptions: {
            title: 'Post Details'
        }
    },
    WebViewWrapper: {
        screen: WebViewWrapper
    }

});

const Tabs = TabNavigator(
    {
        Feed: {
            screen: FitFriends,
            navigationOptions: {
                tabBarLabel: 'Feed',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ion-document-text' : 'ion-document-text-outline' }
                        size={26}
                        style={{ color: tintColor }}
                    />
                )
            }
        },
        LogOut: {
            screen: LoginPrompt,
            navigationOptions: {
                tabBarLabel: 'Log Out',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ion-log-out' : 'ion-log-out-outline' }
                        size={26}
                        style={{ color: tintColor }}
                    />
                )
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false
    }
);

AppRegistry.registerComponent('FitFriends', () => Tabs);