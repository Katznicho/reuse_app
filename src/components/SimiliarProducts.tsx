import { Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { IconButton } from 'react-native-paper';
import { theme } from '../theme/theme';
import { generalstyles } from '../generalstyles/generalstyles';
import { useNavigation } from '@react-navigation/native';

const SimiliarProducts = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
      <TouchableOpacity
        style={[
          generalstyles.flexStyles,
          {
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: theme.colors.darkBlack,

            borderRadius: 10,
          },
        ]}
        onPress={() => navigation.navigate('PartnerGyms')}
      >
        <View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            }}
            style={{
              width: 100,
              height: 80,
              borderRadius: 10,
            }}
          />
        </View>

        {/* details */}
        <View style={{ marginTop: -30 }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: theme.colors.white,
            }}
          >
            Related Products
          </Text>
        </View>
        {/* details */}

        {/* arraow down */}
        <View>
          <IconButton
            icon="chevron-down"
            iconColor={theme.colors.white}
            size={28}
          />
        </View>

        {/* arrow down */}
      </TouchableOpacity>
    </View>
  );
};

export default SimiliarProducts;
