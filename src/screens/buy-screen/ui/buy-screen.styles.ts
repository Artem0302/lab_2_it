import {StyleSheet} from 'react-native';
import {FONTS} from '@shared/constants/theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  status_bar: {
    width: '100%',
    backgroundColor: 'rgba(255, 227, 252, 0.46)',
    position: 'absolute',
    zIndex: 2,
  },
  container: {
    flex: 1,
  },
  back_btn: {
    margin: 15,
  },
  title: {
    fontFamily: FONTS.fontInterExtraBoldItalic,
    color: '#FF56E4',
    fontSize: 28,
    textAlign: 'center',
  },
});
