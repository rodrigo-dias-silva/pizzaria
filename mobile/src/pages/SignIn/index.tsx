import React, { useContext, useState } from 'react'
import { View, Image } from 'react-native'

import { AuthContext } from '../../contexts/AuthContext'

import InputText from '../../components/InputText'
import { ButtonGreen } from '../../components/Button'


export default function SignIn() {

  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    if (email === '' || password === '') {
      return
    }

    await signIn({ email, password })

  }

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
          value={email}
          onChangeText={setEmail}
        />

        <InputText
          placeholder='Digite sua senha'
          bgColor='dark-900'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <ButtonGreen
          content='Acessar'
          onPress={handleLogin}
        />
      </View>
    </View>
  )
}
