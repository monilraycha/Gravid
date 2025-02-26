import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../constants/color';
import { horizontalScale , verticalScale } from '../helpers/Metrics';
import { RFValue } from 'react-native-responsive-fontsize';

const CommonButton = ({
  title = '',
  onPress = () => {},
  filled = false,
  style = {},
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        filled ? styles.filledButton : styles.outlinedButton,
        style,
      ]}
      onPress={onPress}>
      <Text
        style={[filled ? styles.filledText : styles.outlinedText, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  button: {
    width: '90%',
    paddingVertical: verticalScale(15),
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  filledButton: {
    backgroundColor: colors.primary,
  },
  outlinedButton: {
    borderColor: '#333',
    borderWidth: 1,
  },
  filledText: {
    color: '#333',
    letterSpacing: 1,
    fontFamily: 'Montserrat Medium',
  },
  outlinedText: {
    color: '#333',
    letterSpacing: 1,
    fontFamily: 'Montserrat Medium',

  },
});
