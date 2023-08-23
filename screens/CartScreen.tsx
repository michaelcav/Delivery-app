import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {featured} from '../constants'
import * as Icon from 'react-native-feather'
import {useNavigation} from '@react-navigation/native'
import { themeColors } from '../theme'
import { StatusBar } from 'expo-status-bar'

export default function CartScreen() {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();
  return (
    <>
    <StatusBar/>
      <View className='bg-white flex-1 pt-8'>
        <View className='relative py-4 shadow-sm'>
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{backgroundColor: themeColors.bgColor(1)}}
          className='absolute z-10 rounded-full p-1 shadow top-5 left-2'
          >
           <Icon.ArrowLeft strokeWidth={3} stroke={'white'}/>
          </TouchableOpacity>
          <View>
            <Text className='text-center font-bold text-xl'>Your cart</Text>
            <Text className='text-center text-gray-500'>{restaurant.name}</Text>
          </View>
        </View>
        {/* delivery time */}
        <View style={{backgroundColor: themeColors.bgColor(0.2)}}
        className='flex-row px-4 items-center'>
          <Image source={require('../assets/images/bikeGuy.png')}
          className='w-20 h-20 rounded-full'/>
          <Text className='flex-1 pl-4'>Chega em 20-30 minutos</Text>
          <TouchableOpacity>
            <Text className='font-bold' style={{color: themeColors.text}}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
        {/* dishes */}
        <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50
        }}
        className='bg-white pt-5'>
          {
            restaurant.dishes.map((dish, index)=> {
              return (
                <View
                style={{shadowColor: '#000'}}
                 className='flex-row items-center space-x-3 py-2 px-4 bg-white  rounded-3xl mx-2 mb-3 shadow-md'>
                  <Text className='font-bold'
                  style={{color: themeColors.text}}>
                    2 x
                  </Text>
                  <Image className='h-14 w-14 rounded-full'
                  source={dish.image}/>
                  <Text className='flex-1 font-bold text-gray-700'>{dish.name}</Text>
                  <Text className='font-semibold text-base'>${dish.price}</Text>
                  <TouchableOpacity 
                  className='p-1 rounded-full'
                  style={{backgroundColor: themeColors.bgColor(1)}}>
                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'}/>
                  </TouchableOpacity>
                </View>
              )
            })
          }

        </ScrollView>
        {/* totals */}
        <View
        style={{backgroundColor: themeColors.bgColor(0.2)}}
        className='p-6 px-8 rounded-t-3xl space-y-4'>
        <View className='flex-row justify-between'>
          <Text className='text-gray-700'>Produto</Text>
          <Text className='text-gray-700'>R$20</Text>
        </View>
        <View className='flex-row justify-between'>
          <Text className='text-gray-700'>Tele entrega</Text>
          <Text className='text-gray-700'>R$2</Text>
        </View>
        <View className='flex-row justify-between'>
          <Text className='text-gray-700 font-extrabold'>Total</Text>
          <Text className='text-gray-700 font-extrabold'>R$22</Text>
        </View>
         <TouchableOpacity
          onPress={() => {navigation.navigate('Order');}}
          style={{backgroundColor: themeColors.bgColor(1)}}
          className='p-3 rounded-full'>
            <Text className='text-white text-center font-bold'>Pedir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}