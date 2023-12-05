import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios/index';
import React, {useCallback, useState} from 'react';
import {
  Alert,
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
import {LoadingModal, RatButton} from '@shared/ui';
import LeftArrow from './assets/left-arrow.svg';
import RatLeft from './assets/rat-icon-left.svg';
import styles from './preview-screen.styles';

type TPreviewScreenNavProp = TPreviewScreenScreenType['navigation'];
type TPreviewScreenRouteProp = TPreviewScreenScreenType['route'];

export function PreviewScreen() {
  const navigation = useNavigation<TPreviewScreenNavProp>();
  const route = useRoute<TPreviewScreenRouteProp>();
  const insets = useSafeAreaInsets();
  const [loaderVisible, setLoaderVisible] = useState<boolean>(false);

  const {
    name,
    gender,
    price,
    age_months,
    photoUri,
    description,
    phone,
    mode,
    id,
  } = route.params;

  const goBack = () => navigation.goBack();

  const sendRat = async () => {
    const url = 'https://rats.anywhere.cyou/rats/';

    const body = {
      name: name,
      age_months: Number(age_months),
      gender: gender === 'female' ? 'f' : 'm',
      price: Number(price),
      phone: phone,
      description: description,
    };

    return await axios.post(url, body);
  };

  const sendImage = async (ratId: string) => {
    const url = `https://rats.anywhere.cyou/rats/${ratId}/`;

    const formData = new FormData();
    formData.append('image', {
      name: 'ratImage',
      uri: photoUri,
      type: 'image/jpeg',
    });

    return axios.patch(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  const buyRat = useCallback(async () => {
    const url = `https://rats.anywhere.cyou/rats/${id}/`;

    return await axios.delete(url, {});
  }, []);

  const nextButtonHandler = () => {
    if (mode === 'sell') {
      setLoaderVisible(true);
      sendRat()
        .then(response => {
          sendImage(response.data.id)
            .then(() => {
              setLoaderVisible(false);
              navigation.navigate('MAIN.RESULT_SCREEN', {mode});
            })
            .catch(error => console.log(error));
        })
        .catch(() => Alert.alert('Not valid data!'));
    } else {
      buyRat()
        .then(() => {
          navigation.navigate('MAIN.RESULT_SCREEN', {mode});
        })
        .catch(() => Alert.alert('Smth went wrong'));
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <LoadingModal visible={loaderVisible} />
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
            <Text style={styles.info_right}>{age_months}</Text>
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
              onPress={nextButtonHandler}
              text={mode === 'sell' ? 'Push' : 'Buy now'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
