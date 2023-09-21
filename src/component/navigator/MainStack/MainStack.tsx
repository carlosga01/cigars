import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Home from '/component/screen/Home';
import useAuth from '/hook/useAuth/useAuth';
import Login from '/component/screen/Login';

const Stack = createNativeStackNavigator();

const MainStack: React.FC = () => {
  const {isAuthenticated} = useAuth();

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
