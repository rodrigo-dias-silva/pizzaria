import React, { useContext } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { AuthContext } from '../../contexts/AuthContext'

interface Props extends TouchableOpacityProps {
  content: string,
}

function ButtonGreen({ content, ...rest }: Props) {

  const { loadingAuth } = useContext(AuthContext)

  return (
    <TouchableOpacity
      {...rest}
      className='bg-greenTheme w-full h-12 rounded items-center justify-center'
    >
      {
        loadingAuth ?
          (
            <ActivityIndicator size={24} color='#fff' />
          ) : (
            <Text className='font-bold text-dark-900 text-xl'>{content}</Text>
          )
      }
    </TouchableOpacity>
  )
}

function ButtonRed({ content, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      className='bg-redTheme w-full h-12 rounded items-center justify-center'
    >
      <Text className='text-xl font-bold text-dark-900'>{content}</Text>
    </TouchableOpacity>
  )
}

function ButtonBlue({ content, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      className='bg-blueTheme w-full h-12 rounded items-center justify-center'
    >
      <Text className='text-3xl text-white'>{content}</Text>
    </TouchableOpacity>
  )
}

export { ButtonGreen, ButtonRed, ButtonBlue }