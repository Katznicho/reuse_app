import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { theme } from '../../theme/theme';
import TextComponent from '../../components/TextComponent';


const PrivatePolicy = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivatePolicy;
