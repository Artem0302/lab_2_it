import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {TBuyScreenScreenType} from '@shared/types';
import LeftArrow from './assets/left-arrow.svg';
import styles from './buy-screen.styles';

type TBuyScreenNavProp = TBuyScreenScreenType['navigation'];

export function BuyScreen() {
  const navigation = useNavigation<TBuyScreenNavProp>();

  const goBack = () => navigation.goBack();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={goBack}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
        <LeftArrow fill={'#000000'} width={25} height={25} />
      </TouchableOpacity>
    </View>
  );
}
