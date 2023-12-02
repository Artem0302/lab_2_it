import {StackScreenProps} from '@react-navigation/stack';

export type TMainNavigatorParamsList = {
  'MAIN.WELCOME_SCREEN': undefined;
};

export type TWelcomeScreenScreenType = StackScreenProps<
  TMainNavigatorParamsList,
  'MAIN.WELCOME_SCREEN'
>;
