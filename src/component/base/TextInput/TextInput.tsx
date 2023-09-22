import React from 'react';
import {
  StyleProp,
  TextInputProps,
  View,
  ViewStyle,
  TextInput as RNTextInput,
  TextStyle,
} from 'react-native';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
} & Omit<TextInputProps, 'style'>;

const TextInput: React.FC<Props> = ({containerStyle, inputStyle, ...props}) => {
  return (
    <View style={containerStyle}>
      <RNTextInput
        cursorColor="#000000"
        selectionColor="#000000"
        placeholderTextColor="#000000B3"
        autoCorrect={false}
        autoCapitalize="none"
        style={inputStyle}
        {...props}
      />
    </View>
  );
};

export default TextInput;
