import { Text, View } from 'react-native';
import React from 'react';
import { theme } from '../theme/theme';
import { generalstyles } from '../generalstyles/generalstyles';

interface boxInterface {
  rating: number;
}
const Box = ({ rating }: boxInterface) => {
  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.buttonColor,
          marginHorizontal: 10,
          width: 40,
          height: 20,
          borderRadius: 4,
        },
        generalstyles.centerContent,
      ]}
    >
      <Text style={{ color: theme.colors.white, fontWeight: 'bold' }}>
        {rating}
      </Text>
    </View>
  );
};

export default Box;
