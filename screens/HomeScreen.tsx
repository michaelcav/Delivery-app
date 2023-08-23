import React from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import { featured } from '../constants'

export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-white'>
      <StatusBar />

      {/* search bar */}

      <View className='flex-row items-center space-x-2 px-4 pb-2 mt-3'>
        <View className='flex-row flex-1 items-center p-3 rounded-full border  border-gray-300'>
          <Icon.Search height='25' width='25' stroke='gray' />
          <TextInput placeholder='Restaurantes' className='ml-2 flex-1' />
          <View className='flex-row items-center space-x- border-0 border-l-2 pl-2 border-gray-300'>
            <Icon.MapPin
              className='mr-1'
              height='20' width='20' stroke='gray' />
            <Text>Porto Alegre, RS</Text>
          </View>
        </View>
        <View className='p-3 rounded-full'
          style={{ backgroundColor: themeColors.bgColor(1) }}
        >
          <Icon.Sliders height='20' width='20' strokeWidth={2.5} stroke='white' />
        </View>
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50
        }}
      >

        {/* categories */}     
        <Categories id={0} name={''} image={0} />
        {/* <Categories  /> */}

        {/* featured */}

        <View className='mt-5'>
          {
            [featured, featured, featured].map((item, index) => {
              return (
                <FeaturedRow
                  key={index}
                  title={item.title}
                  restaurants={item.restaurants}
                  description={item.description}
                  id={item.id}
                />
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
