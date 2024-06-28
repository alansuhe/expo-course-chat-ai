import { View, Text, TextInput, SafeAreaView, Pressable, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { FlatList } from 'react-native-gesture-handler'
import { FontAwesome6, Ionicons } from '@expo/vector-icons'
import { sp } from '@/constants/Sizes'
import { Message } from '@/types/AiInterfaces'
import ChatItem from './ChatItem'
import OpenAI from 'openai'
import ChatInput from './ChatInput'

const AI_KEY = process.env.EXPO_PUBLIC_AI_API
const AI_URL = process.env.EXPO_PUBLIC_AI_URL

const openai = new OpenAI({
    apiKey: AI_KEY, // This is the default and can be omitted
    baseURL: AI_URL
});

const ChatPage = () => {
    const { id } = useLocalSearchParams()
    const isNew = !id

    const [messages, setMessages] = useState<Message[]>([])
    const [loading, setLoading] = useState(false)

    

    const onShouldSend = (question: string) => {

        // send message to list: messages
        const newMessage = {
            role: 'user',
            content: question?.trim()
        } as Message;
        const newMessages = [...messages, newMessage]
        setMessages(newMessages)
        // messages.push()
        aiCompletion(newMessages)
        // setQuestion(undefined)
    }

    const aiCompletion = async (messages: Message[]) => {
        console.log('message --->', messages)
        setLoading(true)
        const chatCompletion = await openai.chat.completions.create({
            messages,
            model: "moonshot-v1-8k",
        }).catch(async (err)=>{
            console.warn(err)
        }).finally(()=>{
            setLoading(false)
        })
        console.log('completion --->', chatCompletion)
        if(chatCompletion)
        setMessages(prv => [...prv, chatCompletion.choices[0].message as Message])
        // setLoading(false)
    }

    /**
     * -------  mock -------
     */

    const mockAiCompletion = useCallback(() => {
        setMessages(previous => [...previous, { role: 'assistant', content: '' }])

        setLoading(true)
        setTimeout(() => {
            // openai.chat...
            const newAiMessage = {
                role: 'assistant',
                content: '你好！ 我是AI，你的问题......'
            } as Message;

            setMessages(previous => [...previous.slice(0, -1), newAiMessage])
            setLoading(false)

        }, 2000);
    }, [messages])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={{ color: 'red' }}>{isNew ? "New Chat" : id}</Text>

            <FlatList
                style={{ flex: 1 }}
                data={messages}
                renderItem={({ item, index }) => {
                    const isLast = index === messages.length - 1
                    return (<ChatItem item={item} loading={loading} isLast={isLast} />)
                }}
            />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={100}
            >
                <ChatInput onShouldSend={onShouldSend} />
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

export default ChatPage