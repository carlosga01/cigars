import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Button from '/component/base/Button';
import {useNavigation} from '@react-navigation/native';
import {MainStackScreens} from '/component/navigator/MainStack/MainStack';
import useAuth from '/hook/useAuth/useAuth';

const Profile: React.FC = () => {
  const {goBack} = useNavigation<MainStackScreens>();
  const {logout} = useAuth();

  return (
    <SafeAreaView>
      <Button title="Back" onPress={goBack} />
      <Button title="Log out" onPress={logout} />

      <Text>Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
