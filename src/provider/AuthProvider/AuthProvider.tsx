import React, {useState} from 'react';
import {useMutationLoginOrSignUp} from '/react-query/auth/auth';
import {LoginOrSignUpPayload} from '/api/auth/request.types';

export interface AuthContextValues {
  isAuthenticated: boolean;
  authViaEmail: (payload: LoginOrSignUpPayload) => void;
}

export const AuthContext = React.createContext<AuthContextValues>({
  isAuthenticated: false,
  authViaEmail: () => {
    return null;
  },
});

const AuthProvider: React.FC = ({children, ...rest}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const {mutateAsync} = useMutationLoginOrSignUp();

  const authViaEmail = async (payload: LoginOrSignUpPayload) => {
    try {
      await mutateAsync(payload);
      setIsAuthenticated(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider
      value={
        {
          isAuthenticated,
          authViaEmail,
        } as AuthContextValues
      }
      {...rest}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
