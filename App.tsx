/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Linking,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  getToken,
  notificationListener,
  requestUserPermission,
} from './src/utils/commonUtils';
import RootNavigator from './src/navigation/RootNavigator';
import notifee, {EventType} from '@notifee/react-native';
// import {useNavigation} from '@react-navigation/native';

function App(): JSX.Element {
  // const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    requestUserPermission();
    notificationListener();
    getToken();
  }, []);

  // Subscribe to events
  useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          const data = detail.notification?.data;
          console.log('User pressed notification', data);

          Linking.openURL(`mok-test://profile/${data?.name}`).catch(error =>
            console.error('Error opening URI', error),
          );
          break;
      }
    });
  }, []);

  const [loading, setLoading] = useState(true);

  // Bootstrap sequence function
  async function bootstrap() {
    const initialNotification = await notifee.getInitialNotification();

    if (initialNotification) {
      console.log(
        'Notification caused application to open',
        initialNotification.notification,
      );
      console.log(
        'Press action used to open the app',
        initialNotification.pressAction,
      );
    }
  }

  useEffect(() => {
    bootstrap()
      .then(() => setLoading(false))
      .catch(console.error);
  }, []);

  return <RootNavigator />;
}

export default App;
