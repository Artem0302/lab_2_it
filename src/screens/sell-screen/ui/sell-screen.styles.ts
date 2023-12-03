import {StyleSheet} from 'react-native';
import {FONTS} from '@shared/constants/theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  status_bar: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.46)',
    position: 'absolute',
    zIndex: 2,
  },
  container: {
    backgroundColor: '#FFE3FC',
    flex: 1,
  },
  back_btn: {
    margin: 15,
  },
  header: {
    width: '100%',
    alignItems: 'center',
  },
  header_text: {
    fontFamily: FONTS.fontInterExtraBoldItalic,
    fontSize: 28,
    color: '#FF56E4',
  },
  body: {
    width: '100%',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    fontFamily: FONTS.fontInterExtraBoldItalic,
    color: '#FF56E4',
  },
  input: {
    marginTop: 10,
    backgroundColor: 'rgba(255, 253, 198, 0.6)',
    width: 283,
    borderRadius: 8,
    height: 40,
    paddingVertical: 10,
    fontFamily: FONTS.fontInterMedium,
    color: 'black',
    paddingHorizontal: 10,
    fontSize: 15,
  },
  radio_wrapper: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio_btn: {
    borderColor: '#FF56E4',
    borderWidth: 1,
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 253, 198, 0.6)',
  },
  radio_active: {
    margin: 3,
    flex: 1,
    borderRadius: 15,
    backgroundColor: '#FF56E4',
  },
  radio_text: {
    marginLeft: 4,
    marginRight: 20,
    fontFamily: FONTS.fontInterExtraBoldItalic,
    color: '#FF56E4',
    fontSize: 20,
  },
  price_wrapper: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  currency: {
    fontSize: 20,
    marginLeft: 10,
    fontFamily: FONTS.fontInterExtraBoldItalic,
    color: '#FF56E4',
  },
  photo_btn: {
    marginTop: 10,
    backgroundColor: 'rgba(255, 253, 198, 0.6)',
    width: 283,
    borderRadius: 8,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  description: {
    marginTop: 10,
    backgroundColor: 'rgba(255, 253, 198, 0.6)',
    width: 283,
    borderRadius: 8,
    height: 118,
    paddingVertical: 10,
    fontFamily: FONTS.fontInterMedium,
    color: 'black',
    paddingHorizontal: 10,
    fontSize: 15,
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  preview_btn: {
    borderRadius: 10,
    width: 111,
    height: 30,
    backgroundColor: 'rgba(255, 253, 198, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview_text: {
    fontSize: 20,
    fontFamily: FONTS.fontInterExtraBoldItalic,
    color: '#FF56E4',
  },
});
