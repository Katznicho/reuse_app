import { StyleSheet,  View, ScrollView } from 'react-native';
import React from 'react';
import { theme } from '../theme/theme';
import { products } from '../fakedata/data';
import ScrollCardDetails from './ScrollCardDetails';


const ScrollCard = () => {

  return (
    <View >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        {products.map((item: any, index: any) => {
          return (
            <ScrollCardDetails
              key={index}
              item={item}
              scrollCardStyles={{
                backgroundColor: theme.colors.primary,
                marginHorizontal: 5,
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ScrollCard;

const styles = StyleSheet.create({
  packageName: {
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
