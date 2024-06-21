import { View, Text, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import useStyle from '@/hooks/useStyle'

const explore = () => {

  const {s, t} = useStyle()
  return (
    <SafeAreaView style={[s.container, s.center]}>
      <Text style={t.header}>Explore</Text>
      
    </SafeAreaView>
  )
}

export default explore