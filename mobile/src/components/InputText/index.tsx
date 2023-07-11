import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

interface InputTextProps extends TextInputProps {
  placeholder: string,
}

export default function InputText({ placeholder, ...rest }: InputTextProps) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor='#a1a1aa'
      className='bg-dark-900 w-full h-10 p-2 rounded text-white'
      {...rest}
    />
  )
}