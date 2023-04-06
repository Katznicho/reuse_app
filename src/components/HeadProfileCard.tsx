
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { generalstyles } from '../generalstyles/generalstyles';
import { Avatar } from 'react-native-paper';
import { theme } from '../theme/theme';


const HeadProfileCard = () => {




  return (
    <View
      style={[
        generalstyles.flexStyles,
        {
          alignItems: 'center',
        },
      ]}
    >
      <View style={[{ marginHorizontal: 20 }]}>
        <Avatar.Image
          size={80}
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1665673312765-8e7ae54a5ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          }}
        />
      </View>
      <View style={styles.viewStyles}>
        <Text style={styles.nameStyle}>Katende Nicholas</Text>
      </View>
    </View>
  );
};

export default HeadProfileCard;

const styles = StyleSheet.create({
  nameStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  viewStyles: {
    marginTop: 20,
    marginLeft: -10,
  },
});
