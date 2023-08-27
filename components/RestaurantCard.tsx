import React from 'react';
import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import * as Icon from 'react-native-feather'
import { RestaurantType } from '../types/interfaces';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';

interface RestaurantCardProps {
  item: RestaurantType;
}

export type RootStackParamList = {
  Restaurant: { item: RestaurantType } | undefined;
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({ item }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Restaurant', {...item} )}
    >
      <View
        style={{ shadowColor: '#000', shadowOpacity: 0.2 }}
        className='mr-6 mb-2 bg-white rounded-3xl shadow-md'>
        <Image className='h-36 w-64 rounded-t-3xl'
          source={item.image} />
        <View className='px-3 pb-4 space-y-2'>
          <Text className='text-lg font-bold pt-2'>{item.name}</Text>
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
      </View>
    </TouchableWithoutFeedback>
  )
}

export default RestaurantCard;