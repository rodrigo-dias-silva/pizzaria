import React from 'react'
import { View, Image } from 'react-native'

import InputText from '../../components/InputText'
import { ButtonGreen } from '../../components/Button'


export default function SignIn() {
  return (
    <View className='flex-1 justify-center items-center bg-dark-700'>
      <Image
        source={require('../../assets/logo.png')}
        className='mb-5'
      />

      <View className='w-full px-5 items-center justify-center space-y-3'>
        <InputText
          placeholder='Digite seu e-mail'
          bgColor='dark-900'
        />

        <InputText
          placeholder='Digite sua senha'
          bgColor='dark-900'
          secureTextEntry={true}
        />

        <ButtonGreen
          content='Acessar'
        />
      </View>
    </View>
  )
}
