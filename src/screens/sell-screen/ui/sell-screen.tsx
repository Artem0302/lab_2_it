import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {TSellScreenScreenType} from '@shared/types';
import LeftArrow from './assets/left-arrow.svg';
import styles from './sell-screen.styles';

type TSellScreenNavProp = TSellScreenScreenType['navigation'];

export function SellScreen() {
  const navigation = useNavigation<TSellScreenNavProp>();

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
