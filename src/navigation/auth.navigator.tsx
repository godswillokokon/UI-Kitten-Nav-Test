import React from 'react';
import { RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { AppRoute } from './app-routes';
import { SignInScreen, SignUpScreen, ResetPasswordScreen } from '../scenes/auth';

type AuthNavigatorParams = {
  [AppRoute.SIGN_IN]: undefined;
  [AppRoute.SIGN_UP]: undefined;
  [AppRoute.RESET_PASSWORD]: undefined;
}



const Stack = createStackNavigator();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen} />
    <Stack.Screen name={AppRoute.SIGN_UP} component={SignUpScreen} />
    <Stack.Screen name={AppRoute.RESET_PASSWORD} component={ResetPasswordScreen} />
  </Stack.Navigator>
);
