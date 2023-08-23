import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import RestaurantScreen from '../screens/RestaurantScreen';
import { LogBox, Text, View } from 'react-native';
import CartScreen from '../screens/CartScreen';
import OrderScreen from '../screens/OrderScreen';
import DeliveryScreen from '../screens/DeliveryScreen';


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
        <Stack.Screen name='Order' options={{presentation: 'fullScreenModal'}} component={OrderScreen} />
        <Stack.Screen name='Delivery' options={{presentation: 'fullScreenModal'}} component={DeliveryScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigation;