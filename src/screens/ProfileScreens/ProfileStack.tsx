import {} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import PrivatePolicy from './PrivatePolicy';
import AboutUs from './AboutUs';
import SettingsStack from './SettingsStack/SettingsStack';
import { theme } from '../../theme/theme';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  const navigation = useNavigation<any>();
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTintColor: theme.colors.primary,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <IconButton
              icon="chevron-left"
              iconColor={theme.colors.white}
              size={25}
              onPress={() => navigation.goBack()}
              containerColor={theme.colors.arraowBackGroundColor}
              style={{
                marginLeft: 20,
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="PrivatePolicy"
        component={PrivatePolicy}
        options={{
          title: 'Private Policy',
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
        name="AboutUs"
        component={AboutUs}
        options={{
          title: 'About Us',
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
        name="Settings"
        component={SettingsStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
