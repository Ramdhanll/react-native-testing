import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

type Props = {
  route?: any;
};

const Profile = ({route}: Props) => {
  const params = route.params || {};
  const {personName} = params;

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      // headerTitle: 'TESTING', // to change title
      headerShown: false, // to hide navbar
    });
  }, []);

  const navigateToHome = () => {
    navigation.navigate('Home' as never); // Assuming 'Home' is the name of the screen in your navigation stack
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Profile: {personName}</Text>
        <Button title="Go to Home" onPress={navigateToHome} />
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
});

export default Profile;
