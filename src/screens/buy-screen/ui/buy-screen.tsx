import {gql, useQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
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

const GET_RATS = gql`
  query GetRats {
    rats {
      id
      name
      ageMonths
      gender
      price
      phone
      description
      image
    }
  }
`;

export function BuyScreen() {
  const navigation = useNavigation<TBuyScreenNavProp>();
  const insets = useSafeAreaInsets();
  const [loaderVisible, setLoaderVisible] = useState<boolean>(true);
  const {data, loading, error} = useQuery(GET_RATS);
  const [localData, setLocalData] = useState([]);

  const goBack = () => navigation.goBack();

  useEffect(() => {
    setLoaderVisible(loading);
  }, [loading]);

  useEffect(() => {
    if (data !== undefined) {
      setLocalData(data);
    }
  }, [data]);

  const renderItem = ({item}: {item: TRat}) => {
    return (
      <RatSlot
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        image={item.image}
        info={{
          age_months: item.ageMonths,
          name: item.name,
          price: item.price,
          gender: item.gender === 'f' ? 'female' : 'male',
          phone: item.phone,
          description: item.description,
          id: item.id,
        }}
      />
    );
  };

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
        {localData.length === 0 ? (
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
            data={localData.rats}
            renderItem={renderItem}
          />
        )}
      </LinearGradient>
    </View>
  );
}
