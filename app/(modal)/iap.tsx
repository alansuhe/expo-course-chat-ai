import { View, Text } from 'react-native'
import React from 'react'
import useStyle from '@/hooks/useStyle'

const iap = () => {

  const {s, t} = useStyle()
  return (
    <View>
      <Text style={t.header}>iap</Text>
    </View>
  )
}

export default iap