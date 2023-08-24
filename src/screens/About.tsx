import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const About = (props: Props) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      // headerTitle: 'TESTING', // to change title
      headerShown: false, // to hide navbar
    });
  }, []);

  const navigateToHome = () => {
    navigation.navigate('Home' as never); // Assuming 'About' is the name of the screen in your navigation stack
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>About</Text>
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

export default About;
