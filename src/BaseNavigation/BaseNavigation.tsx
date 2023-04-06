import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Avatar, Divider, useTheme } from 'react-native-paper';
import BottomTabs from './BottomNavigator/BottomTabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DrawerContentComponent from '../components/DrawerContentComponent';





function NotificationsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


const Drawer = createDrawerNavigator();

export default function BaseNavigation() {

  const paper_theme = useTheme();
  paper_theme.colors.secondaryContainer = theme.colors.primary;
  paper_theme.colors.error = theme.colors.buttonColor;


  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeDrawer"
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: theme.colors.primary,
            width: 300,
          },
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          drawerItemStyle: {
            marginVertical: 0,
          },

        }}
        drawerContent={props => <DrawerContentComponent {...props} />}>
  
        <Drawer.Screen
          name="HomeDrawer"
          component={BottomTabs}
          options={{
            drawerIcon: () => (
              <Avatar.Image
                size={30}
                source={{
                  uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
              />

            ),
            drawerLabel(props) {
              return <View>
                <View>
                  <Text>Katende Nicholas</Text>

                </View>
                <View>
                  <Text >0759983853</Text>
                </View>

              </View>
            },




          }}
        />

        <Drawer.Screen name="Home"

          component={BottomTabs}
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="home-variant"
                color={theme.colors.white}
                size={26}
              />

            ),
            drawerLabel(props) {
              return <View>
                <View>
                  <Text >Home</Text>

                </View>

              </View>
            },

          }}
        />

        {/* chats */}
        <Drawer.Screen name="Chats"
          options={{
            drawerIcon: () => (
              <Ionicons
                name="chatbox-ellipses-outline"
                color={theme.colors.white}
                size={26}
              />

            ),
            drawerLabel(props) {
              return <View>
                <View>
                  <Text >Chats</Text>

                </View>

              </View>
            },

          }}
          component={NotificationsScreen}

        />
        {/* chats */}


        <Drawer.Screen name="Notifications"
          options={{
            drawerIcon: () => (
              <AntDesign
                name="shoppingcart"
                color={theme.colors.white}
                size={26}
              />

            ),
            drawerLabel(props) {
              return <View>
                <View>
                  <Text >Market Place</Text>

                </View>

              </View>
            },

          }}
          component={NotificationsScreen}

        />
        {/* add a section */}
      



      </Drawer.Navigator>
    </NavigationContainer>
  );
}