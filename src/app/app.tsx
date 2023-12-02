/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {MainNavigator} from '@navigation/main-navigator';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default App;
