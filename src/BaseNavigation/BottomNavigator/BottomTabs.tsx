import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text, View } from 'react-native';
import HomeStack from '../StackNavigator/HomeStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Avatar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../theme/theme';
import ProfileStack from '../../screens/ProfileScreens/ProfileStack';
import NotificationStack from '../../screens/NotificationScreens/NotificationStack';
import BookingStack from '../../screens/BookingDetailsScreen/BookingStack';




const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
};

const SettingsScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
};


export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      activeColor={theme.colors.buttonColor}
      inactiveColor={theme.colors.placeholder}
      barStyle={{ backgroundColor: theme.colors.primary }}
    
      //remove the label
      shifting={true}
      //remove the label
      labeled={false}
    >
      <Tab.Screen 
      name="HomeStack" 
      component={HomeStack} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
            name="home-variant"
            color={color}
            size={26}
          />
          
        ),
      }}
      />
      <Tab.Screen name="Create" 
      component={BookingStack} 
      options={{
        tabBarLabel: 'Create',
        tabBarIcon: ({ color }) => (
            <AntDesign
            name="pluscircleo"
            color={color}
            size={26}
          />
        ),
      }}
      />
      {/* saved books */}
      <Tab.Screen name="Notifications"
        component={NotificationStack}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ios-notifications-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
            
      {/* saved books */}

      <Tab.Screen name="Profile"
      component={ProfileStack}
      options={{
        tabBarLabel: 'Profile',

        tabBarIcon: ({ color }) => (
            <Avatar.Image
            size={28}
            source={{uri:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          />
        ),
      }}

      />
    </Tab.Navigator>
  );
}
