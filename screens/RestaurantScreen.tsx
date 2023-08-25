import React, { useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-feather'
import { useNavigation, useRoute } from '@react-navigation/native'
import { themeColors } from '../theme';
import { RestaurantType } from '../types/interfaces';
import DishRow from '../components/dishRow';
import CartIcon from '../components/cartIcon';
import { StatusBar } from 'expo-status-bar';
import {useDispatch} from 'react-redux'
import { setRestaurant } from '../slices/restaurantSlice';


const RestaurantScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params as RestaurantType;
  // console.log(item);

  const dispatch = useDispatch();
  useEffect(() => {
     if(item && item.id){
      dispatch(setRestaurant({...item}))
     }
  }, [])


  return (
    <View>
      <CartIcon/>
      <StatusBar style='light'/>
      <ScrollView>
        <View className='relative'>
          <Image
            className='w-full h-72'
            source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='absolute top-14 left-4 bg-gray-50  p-2 rounded-full shadow'
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className='bg-white -mt-12 pt-6'
        >
          <View className='px-5'>
            <Text className='text-3xl font-semibold'>{item.name}</Text>
            <View className='flex-row space-x-2 my-1'>
              <View className='flex-row items-center space-x-1'>
                <Image
                  className='h-4 w-4'
                  source={require('../assets/images/fullStar.png')} />
                <Text className='text-green-700 font-semibold'>{item.stars}</Text>
                <Text>
                  ({item.reviews} review) . <Text>{item.category}</Text>
                </Text>
              </View>
              <View className='flex-row items-center space-x-1'>
                <Icon.MapPin color={'gray'} width={'15'} height={'15'} />
                <Text className='text-gray-700 text-xs'>Nearby. {item.address}</Text>
              </View>
            </View>
            <Text className='text-gray-500 mt-2'>{item.description}</Text>
          
          </View>
          
        </View>
        <View className='pb-36 bg-white'>
          <Text className='px-4 py-4 text-2xl font-bold'>Menu</Text>
          {/* dishes */}
          {
            item.dishes.map((dish, index) => <DishRow item={{...dish}} key={index}/>)
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default RestaurantScreen;