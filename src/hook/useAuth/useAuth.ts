import {useContext} from 'react';

import {AuthContext, Types} from '/provider/AuthProvider';

const useAuth = (): Types.AuthContextValues => useContext(AuthContext);

export default useAuth;
