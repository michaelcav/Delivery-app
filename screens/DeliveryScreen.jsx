import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
// import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native';
import {useSelector} from 'react-redux'
import MapView, { Marker } from 'react-native-maps'
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather'
import { selectRestaurant } from '../slices/restaurantSlice'

export default function DeliveryScreen() {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  return (
    <View className='flex-1'>
      {/* map view */}
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        className='flex-1'
        mapType='standard'
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View className='rounded-t-3xl -mt-12 bg-white relative'>
        <View className='flex-row justify-between px-5 pt-10'>
          <View>
            <Text className='text-lg text-gray-700 font-semibold'>
              Tempo estimado
            </Text>
            <Text className='text-lg text-gray-700 font-semibold'>
              20-30 Minutos
            </Text>
            <Text className='mt-2 text-gray-700 font-semibold'>
              Seu pedido está a caminho
            </Text>
          </View>
          <Image className='w-24 h-24'
            source={require('../assets/images/bikeGuy2.gif')} />
        </View>
        <View
          style={{ backgroundColor: 'orange' }}
          className='p-2 flex-row justify-between items-center rounded-full my-5 mx-2'>
          <View className='p-1 rounded-full'
            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <Image
             style={{borderRadius: 100, overlayColor: 'orange' }}
             className='h-16 w-16'
              source={require('../assets/images/Cat.gif')} />
          </View>
          <View className='flex-1 ml-3'>
            <Text className='text-lg font-bold text-white'>
              Misha Carv
            </Text>
            <Text className='font-semibold text-white'>
              Entregador
            </Text>
          </View>
          <View className='flex-row items-center space-x-3 mr-3'>
            <TouchableOpacity className='bg-white p-2 rounded-full'>
              <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1} />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            className='bg-white p-2 rounded-full'>
              <Icon.X stroke={'red'} strokeWidth={2} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}