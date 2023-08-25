import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Home from '/component/screen/Home';

const Stack = createNativeStackNavigator();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainStack;
