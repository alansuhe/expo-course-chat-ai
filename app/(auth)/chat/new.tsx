import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import useStyle from '@/hooks/useStyle'

const newChat = () => {
  const { s, t} = useStyle()
  return (
    <SafeAreaView style={s.container}>
      <Text style={t.header}>New Chat</Text>
    </SafeAreaView>
  )
}

export default newChat