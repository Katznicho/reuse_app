import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStack from '../StackNavigator/HomeStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Avatar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../theme/theme';
import ProfileStack from '../../screens/ProfileScreens/ProfileStack';
import NotificationStack from '../../screens/NotificationScreens/NotificationStack';
import CreateStack from '../StackNavigator/CreateStack';
import { TopBars } from '../TopTabsNavigator/TopBars';




const Tab = createMaterialBottomTabNavigator();




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
      component={CreateStack} 
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
      {/* mine */}
      <Tab.Screen name="Mine" 
      component={TopBars} 
      options={{
        tabBarLabel: 'Mine',
        tabBarIcon: ({ color }) => (
            <AntDesign
            name="filetext1"
            color={color}
            size={26}
          />
        ),
      }}
      />
      {/* mine */}

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
