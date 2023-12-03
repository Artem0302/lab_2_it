import {StyleSheet} from 'react-native';
import {FONTS} from '@shared/constants/theme';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 182,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  text_name: {
    marginTop: 10,
    color: '#FF56E4',
    fontFamily: FONTS.fontInterExtraBoldItalic,
    fontSize: 18,
    textAlign: 'right',
    marginBottom: 19,
  },
  text_age: {
    color: '#FF56E4',
    fontFamily: FONTS.fontInterExtraBoldItalic,
    fontSize: 16,
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#FB96F1',
    width: 121,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    color: '#FFE3FC',
    fontFamily: FONTS.fontInterExtraBoldItalic,
    fontSize: 20,
  },
});
