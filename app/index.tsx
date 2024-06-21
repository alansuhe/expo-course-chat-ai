import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import useStyle from '@/hooks/useStyle'
import { sp } from '@/constants/Sizes'

const index = () => {

    const { s, t, cl } = useStyle()

    return (
        <SafeAreaView style={s.container}>
            <View style={[s.p, s.container]}>
                <Text style={t.header}>Home</Text>

                <Link href='(auth)/chat/new' replace
                    style={s.radiusBox}>
                    <Text style={t.normal}>
                        Login
                    </Text>
                </Link>
            </View>

            <View style={{ flexDirection: 'row', gap: sp.m, padding: sp.l }}>
                <Link href={'/(modal)/settings'}>
                    <Text style={t.normal}>
                        Settings</Text>
                </Link>

                <Link href={'/(modal)/iap'}>
                    <Text style={t.normal}>
                        IAP</Text>
                </Link>
            </View>
        </SafeAreaView>
    )
}

export default index