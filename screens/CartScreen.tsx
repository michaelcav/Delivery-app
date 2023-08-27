import { View, Text, TouchableOpacity, Image, ScrollView, ImageProps } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'
import { StatusBar } from 'expo-status-bar'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../slices/restaurantSlice'
import { removeFromCart, selectCartItems, selectCartTotal } from '../slices/cartSlice'
interface DescriptionType {
  id: number;
  name: string;
  description: string;
  image: ImageProps;
  price: number;
}

const CartScreen: React.FC = () => {
  const restaurant = useSelector(selectRestaurant)
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  const [groupedItems, setGroupedItems] = useState<{ [key: string]: DescriptionType[] }>({})
  const dispatch = useDispatch()
  const frete = 2

  const navigation = useNavigation()

  useEffect(() => {
    const items = cartItems.reduce((group:any, item:any) => {
      
      if (group[item.id]) {
        group[item.id].push(item)
      } else {
        group[item.id] = [item]
      }
      return group
      
      
    }, {})
    setGroupedItems(items)
  }, [cartItems])



  return (
    <>
      <StatusBar />
      <View className='bg-white flex-1 pt-8'>
        <View className='relative py-4 shadow-sm'>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className='absolute z-10 rounded-full p-1 shadow top-5 left-2'
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={'white'} />
          </TouchableOpacity>
          <View>
            <Text className='text-center font-bold text-xl'>Your cart</Text>
            <Text className='text-center text-gray-500'>{restaurant?.name}</Text>
          </View>
        </View>
        {/* delivery time */}
        <View style={{ backgroundColor: themeColors.bgColor(0.2) }}
          className='flex-row px-4 items-center'>
          <Image source={require('../assets/images/bikeGuy.png')}
            className='w-20 h-20 rounded-full' />
          <Text className='flex-1 pl-4'>Chega em 20-30 minutos</Text>
          <TouchableOpacity>
            <Text className='font-bold' style={{ color: themeColors.text }}>
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
            Object.entries(groupedItems).map(([key, items]) => {
              let dish = items[0];
              return (
                <View
                  key={key}
                  style={{ shadowColor: '#000' }}
                  className='flex-row items-center space-x-3 py-2 px-4 bg-white  rounded-3xl mx-2 mb-3 shadow-md'>
                  <Text className='font-bold'
                    style={{ color: themeColors.text }}>
                    {items.length} x
                  </Text>
                  <Image className='h-14 w-14 rounded-full'
                    source={dish.image} />
                  <Text className='flex-1 font-bold text-gray-700'>{dish.name}</Text>
                  <Text className='font-semibold text-base'>${dish.price}</Text>

                  <TouchableOpacity
                    onPress={() =>
                      dispatch(removeFromCart({ id: items[0]?.id }))}
                    className='p-1 rounded-full'
                    style={{ backgroundColor: themeColors.bgColor(1) }}>
                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                  </TouchableOpacity>
                </View>
              )
            })
          }

        </ScrollView>
        {/* totals */}
        <View
          style={{ backgroundColor: themeColors.bgColor(0.2) }}
          className='p-6 px-8 rounded-t-3xl space-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-700'>Produto</Text>
            <Text className='text-gray-700'>R$ {cartTotal}</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-gray-700'>Tele entrega</Text>
            <Text className='text-gray-700'>R$ {frete}</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-gray-700 font-extrabold'>Total</Text>
            <Text className='text-gray-700 font-extrabold'>R$ {frete + cartTotal}</Text>
          </View>
          <TouchableOpacity
            onPress={() => { navigation.navigate('Order' as never ); }}
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className='p-3 rounded-full'>
            <Text className='text-white text-center font-bold'>Pedir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default CartScreen;