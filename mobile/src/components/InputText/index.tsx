import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

interface InputTextProps extends TextInputProps {
  placeholder?: string,
}

function InputText({ placeholder, ...rest }: InputTextProps) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor='#a1a1aa'
      className='bg-dark-900 w-full h-12 p-2 rounded text-white'
      {...rest}
    />
  )
}

function InputTextCenter({ placeholder, ...rest }: InputTextProps) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor='#a1a1aa'
      className='bg-dark-900 w-full h-12 p-2 rounded text-white text-center text-xl'
      {...rest}
    />
  )
}

export { InputText, InputTextCenter }