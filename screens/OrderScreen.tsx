import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core';

export default function OrderScreen() {
  const navigation =  useNavigation();
  useEffect(() => {
  setTimeout(()=> {
    // move to delivery screen
    navigation.navigate('Delivery' as never)
  },3000)
  }, [])
  return (
    <View className='flex-1 bg-whitem justify-center items-center'>
      <Image source={require('../assets/images/delivery.gif')}
      className='h-80 w-80'/>
    </View>
  )
}