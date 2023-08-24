import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import notifee from '@notifee/react-native';
import {useNotification} from '../hooks/useNotifications';
type Props = {};

const Home = (props: Props) => {
  const {
    cancelAllNotifications,
    cancelNotification,
    cancelTriggerNotifications,
    displayNotification,
    displayTriggerNotification,
    getTriggerNotificationIds,
  } = useNotification();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      // headerTitle: 'TESTING', // to change title
      headerShown: false, // to hide navbar
    });
  }, []);

  const navigateToAbout = () => {
    navigation.navigate('About' as never); // Assuming 'About' is the name of the screen in your navigation stack
  };

  const handleDisplayNotification = async (
    title: string,
    body: string,
    name: string,
  ) => {
    // Display notification
    displayNotification(title, body, name);
  };

  const handleCreateTriggerNotification = () => {
    // Display notification in 3 seconds
    displayTriggerNotification(
      'NotificationTitle',
      'NotificationBody',
      Date.now() + 3000,
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Home</Text>

        <View style={styles.buttons}>
          <Button title="Go to About" onPress={navigateToAbout} />
          <Button
            title="Display Notification"
            onPress={() =>
              handleDisplayNotification(
                'MOK',
                `Uzumaki Narto mengganti foto profile`,
                'Uzumaki Narto',
              )
            }
          />
          <Button
            title="Create Trigger Notification"
            onPress={handleCreateTriggerNotification}
          />
          <Button
            title="Cancel All Notifications"
            onPress={cancelAllNotifications}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
});

export default Home;
