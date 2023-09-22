import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from '/component/navigator/MainStack';
import AuthProvider from '/provider/AuthProvider';
import {QueryClientProvider} from 'react-query';
import {queryClient} from '/react-query/setup';

const AppRoot: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default AppRoot;
