import React from 'react';
import {Platform, StatusBar, Text, TouchableOpacity, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FONTS} from '@shared/constants/theme';
import {GradientText} from '@shared/ui';
import RatIconLeft from './assets/rat-icon-left.svg';
import styles from './welcome-screen.styles';

export function WelcomeScreen() {
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
        <View style={[styles.rectangle_top, {marginTop: insets.top}]} />
        <View style={styles.rectangle_middle} />
        <View style={styles.rectangle_bottom} />
        <View style={styles.body}>
          <GradientText
            colors={['rgba(255, 227, 252, 1)', 'rgba(255, 121, 242, 1)']}
            size={64}
            fontFamily={FONTS.fontInterExtraBoldItalic}>
            Rat shop
          </GradientText>
          <TouchableOpacity style={styles.button_buy}>
            <RatIconLeft style={styles.rat_buy} />
            <Text style={styles.btn_text}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_sell}>
            <RatIconLeft style={styles.rat_sell} />
            <Text style={styles.btn_text}>Sell</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
