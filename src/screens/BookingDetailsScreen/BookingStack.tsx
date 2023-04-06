import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Active from './Active';
import Past from './Past';
import Cancelled from './Cancelled';
import { theme } from '../../theme/theme';

const Stack = createNativeStackNavigator();

const BookingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Active">
      <Stack.Screen
        name="Active"
        component={Active}
        options={{
          title: 'Active',
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTintColor: theme.colors.white,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Past"
        component={Past}
        options={{
          title: 'Past',
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTintColor: theme.colors.white,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Cancelled"
        component={Cancelled}
        options={{
          title: 'Cancelled',
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTintColor: theme.colors.white,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default BookingStack;
