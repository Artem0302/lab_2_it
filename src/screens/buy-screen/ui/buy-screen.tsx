import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RatSlot} from '@widgets/rat-slot';
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
      <LinearGradient
        style={[styles.container, {paddingTop: insets.top}]}
        colors={['#FFE3FC', '#FB96F1']}>
        <TouchableOpacity
          onPress={goBack}
          style={styles.back_btn}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <LeftArrow fill={'#000000'} width={25} height={25} />
        </TouchableOpacity>
        <Text style={styles.title}>Choose your fighter!</Text>
        <RatSlot
          image={require('./assets/rat_image.png')}
          name={'Rat on the blue background'}
          age={'2 month old'}
          price={'1500₴'}
        />
      </LinearGradient>
    </View>
  );
}
