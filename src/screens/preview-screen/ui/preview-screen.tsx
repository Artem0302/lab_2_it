import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TPreviewScreenScreenType} from '@shared/types';
import {RatButton} from '@shared/ui';
import LeftArrow from './assets/left-arrow.svg';
import RatLeft from './assets/rat-icon-left.svg';
import styles from './preview-screen.styles';

type TPreviewScreenNavProp = TPreviewScreenScreenType['navigation'];
type TPreviewScreenRouteProp = TPreviewScreenScreenType['route'];

export function PreviewScreen() {
  const navigation = useNavigation<TPreviewScreenNavProp>();
  const route = useRoute<TPreviewScreenRouteProp>();
  const insets = useSafeAreaInsets();

  const {name, gender, price, age, photoUri, description, phone, mode} =
    route.params;

  const goBack = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.container, {paddingTop: insets.top}]}
        contentContainerStyle={{paddingBottom: 50}}>
        <TouchableOpacity
          onPress={goBack}
          style={styles.back_btn}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <LeftArrow fill={'#000000'} width={25} height={25} />
        </TouchableOpacity>
        <View style={styles.body}>
          <Text style={styles.name_text}>{name}</Text>
          <View style={{alignItems: 'center'}}>
            <View
              style={[
                styles.rat_circle,
                {backgroundColor: gender === 'male' ? '#D4EDEF' : '#FFE3FC'},
                gender === 'female' && {
                  borderWidth: 1,
                  borderColor: '#FB96F1',
                },
              ]}
            />
            <RatLeft style={styles.rat} />
            <Image
              style={styles.image}
              resizeMode={'contain'}
              source={{uri: photoUri}}
            />
          </View>
          <View style={styles.info_wrapper}>
            <Text style={styles.info_left}>Price:</Text>
            <Text style={styles.info_right}>{price}</Text>
          </View>
          <View style={styles.info_wrapper}>
            <Text style={styles.info_left}>Age:</Text>
            <Text style={styles.info_right}>{age}</Text>
          </View>
          <View style={styles.info_wrapper}>
            <Text style={styles.info_left}>Gender:</Text>
            <Text style={styles.info_right}>{gender}</Text>
          </View>
          <Text style={styles.title}>Description:</Text>
          <View style={styles.description_wrapper}>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View style={styles.info_wrapper}>
            <Text style={styles.info_left}>Phone number:</Text>
            <TouchableOpacity
              onPress={() => Clipboard.setString('hello world')}>
              <Text style={styles.info_right}>{phone}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <RatButton
              onPress={() => navigation.navigate('MAIN.RESULT_SCREEN', {mode})}
              text={mode === 'sell' ? 'Push' : 'Buy now'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
