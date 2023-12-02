import {StyleSheet} from 'react-native';
import {FONTS} from '@shared/constants/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FB96F1',
    borderRadius: 10,
    width: 186,
    height: 74,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rat: {
    position: 'absolute',
    zIndex: 3,
    top: -28,
    left: -7,
    transform: [{scaleX: -1}, {rotate: '10deg'}],
  },
  text: {
    fontFamily: FONTS.fontInterExtraBoldItalic,
    color: '#FFE3FC',
    fontSize: 29,
  },
});
