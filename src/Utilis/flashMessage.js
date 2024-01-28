import { showMessage } from 'react-native-flash-message';
import { StyleSheet, Vibration } from 'react-native';
import { ColorSheet } from './ColorSheet';

const duration = 3500;

export const ErrorFlash = (description) => {
  showMessage({
    textStyle: styles.textStyle,
    titleStyle: styles.titleStyle,
    message: '',
    description: description,
    type: 'default',
    backgroundColor: ColorSheet.Error, // background color
    color: ColorSheet.White,
    duration: duration,
  });
  Vibration.vibrate();
};

export const SuccessFlash = (description) => {
  showMessage({
    textStyle: styles.textStyle,
    titleStyle: styles.titleStyle,
    message: '',
    description: description,
    type: 'default',
    backgroundColor: ColorSheet.Success, // background color
    color: ColorSheet.White,
    duration: duration,
  });
};

const styles = StyleSheet.create({
  textStyle: { paddingLeft: 10 },
  titleStyle: { paddingLeft: 10 },
});
