import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

import styles from './welcome-screen.styles';

export function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#FFE3FC" />
      <Text>Hello</Text>
    </SafeAreaView>
  );
}
