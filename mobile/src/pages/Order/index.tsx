import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { useRoute, RouteProp } from '@react-navigation/native'
import { InputTextCenter } from '../../components/InputText'
import { ButtonBlue, ButtonGreen } from '../../components/Button'

type RouteDetailParms = {
  Order: {
    number: string | number,
    order_id: string
  }
}

type OrderRouteProps = RouteProp<RouteDetailParms, 'Order'>

export default function Order() {

  const route = useRoute<OrderRouteProps>()

  return (
    <SafeAreaView className='flex-1 py-4 bg-dark-700 px-5 space-y-6'>
      <View className='flex-row items-center mt-8'>
        <Text className='text-3xl font-bold text-white mr-4'>
          Mesa {route.params.number}
        </Text>
        <TouchableOpacity>
          <Feather name='trash-2' size={28} color='#ff3f4b' />
        </TouchableOpacity>
      </View>

      <TouchableOpacity className='bg-dark-900 rounded w-full h-12 justify-center px-2'>
        <Text className='text-white'>Pizzas</Text>
      </TouchableOpacity>

      <TouchableOpacity className='bg-dark-900 rounded w-full h-12 justify-center px-2'>
        <Text className='text-white'>Calabresa</Text>
      </TouchableOpacity>

      <View className='flex-row justify-between items-center'>
        <Text className='text-xl font-bold text-white'>Quantidade</Text>
        <View className='w-2/4'>
          <InputTextCenter placeholder='Ex.: 1' keyboardType='numeric' value='1' />
        </View>
      </View>

      <View className='flex-row space-x-4'>
        <View className='w-1/4'>
          <ButtonBlue content='+' />
        </View>
        <View className='flex-1'>
          <ButtonGreen content='Avançar' />
        </View>
      </View>

    </SafeAreaView>
  )
}