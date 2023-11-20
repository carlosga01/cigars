import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Home from '/component/screen/Home';
import useAuth from '/hook/useAuth/useAuth';
import Login from '/component/screen/Login';
import NewReview from '/component/screen/NewReview';
import Profile from '/component/screen/Profile';

export type MainStackScreens = {
  Login: undefined;
  Home: undefined;
  NewReview: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<MainStackScreens>();

const MainStack: React.FC = () => {
  const {isAuthenticated} = useAuth();

  return (
    <Stack.Navigator
      initialRouteName={isAuthenticated ? 'Home' : 'Login'}
      screenOptions={{headerShown: false}}>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="NewReview"
            component={NewReview}
            options={{animation: 'slide_from_bottom'}}
          />
          <Stack.Screen name="Profile" component={Profile} />
        </>
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
