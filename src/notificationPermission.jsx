import React, {useState, useEffect} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import Modal from 'react-native-modal';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const NotificationPermissionModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS)
      .then(result => {
        if (result === RESULTS.DENIED) {
          setIsVisible(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handlePermissionRequest = async () => {
    const result = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
    if (result === RESULTS.GRANTED) {
      setIsVisible(false);
    } else {
      Alert.alert(
        'Notification Permission',
        'You need to allow notifications to receive updates.',
      );
    }
  };

  return (
    <View>
      <Modal isVisible={isVisible}>
        <View style={{backgroundColor: 'white', padding: 20}}>
          <Text>Allow Notifications</Text>
          <Button title="Allow" onPress={handlePermissionRequest} />
        </View>
      </Modal>
    </View>
  );
};

export default NotificationPermissionModal;
