import React, {useCallback, useState} from 'react';
import {Dimensions, Image, SafeAreaView, View} from 'react-native';
import Styles from './Login.styles';
import useAuth from '/hook/useAuth/useAuth';
import Button from '/component/base/Button';
import TextInput from '/component/base/TextInput';

const Login: React.FC = () => {
  const {authViaEmail} = useAuth();

  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [loading, setLoading] = useState(false);
  const {width: windowWidth} = Dimensions.get('window');

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onPressLogin = useCallback(async () => {
    setLoading(true);
    await authViaEmail({email, password});
    setLoading(false);
  }, [authViaEmail, email, password]);

  const onToggleMode = () => setMode(mode === 'login' ? 'signup' : 'login');

  return (
    <SafeAreaView style={Styles.wrapper}>
      <View style={Styles.upperContainer}>
        <Image
          source={require('/asset/images/puros.png')}
          style={{
            width: windowWidth * 0.5,
            height: windowWidth * 0.35,
          }}
        />
      </View>
      <View style={Styles.middleContainer}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          inputStyle={Styles.input}
          containerStyle={Styles.inputContainer}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          inputStyle={Styles.input}
          containerStyle={Styles.inputContainer}
        />
        <Button
          title={mode === 'login' ? 'Log in' : 'Create account'}
          disabled={loading}
          loading={loading}
          onPress={onPressLogin}
        />
      </View>
      <View style={Styles.lowerContainer}>
        <Button
          title={
            mode === 'login' ? 'Create new account' : 'Already have an account?'
          }
          variant="outline"
          onPress={onToggleMode}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
