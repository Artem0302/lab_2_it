import {StackScreenProps} from '@react-navigation/stack';

export type TMainNavigatorParamsList = {
  'MAIN.WELCOME_SCREEN': undefined;
  'MAIN.BUY_SCREEN': undefined;
  'MAIN.SELL_SCREEN': undefined;
  'MAIN.PREVIEW_SCREEN': {
    name: string;
    price: string;
    age: string;
    gender: string;
    description: string;
    phone: string;
  };
};

export type TWelcomeScreenScreenType = StackScreenProps<
  TMainNavigatorParamsList,
  'MAIN.WELCOME_SCREEN'
>;
export type TBuyScreenScreenType = StackScreenProps<
  TMainNavigatorParamsList,
  'MAIN.BUY_SCREEN'
>;
export type TSellScreenScreenType = StackScreenProps<
  TMainNavigatorParamsList,
  'MAIN.SELL_SCREEN'
>;
export type TPreviewScreenScreenType = StackScreenProps<
  TMainNavigatorParamsList,
  'MAIN.PREVIEW_SCREEN'
>;
