import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeScreen} from '@screens/welcome-screen';
import React from 'react';

import {DISABLED_HEADER_STYLE_CONFIG} from '@shared/constants/navigation-config';
import {TMainNavigatorParamsList} from '@shared/types';

const Main = createStackNavigator<TMainNavigatorParamsList>();

export function MainNavigator() {
  return (
    <Main.Navigator
      screenOptions={DISABLED_HEADER_STYLE_CONFIG}
      initialRouteName={'MAIN.WELCOME_SCREEN'}>
      <Main.Screen name="MAIN.WELCOME_SCREEN" component={WelcomeScreen} />
    </Main.Navigator>
  );
}
