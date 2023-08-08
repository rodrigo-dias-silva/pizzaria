import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native'

import { CategoryProps } from '../../pages/Order'

interface ModalPickerProps {
  options: CategoryProps[],
  handleCloseModal: () => void,
  selectedItem: (item: CategoryProps) => void
}

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window')

export function ModalPicker({ handleCloseModal, options, selectedItem }: ModalPickerProps) {

  function onPressItem(item: CategoryProps) {
    selectedItem(item)
    handleCloseModal()
  }

  const option = options.map((item, index) => (
    <TouchableOpacity
      key={index}
      className='items-start mx-2 border-t-[0.8px] border-slate-200'
      onPress={() => onPressItem(item)}
    >
      <Text className='m-5 text-base font-bold text-dark-900'>
        {item?.name}
      </Text>
    </TouchableOpacity>
  ))

  return (
    <TouchableOpacity
      onPress={handleCloseModal}
      className='flex-1 justify-center items-center'
    >
      <View
        className='bg-white rounded '
        style={{ width: WIDTH - 40, height: HEIGHT / 2 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {option}
        </ScrollView>
      </View>
    </TouchableOpacity>
  )
}