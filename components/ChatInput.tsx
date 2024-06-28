import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { sp } from '@/constants/Sizes'
import useStyle from '@/hooks/useStyle'

const ChatInput = ({ onShouldSend }: { onShouldSend: (question: string) => void }) => {

    const { s, cl, t} = useStyle()

    const [question, setQuestion] = useState<string | undefined>()

    const isValidQuestion = question && (question?.trim().length > 0);
    // console.log(question?.trim().length, isValidQuestion)

    const onChangeText = (text: string) => {
        setQuestion(text)
    }

    const onSend = () => {
        onShouldSend(question!.trim())
        setQuestion(undefined)
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: sp.s, gap: sp.s }}>
            {
                (!question || question.length === 0) &&
                <Pressable onPress={() => { }}>
                    <Ionicons name='add-circle-outline' size={sp.xl} />
                </Pressable>
            }
            <TextInput
                autoFocus
                placeholder='输入对话内容...'
                multiline
                value={question}
                onChangeText={onChangeText}
                style={{ flex: 1, borderColor: cl.sub, borderWidth: 1, padding: sp.s, borderRadius: sp.m }}
            />
            {
                isValidQuestion &&
                <Pressable onPress={onSend}>
                    <Ionicons name="arrow-up-circle" size={sp.xl} />
                </Pressable>
            }

        </View>
    )
}

export default ChatInput