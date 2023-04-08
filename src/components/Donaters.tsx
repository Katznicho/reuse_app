import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';
  import React,{useEffect} from 'react';
  import { generalstyles } from '../generalstyles/generalstyles';
  import { theme } from '../theme/theme';
  import { Avatar } from 'react-native-paper';

  import Box from './Box';
  import { useNavigation } from '@react-navigation/native';
import { donaters } from '../fakedata/data';

  
  const Donaters = () => {
   
  
    const navigation = useNavigation<any>();
  
  

  
    return (
      <View >
       
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {donaters.map(trainer => (
            <TouchableOpacity
              style={[generalstyles.centerContent, styles.containerStyle]}
              key={trainer.id}
              onPress={() =>
                navigation.navigate('DonaterDetails', { item: trainer })
              }
            >
              <View>
                <Avatar.Image
                  size={120}
                  source={{
                    uri: trainer.image,
                  }}
                />
                {/* details */}
                <View
                  style={[
                    generalstyles.centerContent,
                    { marginTop: 10 },
                    generalstyles.flexStyles,
                  ]}
                >
                  <Text
                    style={{
                      color: theme.colors.white,
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}
                  >
                    {trainer.name}
                  </Text>

                </View>
                <View style={[generalstyles.centerContent]}>
                <Box rating={4.6} />
                </View>
                <View style={[generalstyles.centerContent]}>
                  <Text
                    style={{
                      color: theme.colors.placeholder,
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}
                  >
                    {trainer.experience}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };
  
  export default Donaters;
  
  const styles = StyleSheet.create({
    trainerTitle: {
      color: theme.colors.white,
      fontSize: 20,
      fontWeight: 'bold',
    },
    containerStyle: {
      marginHorizontal: 0,
    },
  });
  