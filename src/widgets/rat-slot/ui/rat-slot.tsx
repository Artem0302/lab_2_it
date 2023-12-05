import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {TBuyScreenScreenType, TRat} from '@shared/types';
import RatLeft from './assets/rat-icon-left.svg';
import styles from './rat-slot.styles';

type TBuyScreenNavProp = TBuyScreenScreenType['navigation'];

interface IRatSlot {
  image: string;
  info: TRat;
}

export function RatSlot({info, image}: IRatSlot) {
  const navigation = useNavigation<TBuyScreenNavProp>();

  const {age_months, name, price, gender, description, phone, id} = info;

  const onBuyHandler = () =>
    navigation.navigate('MAIN.PREVIEW_SCREEN', {
      age_months,
      name,
      price,
      gender,
      description,
      phone,
      mode: 'buy',
      id,
      photoUri: image,
    });

  return (
    <View style={styles.wrapper}>
      <View>
        <View
          style={[
            styles.rat_circle,
            {backgroundColor: gender === 'male' ? '#D4EDEF' : '#FFE3FC'},
            gender !== 'male' && {
              borderWidth: 1,
              borderColor: '#FB96F1',
            },
          ]}
        />
        <RatLeft style={styles.rat} />
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <Text style={styles.text_name}>{name}</Text>
      <View style={styles.footer}>
        <Text style={styles.text_age}>{age_months}</Text>
        <TouchableOpacity onPress={onBuyHandler} style={styles.button}>
          <Text style={styles.price}>{price}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
