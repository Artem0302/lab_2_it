import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TSellScreenScreenType} from '@shared/types';
import {RatButton} from '@shared/ui';
import LeftArrow from './assets/left-arrow.svg';
import PlusIcon from './assets/plus-icon.svg';
import styles from './sell-screen.styles';

type TSellScreenNavProp = TSellScreenScreenType['navigation'];

export function SellScreen() {
  const navigation = useNavigation<TSellScreenNavProp>();
  const insets = useSafeAreaInsets();
  const [gender, setGender] = useState('');

  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  const goBack = () => navigation.goBack();

  const onPreviewHandler = () => {
    if (phone && description && age && name && price && gender) {
      navigation.navigate('MAIN.PREVIEW_SCREEN', {
        description,
        phone,
        age,
        name,
        price,
        gender,
      });
    } else {
      Alert.alert('You should fill in all fields');
    }
  };

  return (
    <View style={styles.wrapper}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="rgba(255, 255, 255, 0.46)"
      />
      {Platform.OS === 'ios' && (
        <View style={[styles.status_bar, {height: insets.top}]} />
      )}
      <ScrollView
        style={[styles.container, {paddingTop: insets.top}]}
        contentContainerStyle={{paddingBottom: 50}}>
        <TouchableOpacity
          onPress={goBack}
          style={styles.back_btn}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <LeftArrow fill={'#000000'} width={25} height={25} />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.header_text}>Fill the form</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>Present your rat</Text>
          <TextInput value={name} onChangeText={setName} style={styles.input} />
          <Text style={styles.title}>Set age</Text>
          <TextInput
            value={age}
            onChangeText={setAge}
            style={[styles.input, {width: 150}]}
          />
          <Text style={styles.title}>Set gender</Text>
          <View style={styles.radio_wrapper}>
            <TouchableOpacity
              style={styles.radio_btn}
              onPress={() => setGender('male')}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              {gender === 'male' && <View style={styles.radio_active} />}
            </TouchableOpacity>
            <Text style={styles.radio_text}>male</Text>
            <TouchableOpacity
              onPress={() => setGender('female')}
              style={styles.radio_btn}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              {gender === 'female' && <View style={styles.radio_active} />}
            </TouchableOpacity>
            <Text style={styles.radio_text}>female</Text>
          </View>
          <Text style={styles.title}>Price</Text>
          <View style={styles.price_wrapper}>
            <TextInput
              value={price}
              onChangeText={setPrice}
              style={[styles.input, {width: 200, marginTop: 0}]}
            />
            <Text style={styles.currency}>UAH</Text>
          </View>
          <Text style={styles.title}>Add photos</Text>
          <TouchableOpacity style={styles.photo_btn}>
            <PlusIcon />
          </TouchableOpacity>
          <Text style={styles.title}>Contact phone number</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
          />
          <Text style={styles.title}>Add some description</Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            multiline={true}
            style={styles.description}
          />
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={onPreviewHandler}
              style={styles.preview_btn}>
              <Text style={styles.preview_text}>Preview</Text>
            </TouchableOpacity>
            <RatButton onPress={() => console.log('hello')} text={'Publish'} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
