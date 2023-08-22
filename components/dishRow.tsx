import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { DishType } from '../types/interfaces'
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme';

interface DishProps {
  item: DishType;
}


const DishRow: React.FC<DishProps> = ({ item }) => {
  return (
    <View
      style={{ shadowColor: '#000', shadowOpacity: 0.1 }}
      className='flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2'>
      <Image
        style={{ height: 100, width: 100 }}
        className='rounded-3xl'
        source={item.image} />
      <View className='flex flex-1 space-y-3'>
        <View className='pl-3'>
          <Text className='text-xl'>{item.name}</Text>
          <Text className='text-gray-700'>{item.description}</Text>
        </View>
        <View className='flex-row justify-between pl-3 items-center'>
          <Text className='text-gray-700 text-lg font-bold'>${item.price}
          </Text>
          <View className='flex-row items-center'>
            <TouchableOpacity
            className='p-1 rounded-full'
            style={{backgroundColor: themeColors.bgColor(1)}}
            >
              <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
            </TouchableOpacity>
            <Text className='px-2'>{2}</Text>
            <TouchableOpacity
            className='p-1 rounded-full'
            style={{backgroundColor: themeColors.bgColor(1)}}
            >
              <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default DishRow;