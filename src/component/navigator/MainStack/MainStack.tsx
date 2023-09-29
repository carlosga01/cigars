import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Home from '/component/screen/Home';
import useAuth from '/hook/useAuth/useAuth';
import Login from '/component/screen/Login';
import NewReview from '/component/screen/NewReview';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '/component/screen/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack: React.FC = () => {
  const {isAuthenticated} = useAuth();

  return isAuthenticated ? (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="NewReview"
        component={NewReview}
        options={{
          headerShown: false,
          tabBarLabel: 'New Review',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  ) : (
    <Stack.Navigator initialRouteName={isAuthenticated ? 'Home' : 'Login'}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
