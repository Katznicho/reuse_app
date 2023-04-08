import React,{useEffect, useState} from 'react';
import { Appbar, Badge } from 'react-native-paper';
import { Pressable, View } from 'react-native';
import { theme } from '../../theme/theme';
import { generalstyles } from '../../generalstyles/generalstyles';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';


const AppBar = ({
  navigation,
  previous,
  title,
  titleStyle,
  barStyle,
  showSearch,
}: any) => {


  return (
    <Appbar.Header dark={true} style={[barStyle, {
      backgroundColor: `${theme.colors.primary}`,
      height: 40,
    }]}>
      {previous ? (
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate('Home');
          }}
          color={`${theme.colors.primary}`}
        />
      ) : null}
      <View>
        {/* icon menu */}
        <Appbar.Action
          icon="menu"
          size={30}
          color={theme.colors.textColor}

          onPress={() => navigation.toggleDrawer()}
        />
        {/* icon menu */}
      </View>

      <Appbar.Content
        title={title}
        titleStyle={[titleStyle, { marginLeft: -30 }]}
      />

      {/*show cart */}
      {showSearch && (
        <View
          style={{
            marginRight: 10,
          }}>
          <Pressable
            onPress={() =>
              navigation.navigate("Notifications")
            }

          >
            <Badge
              size={17}
              visible={true}
              style={[
                generalstyles.absoluteStyles,
                {
                  right: 0,
                  color: `${theme.colors.notification}`,
                  backgroundColor: `${theme.colors.textColor}`,
                  fontWeight: '900',
                  fontSize: 15,
                  zIndex: 20,


                },
              ]}>
              0
            </Badge>
            <MaterialCommunityIcons name="bell" size={30}
              color={theme.colors.textColor} />
          </Pressable>
        </View>
      )}
      {/*show cart */}
    </Appbar.Header>
  );
};

export default AppBar;
