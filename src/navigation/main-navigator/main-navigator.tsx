import {createStackNavigator} from '@react-navigation/stack';
import {BuyScreen} from '@screens/buy-screen';
import {PreviewScreen} from '@screens/preview-screen';
import {ResultScreen} from '@screens/result-screen';
import {SellScreen} from '@screens/sell-screen';
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
      <Main.Screen name="MAIN.BUY_SCREEN" component={BuyScreen} />
      <Main.Screen name="MAIN.SELL_SCREEN" component={SellScreen} />
      <Main.Screen name="MAIN.PREVIEW_SCREEN" component={PreviewScreen} />
      <Main.Screen name="MAIN.RESULT_SCREEN" component={ResultScreen} />
    </Main.Navigator>
  );
}
