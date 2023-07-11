
import React, { useContext } from 'react'
import { ActivityIndicator, View } from 'react-native'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

import { AuthContext } from '../contexts/AuthContext'

export default function Routes() {

  const { isAuthenticated, loading } = useContext(AuthContext)

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