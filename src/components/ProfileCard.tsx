import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { generalstyles } from '../generalstyles/generalstyles';
import { theme } from '../theme/theme';

const ProfileCard = () => {
  return (
    <View style={[generalstyles.flexStyles, styles.container]}>
      <View style={[styles.experience, generalstyles.centerContent]}>
        <Text style={[styles.numberStyles]}>200</Text>
        <Text style={styles.textStyles}>Donations</Text>
      </View>
      <View style={[styles.completed, generalstyles.centerContent]}>
        <Text style={[styles.numberStyles]}>1k</Text>
        <Text style={styles.textStyles}>Followers</Text>
      </View>
      <View style={[styles.activeClients, generalstyles.centerContent]}>
        <Text style={[styles.numberStyles]}>800</Text>
        <Text style={[styles.textStyles]}> Following</Text>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 30,
    backgroundColor: theme.colors.darkBlack,
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  experience: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderRightWidth: 1,
    borderRightColor: theme.colors.placeholder,
    paddingRight: 20,
  },
  completed: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderRightWidth: 1,
    borderRightColor: theme.colors.placeholder,
    paddingRight: 30,
  },
  activeClients: {
    marginRight: 10,
    marginVertical: 10,
  },
  numberStyles: {
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textStyles: {
    color: theme.colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
