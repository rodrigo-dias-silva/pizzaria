import React, { useState } from 'react'
import { Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { ButtonGreen } from '../../components/Button'
import { InputTextCenter } from '../../components/InputText'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParmsList } from '../../routes/app.routes'

import { api } from '../../services/api'

export default function Dashboard() {

  const navigation = useNavigation<NativeStackNavigationProp<StackParmsList>>()

  const [table, setTable] = useState('')

  async function openOrder() {
    if (table === '') {
      return
    }

    const response = await api.post('/order', {
      table: Number(table)
    })

    navigation.navigate('Order', { number: table, order_id: response.data.id })

    setTable('')
  }

  return (
    <SafeAreaView className='flex-1 justify-center items-center py-4 bg-dark-700 px-5 space-y-6'>
      <Text className='text-3xl font-bold text-white'>Novo pedido</Text>

      <InputTextCenter
        placeholder='Número da mesa'
        keyboardType='numeric'
        value={table}
        onChangeText={setTable}
      />

      <ButtonGreen content='Abrir pedido' onPress={openOrder} />

    </SafeAreaView>
  )
}