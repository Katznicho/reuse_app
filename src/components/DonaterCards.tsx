import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar, IconButton } from 'react-native-paper';
import { generalstyles } from '../generalstyles/generalstyles';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme/theme';
import Box from './Box';

const DonaterCard = ({ item, showAvailable }: any) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      style={[generalstyles.flexStyles, styles.containerStyles]}
      onPress={() =>
        showAvailable
          ? navigation.navigate('SendRequest', { item })
          : navigation.navigate('TrainerProfile', { item })
      }
    >
      <View>
        <Avatar.Image
          size={60}
          source={{
            uri: item.image,
          }}
          style={styles.avatarStyles}
        />
      </View>
      <View>
        <View
          style={[
            generalstyles.centerContent,
            { marginTop: 10 },
            generalstyles.flexStyles,
          ]}
        >
          <Text style={{ color: theme.colors.white, fontSize: 15 }}>
            {item.name}
          </Text>
          <Box rating={4.5} />
        </View>
        <View>
          <Text
            style={{
              color: theme.colors.white,
              fontSize: 12,
              fontWeight: 'bold',
            }}
          >
            {item.weightType}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: theme.colors.buttonColor,
              fontSize: 12,
              fontWeight: 'bold',
            }}
          >
            {item.experience}
          </Text>
        </View>
      </View>
      <View>
        <IconButton
          icon="chevron-right"
          iconColor={theme.colors.white}
          size={28}
        />
      </View>
    </TouchableOpacity>
  );
};

export default DonaterCard;

const styles = StyleSheet.create({
  containerStyles: {
    alignItems: 'center',
    backgroundColor: theme.colors.darkBlack,
    marginVertical: 10,
    marginHorizontal: 30,
    height: 100,
    borderRadius: 15,
    justifyContent: 'space-between',
    width: '85%',
  },
  avatarStyles: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    marginLeft: 10,
  },
});
