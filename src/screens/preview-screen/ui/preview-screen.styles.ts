import {StyleSheet} from 'react-native';
import {FONTS} from '@shared/constants/theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  back_btn: {
    margin: 15,
  },
  body: {
    width: '100%',
    paddingHorizontal: 22,
  },
  name_text: {
    color: '#FF56E4',
    fontSize: 20,
    fontFamily: FONTS.fontInterExtraBoldItalic,
  },
  rat_circle: {
    borderRadius: 40,
    position: 'absolute',
    width: 66,
    height: 66,
    zIndex: 0,
    top: -22,
    right: -20,
  },
  rat: {
    position: 'absolute',
    zIndex: 3,
    top: -12,
    right: -10,
  },
  image: {
    width: '100%',
    height: 230,
  },
  info_wrapper: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info_left: {
    fontFamily: FONTS.fontInterRegular,
    fontSize: 20,
    color: '#FF56E4',
  },
  info_right: {
    fontFamily: FONTS.fontInterExtraBoldItalic,
    fontSize: 20,
    color: '#FF56E4',
  },
  title: {
    fontFamily: FONTS.fontInterRegular,
    fontSize: 20,
    color: '#FF56E4',
    marginBottom: 10,
    marginTop: 10,
  },
  description_wrapper: {
    backgroundColor: '#FFE3FC',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20,
    borderRadius: 8,
  },
  description: {
    fontFamily: FONTS.fontInterMedium,
    color: '#FF56E4',
    fontSize: 15,
  },
  footer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
});
