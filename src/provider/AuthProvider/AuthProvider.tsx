import React, {useState} from 'react';
import {useMutationLoginOrSignUp} from '/react-query/auth/auth';
import {LoginOrSignUpPayload} from '/api/auth/request.types';

export interface AuthContextValues {
  isAuthenticated: boolean;
  authViaEmail: (payload: LoginOrSignUpPayload) => void;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextValues | undefined>(
  undefined,
);

const AuthProvider: React.FC = ({children, ...rest}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const {mutateAsync} = useMutationLoginOrSignUp();

  const authViaEmail = async (payload: LoginOrSignUpPayload) => {
    try {
      await mutateAsync(payload);
      setIsAuthenticated(true);
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={
        {
          isAuthenticated,
          authViaEmail,
          logout,
        } as AuthContextValues
      }
      {...rest}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
