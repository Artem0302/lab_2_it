import React, {memo} from 'react';
import {StyleProp, Text, TextStyle, TouchableOpacity} from 'react-native';

import RatLeft from './assets/rat-icon-left.svg';
import styles from './rat-button.styles';

interface IRatButton {
  style?: StyleProp<TextStyle>;
  onPress: () => void;
  text: string;
}

export const RatButton = memo(({style, onPress, text}: IRatButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <RatLeft style={styles.rat} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
});
