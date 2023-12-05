import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
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
import {launchImageLibrary} from 'react-native-image-picker';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TSellScreenScreenType} from '@shared/types';
import {LoadingModal, RatButton} from '@shared/ui';
import LeftArrow from './assets/left-arrow.svg';
import PlusIcon from './assets/plus-icon.svg';
import styles from './sell-screen.styles';

type TSellScreenNavProp = TSellScreenScreenType['navigation'];

export function SellScreen() {
  const navigation = useNavigation<TSellScreenNavProp>();
  const insets = useSafeAreaInsets();
  const [gender, setGender] = useState('');
  const [loaderVisible, setLoaderVisible] = useState<boolean>(false);

  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  const [photoUri, setPhotoUri] = useState(undefined);

  const goBack = () => navigation.goBack();

  const onPreviewHandler = () => {
    if (phone && description && age && name && price && gender && photoUri) {
      navigation.navigate('MAIN.PREVIEW_SCREEN', {
        description,
        phone,
        age_months: age,
        name,
        price,
        gender,
        photoUri,
        mode: 'sell',
      });
    } else {
      Alert.alert('You should fill in all fields');
    }
  };

  const openImagePicker = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
      } else if (response.error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        console.log('Image picker error: ', response.error);
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const imageUri = response.uri || response.assets?.[0]?.uri;
        setPhotoUri(imageUri);
      }
    });
  };

  const sendRat = async () => {
    const url = 'https://rats.anywhere.cyou/rats/';

    const body = {
      name: name,
      age_months: Number(age),
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

  const onPublishHandler = () => {
    if (phone && description && age && name && price && gender) {
      setLoaderVisible(true);
      sendRat()
        .then(response => {
          sendImage(response.data.id)
            .then(() => {
              setLoaderVisible(false);
              navigation.navigate('MAIN.RESULT_SCREEN', {mode: 'sell'});
            })
            .catch(error => console.log(error));
        })
        .catch(() => Alert.alert('Not valid data!'));
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
      <LoadingModal visible={loaderVisible} />
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
          <Text style={styles.title}>Set age ( number of months )</Text>
          <TextInput
            keyboardType={'numeric'}
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
              keyboardType={'numeric'}
              onChangeText={setPrice}
              style={[styles.input, {width: 200, marginTop: 0}]}
            />
            <Text style={styles.currency}>UAH</Text>
          </View>
          <Text style={styles.title}>Add photos</Text>
          <TouchableOpacity onPress={openImagePicker} style={styles.photo_btn}>
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
            <RatButton onPress={onPublishHandler} text={'Publish'} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
