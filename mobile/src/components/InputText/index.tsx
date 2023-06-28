import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

interface InputTextProps extends TextInputProps {
  placeholder: string,
  bgColor: string
}

export default function InputText({ placeholder, bgColor, ...rest }: InputTextProps) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor='#a1a1aa'
      {...rest}
      className={`bg-${bgColor} w-full h-10 p-2 rounded text-white`}
    />
  )
}