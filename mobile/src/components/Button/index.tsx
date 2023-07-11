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
      className='bg-greenTheme w-full h-10 rounded items-center justify-center'
    >
      {
        loadingAuth ?
          (
            <ActivityIndicator size={24} color='#fff' />
          ) : (
            <Text className='text-lg font-bold text-dark-900'>{content}</Text>
          )
      }
    </TouchableOpacity>
  )
}

function ButtonRed({ content, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      className='bg-redTheme w-full h-10 rounded items-center justify-center'
    >
      <Text className='text-lg font-bold text-dark-900'>{content}</Text>
    </TouchableOpacity>
  )
}

export { ButtonGreen, ButtonRed }