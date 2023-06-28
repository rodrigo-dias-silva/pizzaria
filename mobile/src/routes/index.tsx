
import React from 'react'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import { ActivityIndicator, View } from 'react-native'

export default function Routes() {

  const isAuthenticated = false
  const loading = false

  if (loading) {
    return (
      <View className='flex-1 bg-dark-700 justify-center items-center'>
        <ActivityIndicator size={60} color='#f5f7fb' />
      </View>
    )
  }

  return (
    isAuthenticated ?
      <AppRoutes />
      :
      <AuthRoutes />
  )
}