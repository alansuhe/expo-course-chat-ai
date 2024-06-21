import React from 'react';

import { Drawer } from 'expo-router/drawer';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Link, useNavigation, useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import useStyle from '@/hooks/useStyle';

const MenuItems = [{
  label: 'Chat',
  routeName: 'chat/new',
  url: '/(auth)/chat/new'
}, {
  label: 'Explore | 探索',
  routeName: 'explore',
  url: '/(auth)/explore'
}]

const MockHistory = [{
  id: 1,
  label: '请帮我分析股票走势...',
}, {
  id: 2,
  label: '写一篇工作总结...',
}]

function DrawerMenu(props: DrawerContentComponentProps) {
  const router = useRouter()
  const { routeNames, index: drawerIndex } = props.state
  const focusedRouteName = routeNames[drawerIndex];
  const navigation = useNavigation()
  // console.log(focusedRouteName, props.state)

  const {s,t, cl} = useStyle()

  return (
    <SafeAreaView style={{ flex: 1 }}>

      {/* <FontAwesome6 name='robot' color='black' size='36' /> */}

      <DrawerContentScrollView style={{ flex: 1 }}>
        {/* <DrawerItemList {...props} /> */}
        {
          MenuItems.map((m, i) => {
            const isFocused = focusedRouteName === m.routeName
            return (<DrawerItem
              key={i}
              focused={isFocused}
              label={m.label}
              onPress={() => isFocused ?
                navigation.dispatch(DrawerActions.closeDrawer())
                :
                router.push(m.url)} />)
          })
        }
        <View style={{ borderColor: 'grey', borderTopWidth: StyleSheet.hairlineWidth, marginHorizontal: 10 }} />
        <Text style={{ color: 'grey', padding: 4 }}>之前chat</Text>
        {
          MockHistory.map((m, i) => <DrawerItem
            key={i}
            focused={focusedRouteName === `chat/${m.id}`}
            label={m.label}
            onPress={() => router.push(`chat/${m.id}`)} />)
        }
      </DrawerContentScrollView>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

        <Link href={'/'} replace>
          <Text style={[t.normal, {color: cl.act}]}>
            Logout</Text>
        </Link>

        <Link href='/(modal)/settings'>
          <Text style={[t.normal, {color: cl.link}]}>
            Settings</Text>
        </Link>
      </View>

    </SafeAreaView>
  )
}
export default function TabLayout() {

  return (
    <Drawer drawerContent={(props) => <DrawerMenu {...props} />}>
      {/* <Drawer.Screen name='chat/new' options={{ title: 'New Chat' }} /> */}
      {/* <Drawer.Screen name='explore' options={{ title: 'Explore 探索' }} /> */}
    </Drawer>
  );
}
