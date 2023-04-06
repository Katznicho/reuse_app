import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import TextComponent from '../../components/TextComponent';
import { theme } from '../../theme/theme';


const AboutUs = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUs;
