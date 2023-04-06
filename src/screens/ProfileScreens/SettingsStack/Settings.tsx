import { View, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { theme } from '../../../theme/theme';
import ProfileDetailsCard from '../../../components/ProfileCardDetails';


const Settings = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [settings, setSettings] = useState([
    {
      name: 'Units of Measure',
      screen: 'Units',
    },

    {
      name: 'Notifications',
      screen: 'SettingNotifications',
    },
    {
      name: 'Languauge',
      screen: 'Language',
    },

    {
      name: 'Contact Us',
      screen: 'ContactUs',
    },
  ]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: 50,
        }}
      >
        {/* profile details */}
        <View
          style={{
            borderTopColor: theme.colors.white,
            borderTopWidth: 0.5,
            marginHorizontal: 10,
          }}
        />
        <ProfileDetailsCard details={settings} showSwitch={false} />
        {/* profile details */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
