import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// rest of the import statement remains same
import {ActivityIndicator} from 'react-native';
import notifee, {EventType} from '@notifee/react-native';

const linking = {
  prefixes: ['mok-test://'],
  config: {
    screens: {
      Home: {
        path: 'home',
      }, // Match the screen names defined in your navigator
      About: {
        path: 'about',
      }, // Match the screen names defined in your navigator
      Profile: {
        path: 'profile/:personName',
      }, // Match the screen names defined in your navigator
    },
  },
};

import Home from '../screens/Home';
import About from '../screens/About';
import Profile from '../screens/Profile';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  // Subscribe to events
  // useEffect(() => {
  //   return notifee.onForegroundEvent(({type, detail}) => {
  //     switch (type) {
  //       case EventType.DISMISSED:
  //         console.log('User dismissed notification', detail.notification);
  //         break;
  //       case EventType.PRESS:
  //         const data = detail.notification?.data;
  //         console.log('User pressed notification', data);
  //         break;
  //     }
  //   });
  // }, []);

  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator color={'blue'} size={'large'} />}>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="About" component={About} />
        <RootStack.Screen name="Profile" component={Profile} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
