import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { Message } from '@/types/AiInterfaces'
import { FontAwesome6 } from '@expo/vector-icons'
import { sp } from '@/constants/Sizes'
import useStyle from '@/hooks/useStyle'

const ChatItem = ({ item, loading, isLast }: { item: Message, isLast?: boolean, loading?: boolean }) => {

    const { s, cl, t } = useStyle();

    const { role, content } = item;

    if (role === 'system') return (<></>);

    if (role === 'assistant') return (
        <View style={{ marginLeft: sp.s, gap: sp.s }}>
            <FontAwesome6 name='robot' size={sp.l} color={cl.sub} />
            {
                isLast && loading ?
                    <ActivityIndicator color={cl.link} />
                    :
                    <Text style={t.normal}>
                        {content}
                    </Text>
            }

        </View>
    );

    return (
        <View style={{ alignItems: 'flex-end', marginRight: sp.s }}>
            <Text style={[t.normal, s.radiusBox, { overflow: 'hidden' }]}>
                {content}
            </Text>
        </View>
    )
}

export default ChatItem