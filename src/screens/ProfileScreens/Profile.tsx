import { SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { theme } from '../../theme/theme';
import HeadProfileCard from '../../components/HeadProfileCard';
import ProfileDetailsCard from '../../components/ProfileCardDetails';
import ProfileCard from '../../components/ProfileCard';



const Profile = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [profile_details, setProfileDetails] = useState([
    {
      name: 'Edit Profile',
      screen: 'Edit',
    },
    {
      name: 'Private Policy',
      screen: 'PrivatePolicy',
    },
    {
      name: 'Settings',
      screen: 'Settings',
    },

    {
      name: 'About Us',
      screen: 'AboutUs',
    },
    {
      name: 'Sign Out',
      screen: 'Sign Out',
    },
  ]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* header profile card */}
        <HeadProfileCard />
        {/* header profile card */}

        {/* card section */}
        <ProfileCard />
        {/* card section */}

        {/* profile details */}
        <ProfileDetailsCard details={profile_details} showSwitch={false} />
        {/* profile details */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
