import { View, Text } from 'react-native'
import React from 'react'

import { useRoute, RouteProp } from '@react-navigation/native'

type RouteDetailParms = {
  Order: {
    number: string | number,
    order_id: string
  }
}

type OrderRouteProps = RouteProp<RouteDetailParms, 'Order'>

export default function Order() {

  const route = useRoute<OrderRouteProps>()

  return (
    <View>
      <Text>Order</Text>
      <Text>
        {route.params.number}
      </Text>
    </View>
  )
}