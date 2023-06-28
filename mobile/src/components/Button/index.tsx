import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface Props extends TouchableOpacityProps {
  content: string,
}

function ButtonGreen({ content, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      className='bg-greenTheme w-full h-10 rounded items-center justify-center'
    >
      <Text className='text-lg font-bold text-dark-900'>{content}</Text>
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