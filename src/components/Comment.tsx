import { Text, View } from 'react-native';
import React from 'react';
import { theme } from '../theme/theme';
import { Avatar } from 'react-native-paper';
import Box from './Box';
import { generalstyles } from '../generalstyles/generalstyles';
import { commentInterface } from '../types';

const Comment = ({ imageURL, time, rating, comment }: commentInterface) => {
  return (
    <View
      style={[{ backgroundColor: theme.colors.darkBlack, borderRadius: 20 }]}
    >
      <View
        style={[
          generalstyles.flexStyles,
          {
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 10,
          },
        ]}
      >
        <View
          style={[
            generalstyles.flexStyles,
            { alignItems: 'center', justifyContent: 'space-between' },
          ]}
        >
          <Avatar.Image source={{ uri: imageURL }} size={40} />
          <Text
            style={{ color: theme.colors.white, fontSize: 20, marginLeft: 10 }}
          >
            John Doe
          </Text>
        </View>
        <View>
          <Box rating={rating} />
        </View>
        <View>
          <Text>{time}</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text
          style={{
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'row',
            marginVertical: 10,
            color: theme.colors.white,
          }}
        >
          {comment}
        </Text>
      </View>
    </View>
  );
};

export default Comment;
