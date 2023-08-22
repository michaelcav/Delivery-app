import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import RestaurantScreen from '../screens/RestaurantScreen';
import { LogBox, Text, View } from 'react-native';
import CartScreen from '../screens/CartScreen';


const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state'
])

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Restaurant'  component={RestaurantScreen} />
        <Stack.Screen name='Cart' options={{presentation: 'modal'}} component={CartScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigation;