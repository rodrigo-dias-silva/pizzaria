import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'
import { InputTextCenter } from '../../components/InputText'
import { ButtonBlue, ButtonGreen } from '../../components/Button'

import { api } from '../../services/api'

type RouteDetailParms = {
  Order: {
    number: string | number,
    order_id: string
  }
}

type CategoryProps = {
  id: string,
  name: string
}

type OrderRouteProps = RouteProp<RouteDetailParms, 'Order'>

export default function Order() {

  const route = useRoute<OrderRouteProps>()
  const navigation = useNavigation()

  const [category, setCategory] = useState<CategoryProps[] | []>([])
  const [categorySelected, setCategorySelected] = useState<CategoryProps>()

  const [amount, setAmount] = useState('1')

  useEffect(() => {
    async function loadInfo() {
      const response = await api.get('/categories')

      setCategory(response.data)
      setCategorySelected(response.data[0])

    }

    loadInfo()
  }, [])

  async function handleDeleteOrder() {
    try {

      await api.delete('/order', {
        params: {
          order_id: route.params?.order_id
        }
      })

      navigation.goBack()

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView className='flex-1 py-4 bg-dark-700 px-5 space-y-6'>
      <View className='flex-row items-center mt-8'>
        <Text className='text-3xl font-bold text-white mr-4'>
          Mesa {route.params.number}
        </Text>
        <TouchableOpacity onPress={handleDeleteOrder}>
          <Feather name='trash-2' size={28} color='#ff3f4b' />
        </TouchableOpacity>
      </View>

      {category.length !== 0 && (
        <TouchableOpacity className='bg-dark-900 rounded w-full h-12 justify-center px-2'>
          <Text className='text-white'>{categorySelected?.name}</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity className='bg-dark-900 rounded w-full h-12 justify-center px-2'>
        <Text className='text-white'>Calabresa</Text>
      </TouchableOpacity>

      <View className='flex-row justify-between items-center'>
        <Text className='text-xl font-bold text-white'>Quantidade</Text>
        <View className='w-2/4'>
          <InputTextCenter
            keyboardType='numeric'
            value={amount}
            onChangeText={setAmount}
          />
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