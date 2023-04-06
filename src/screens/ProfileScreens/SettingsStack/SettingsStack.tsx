import {} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import UnitsOfMeasure from './UnitsOfMeasure';
import Notifications from './Notifications';
import Language from './Language';
import Settings from './Settings';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../../theme/theme';

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  const navigation = useNavigation<any>();
  return (
    <Stack.Navigator initialRouteName="SettingsScreen">
      <Stack.Screen
        name="SettingsSCreen"
        component={Settings}
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTintColor: theme.colors.white,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <IconButton
              icon="chevron-left"
              iconColor={theme.colors.white}
              size={28}
              onPress={() => navigation.goBack()}
              containerColor={theme.colors.arraowBackGroundColor}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Units"
        component={UnitsOfMeasure}
        options={{
          title: 'Units of Measure',
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTintColor: theme.colors.white,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <IconButton
              icon="chevron-left"
              iconColor={theme.colors.white}
              size={28}
              onPress={() => navigation.goBack()}
              containerColor={theme.colors.arraowBackGroundColor}
            />
          ),
        }}
      />
      <Stack.Screen
        name="SettingNotifications"
        component={Notifications}
        options={{
          title: 'Notifications',
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTintColor: theme.colors.white,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <IconButton
              icon="chevron-left"
              iconColor={theme.colors.white}
              size={28}
              onPress={() => navigation.goBack()}
              containerColor={theme.colors.arraowBackGroundColor}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={{
          title: 'Language',
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTintColor: theme.colors.white,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <IconButton
              icon="chevron-left"
              iconColor={theme.colors.white}
              size={28}
              onPress={() => navigation.goBack()}
              containerColor={theme.colors.arraowBackGroundColor}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
