import { View, Text } from 'react-native'
import React from 'react'
import useStyle from '@/hooks/useStyle'

const settings = () => {
  const {s, t} = useStyle()
  return (
    <View>
      <Text style={t.header}>Settings</Text>
    </View>
  )
}

export default settings