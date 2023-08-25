import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from '/component/navigator/MainStack';

const AppRoot: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default AppRoot;
