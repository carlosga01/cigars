import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Home from '/component/screen/Home';
import useAuth from '/hook/useAuth/useAuth';
import Login from '/component/screen/Login';
import NewReview from '/component/screen/NewReview';
import Profile from '/component/screen/Profile';

const Stack = createNativeStackNavigator();

const MainStack: React.FC = () => {
  const {isAuthenticated} = useAuth();

  return (
    <Stack.Navigator initialRouteName={isAuthenticated ? 'Home' : 'Login'}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewReview"
        component={NewReview}
        options={{
          animation: 'slide_from_bottom',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
