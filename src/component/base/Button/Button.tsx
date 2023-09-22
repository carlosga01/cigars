import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {StyleProp} from 'react-native';
import Styles from './Button.styles';

type ButtonVariant = 'primary' | 'outline';

const getButtonStyleForVariant = (variant: ButtonVariant) => {
  if (variant === 'outline') {
    return {
      borderColor: 'black',
      borderWidth: 2,
      padding: 12,
      borderRadius: 100,
      width: '100%',
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
    } as ViewStyle;
  }

  return {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 100,
    width: '100%',
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
  } as ViewStyle;
};

const getTextStyleForVariant = (variant: ButtonVariant) => {
  if (variant === 'outline') {
    return {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 16,
    } as TextStyle;
  }

  return {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  } as TextStyle;
};

type Props = {
  title?: string;
  variant?: ButtonVariant;
  loading?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
} & Omit<PressableProps, 'style'>;

const Button: React.FC<Props> = ({
  title,
  variant = 'primary',
  loading,
  buttonStyle,
  textStyle,
  ...props
}) => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      style={[
        getButtonStyleForVariant(variant),
        buttonStyle,
        pressed && Styles.pressed,
      ]}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      {...props}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={[getTextStyleForVariant(variant), textStyle]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;
