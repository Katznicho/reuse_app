import { SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { theme } from '../../theme/theme';
import ReviewTypes from '../../components/ReviewTypes';


const Active = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [details, setDetails] = useState([
    {
      name: 'Active',
      screen: 'Active',
    },
    {
      name: 'Past',
      screen: 'Past',
    },
    {
      name: 'Cancelled',
      screen: 'Cancelled',
    },
  ]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ReviewTypes name="Active" data={details} />
        {/* <OrderDetails /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Active;
