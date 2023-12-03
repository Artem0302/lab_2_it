import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {TBuyScreenScreenType} from '@shared/types';
import styles from './rat-slot.styles';

type TBuyScreenNavProp = TBuyScreenScreenType['navigation'];

interface IRatSlot {
  age: string;
  name: string;
  price: string;
  image: ImageSourcePropType;
}

export function RatSlot({age, name, price, image}: IRatSlot) {
  const navigation = useNavigation<TBuyScreenNavProp>();

  return (
    <View style={styles.wrapper}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text_name}>{name}</Text>
      <View style={styles.footer}>
        <Text style={styles.text_age}>{age}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.price}>{price}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
