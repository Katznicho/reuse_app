// In App.js in a new project
import  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreeen from '../../screens/HomeScreens/HomeScreeen';



const Stack = createNativeStackNavigator();

function HomeStack() {
  return (

      <Stack.Navigator>
        <Stack.Screen 
        name="HomeSCreen" 
        component={HomeScreeen} 
        
        />
      </Stack.Navigator>

  );
}

export default HomeStack