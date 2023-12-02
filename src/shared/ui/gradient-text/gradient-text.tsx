import MaskedView from '@react-native-masked-view/masked-view';
import React, {memo} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {FONTS} from '@shared/constants/theme';
import styles from './gradient-text.styles';

const GRADIENT_HORIZONTAL = {
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
};

interface ITextProps {
  children: string;
  size?: number;
  colors?: (string | number)[];
  fontFamily?: keyof typeof FONTS | string;
  lineHeight?: number;
  uppercase?: boolean;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  horizontal?: boolean;
}

export const GradientText = memo(
  ({
    colors,
    horizontal = false,
    size = 14,
    fontFamily = FONTS.fontInterRegular,
    lineHeight,
    uppercase,
    style,
    numberOfLines,
    ...props
  }: ITextProps) => {
    const lineHeightValue = lineHeight || size + 4;

    const options: StyleProp<TextStyle> = {
      fontSize: size,
      fontFamily,
      lineHeight: lineHeightValue,
    };

    return (
      <MaskedView
        maskElement={
          <Text
            {...props}
            numberOfLines={numberOfLines}
            style={[{...options}, uppercase && styles.uppercase, style]}
          />
        }>
        <LinearGradient
          colors={colors || ['#FFFFFF', '#A2A2A2', '#FFFFFF']}
          start={horizontal ? GRADIENT_HORIZONTAL.start : undefined}
          end={horizontal ? GRADIENT_HORIZONTAL.end : undefined}>
          <Text
            {...props}
            style={[
              {opacity: 0, ...options},
              uppercase && styles.uppercase,
              style,
            ]}
            numberOfLines={numberOfLines}
          />
        </LinearGradient>
      </MaskedView>
    );
  },
);
