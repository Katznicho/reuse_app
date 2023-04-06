import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Alert,
  } from 'react-native';
  import React from 'react';
  import { useNavigation } from '@react-navigation/native';
  import { IconButton } from 'react-native-paper';
  import { theme } from '../theme/theme';
  import { generalstyles } from '../generalstyles/generalstyles';
  
  import { Switch } from 'react-native-paper';
  import { Checkbox } from 'react-native-paper';
  
  
  const ProfileDetailsCard = ({
    details,
    showSwitch,
    onSetNotification,
    showCheckBox,
  }: any) => {
  
    const navigation = useNavigation<any>();
    
  
    
  
  
  
  
    const onSignOut = () => {
      Alert.alert(
        'Sign Out',
        'Are you sure you want to sign out?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
  
          {
            text: 'OK',
        
          },
        ],
        { cancelable: false },
      );
    };
  
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {showSwitch ? (
          <View>
            {details.map((item: any, index: any) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate(item.screen)}
                style={[generalstyles.flexStyles, styles.containerStyle]}
              >
                <View style={{ paddingVertical: 20 }}>
                  <Text style={styles.textStyle}>{item.name}</Text>
                </View>
                <View>
                  {showCheckBox ? (
                    <Checkbox
                      status={item.value ? 'checked' : 'unchecked'}
                      onPress={() => onSetNotification(item.id)}
                      color={theme.colors.buttonColor}
                      uncheckedColor={theme.colors.white}
                    />
                  ) : (
                    <Switch
                      value={item.value}
                      onValueChange={() => onSetNotification(item.id)}
                      color={theme.colors.buttonColor}
                    />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View>
            {details.map((item: any, index: any) => {
              return item.name === 'Sign Out' ? (
                <TouchableOpacity
                  style={[generalstyles.flexStyles, styles.containerStyle]}
                  key={index}
                  onPress={onSignOut}
                >
                  <View style={{ paddingVertical: 20 }}>
                    <Text style={[styles.textStyle, { color: theme.colors.red }]}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate(item.screen)}
                  style={[generalstyles.flexStyles, styles.containerStyle]}
                >
                  <View style={{ paddingVertical: 20 }}>
                    <Text style={styles.textStyle}>{item.name}</Text>
                  </View>
                  <View>
                    <IconButton
                      icon="chevron-right"
                      iconColor={theme.colors.white}
                      size={25}
                      onPress={() => navigation.goBack()}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </ScrollView>
    );
  };
  
  export default ProfileDetailsCard;
  
  const styles = StyleSheet.create({
    containerStyle: {
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 10,
      borderBottomColor: theme.colors.placeholder,
      borderWidth: 0.5,
    },
    textStyle: {
      fontWeight: 'bold',
      color: theme.colors.white,
      fontSize: 18,
    },
  });
  