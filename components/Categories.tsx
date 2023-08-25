import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native'
import { categories, } from '../constants/index'
import { CategoryType } from '../types/interfaces';

interface CategoriesProps extends CategoryType {
}

const Categories: React.FC<CategoriesProps> = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <View className='mt-4'>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='overflow-visible'
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
      >

        {
          categories.map((category, index) => {
            let isActive = category.id == activeCategory;
            let btnClass = isActive ? ' bg-orange-400' : ' bg-gray-200';
            let textClass = isActive ? ' font-smibold text-gray-800' : ' text-gray-500';
            return (
              <View
                key={index}
                className='flex justify-center items-center mr-6' >
                <TouchableOpacity
                  onPress={() => setActiveCategory(category.id)}
                  className={'p-1 rounded-full shadow bg-gray-200' + btnClass}>
                  <Image style={{ width: 45, height: 45 }} source={category.image} />

                </TouchableOpacity>
                <Text className={'text-sm ' + textClass} >{category.name}</Text>
              </View>
            )
          })
        }

      </ScrollView>
    </View>
  )
}

export default Categories;