import { Text, SafeAreaView } from 'react-native'
import React from 'react'

import { ButtonGreen } from '../../components/Button'
import { InputTextCenter } from '../../components/InputText'

export default function Dashboard() {

  return (
    <SafeAreaView className='flex-1 justify-center items-center py-4 bg-dark-700 px-5 space-y-6'>
      <Text className='text-3xl font-bold text-white'>Novo pedido</Text>

      <InputTextCenter placeholder='Número da mesa' keyboardType='numeric' />

      <ButtonGreen content='Abrir pedido' />

    </SafeAreaView>
  )
}