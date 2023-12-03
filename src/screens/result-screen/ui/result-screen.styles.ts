import {StyleSheet} from 'react-native';

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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    marginBottom: 90,
  },
});
