import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { ButtonRed } from '../../components/Button'

export default function Dashboard() {

  const { signOut } = useContext(AuthContext)

  return (
    <View>
      <Text>Dashboard</Text>

      <ButtonRed
        content='Sair do App'
        onPress={signOut}
      />

    </View>
  )
}