import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, StatusBar, Text, TouchableOpacity, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RatSlot} from '@widgets/rat-slot';
import {TBuyScreenScreenType, TRat} from '@shared/types';
import {LoadingModal} from '@shared/ui';
import LeftArrow from './assets/left-arrow.svg';
import styles from './buy-screen.styles';

type TBuyScreenNavProp = TBuyScreenScreenType['navigation'];

export function BuyScreen() {
  const navigation = useNavigation<TBuyScreenNavProp>();
  const insets = useSafeAreaInsets();
  const [data, setData] = useState([]);
  const [loaderVisible, setLoaderVisible] = useState<boolean>(true);

  const goBack = () => navigation.goBack();

  const requestData = async () => {
    const url = 'https://rats.anywhere.cyou/rats/';

    return await axios.get(url, {});
  };

  useEffect(() => {
    requestData()
      .then(response => {
        setData(response.data);
        setLoaderVisible(false);
      })
      .catch(error => console.log(error))
      .finally(() => setLoaderVisible(false));
  }, []);

  const renderItem = ({item}: {item: TRat}) => (
    <RatSlot
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      image={item.image_url}
      info={{
        age_months: item.age_months,
        name: item.name,
        price: item.price,
        gender: item.gender === 'f' ? 'female' : 'male',
        phone: item.phone,
        description: item.description,
        id: item.id,
      }}
    />
  );

  return (
    <View style={styles.wrapper}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="rgba(255, 227, 252, 0.46)"
      />
      <LoadingModal visible={loaderVisible} />
      <LinearGradient
        style={[styles.container, {paddingTop: insets.top}]}
        colors={['#FFE3FC', '#FB96F1']}>
        {data.length === 0 ? (
          <View>
            <TouchableOpacity
              onPress={goBack}
              style={[styles.back_btn, {marginHorizontal: 15}]}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              <LeftArrow fill={'#000000'} width={25} height={25} />
            </TouchableOpacity>
            <Text style={[styles.title, {marginTop: 30}]}>
              Sorry, but the message board is currently empty
            </Text>
          </View>
        ) : (
          <FlatList
            ListHeaderComponent={() => (
              <View>
                <TouchableOpacity
                  onPress={goBack}
                  style={styles.back_btn}
                  hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
                  <LeftArrow fill={'#000000'} width={25} height={25} />
                </TouchableOpacity>
                <Text style={styles.title}>Choose your fighter!</Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatlist}
            data={data}
            renderItem={renderItem}
          />
        )}
      </LinearGradient>
    </View>
  );
}
