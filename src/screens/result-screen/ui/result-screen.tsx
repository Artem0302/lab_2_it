import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Platform, StatusBar, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FONTS} from '@shared/constants/theme';
import {TResultScreenScreenType} from '@shared/types';
import {GradientText, RatButton} from '@shared/ui';
import styles from './result-screen.styles';

type TResultScreenNavProp = TResultScreenScreenType['navigation'];

export function ResultScreen() {
  const navigation = useNavigation<TResultScreenNavProp>();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.wrapper}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="rgba(255, 227, 252, 0.46)"
      />
      {Platform.OS === 'ios' && (
        <View style={[styles.status_bar, {height: insets.top}]} />
      )}
      <LinearGradient
        style={[styles.container, {paddingTop: insets.top}]}
        colors={['#FFE3FC', '#FB96F1']}>
        <GradientText
          colors={['white', 'pink']}
          size={26}
          fontFamily={FONTS.fontInterExtraBoldItalic}
          style={styles.text}>
          Congratulation! The ad will be up for sale soon!
        </GradientText>
        <RatButton
          onPress={() => navigation.navigate('MAIN.WELCOME_SCREEN')}
          text={'Go Home'}
        />
      </LinearGradient>
    </View>
  );
}
