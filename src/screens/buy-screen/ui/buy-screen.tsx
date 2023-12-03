import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Platform, StatusBar, TouchableOpacity, View} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TBuyScreenScreenType} from '@shared/types';
import LeftArrow from './assets/left-arrow.svg';
import styles from './buy-screen.styles';

type TBuyScreenNavProp = TBuyScreenScreenType['navigation'];

export function BuyScreen() {
  const navigation = useNavigation<TBuyScreenNavProp>();
  const insets = useSafeAreaInsets();

  const goBack = () => navigation.goBack();

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
      <View style={[styles.container, {paddingTop: insets.top}]}>
        <TouchableOpacity
          onPress={goBack}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <LeftArrow fill={'#000000'} width={25} height={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
