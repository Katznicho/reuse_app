import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Avatar } from 'react-native-paper';
import { generalstyles } from '../generalstyles/generalstyles';
import { theme } from '../theme/theme';
import { useNavigation } from '@react-navigation/native';

const People = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [people, setPeople] = useState([
    {
      id: '1',
      imageURL:
        'https://media.istockphoto.com/id/1190259052/photo/two-young-women-lifting-weights-in-the-gym.jpg?b=1&s=170667a&w=0&k=20&c=mILsYRe4z5cJ_o9_nPS7O2at1ZLa4CwLkgVn41VVoJ8=',
    },
    {
      id: '2',
      imageURL:
        'https://cdn.pixabay.com/photo/2022/05/23/13/17/fitnes-7216184__340.jpg',
    },
    {
      id: '3',
      imageURL:
        'https://media.istockphoto.com/id/1309541914/photo/asian-woman-stretching-in-a-training-gym.jpg?b=1&s=170667a&w=0&k=20&c=MbQxdwurbtT1Ir6Cowr4cyXAc_MPGc8IBH1vsne0IsA=',
    },
    {
      id: '4',
      imageURL:
        'https://media.istockphoto.com/id/1190259052/photo/two-young-women-lifting-weights-in-the-gym.jpg?b=1&s=170667a&w=0&k=20&c=mILsYRe4z5cJ_o9_nPS7O2at1ZLa4CwLkgVn41VVoJ8=',
    },
    {
      id: '5',
      imageURL:
        'https://cdn.pixabay.com/photo/2022/05/23/13/17/fitnes-7216184__340.jpg',
    },
    {
      id: '6',
      imageURL:
        'https://media.istockphoto.com/id/1309541914/photo/asian-woman-stretching-in-a-training-gym.jpg?b=1&s=170667a&w=0&k=20&c=MbQxdwurbtT1Ir6Cowr4cyXAc_MPGc8IBH1vsne0IsA=',
    },
  ]);
  const navigation = useNavigation<any>();
  return (
    <View style={[generalstyles.flexStyles, styles.containerStyles]}>
      <View style={[generalstyles.flexStyles, { alignItems: 'center' }]}>
        {people.slice(0, 4).map((person, index, array) => (
          <View>
            {index == array.length - 1 ? (
              <Avatar.Text
                size={45}
                label="+4"
                color={theme.colors.white}
                style={{
                  backgroundColor: theme.colors.buttonColor,
                  marginRight: -10,
                }}
              />
            ) : (
              <Avatar.Image
                source={{ uri: person.imageURL }}
                size={40}
                style={{
                  marginRight: index === 0 ? 0 : -10,
                }}
              />
            )}
          </View>
        ))}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Reviews')}
        style={{
          marginLeft: 50,
        }}
      >
        <Text style={{ color: theme.colors.buttonColor }}>
          Read all reviews
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default People;

const styles = StyleSheet.create({
  containerStyles: {
    marginVertical: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
