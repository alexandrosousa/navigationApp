import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './src/screens/Home'
import SobreScreen from './src/screens/Sobre'
import ContatoScreen from './src/screens/Contato'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'APP :: Home' }}
                />
                <Stack.Screen
                    name="Sobre"
                    component={SobreScreen}
                    options={{
                        headerTintColor: '#DC0f8A',
                        headerStyle: { backgroundColor: '#3792ec' },
                    }}
                />
                <Stack.Screen
                    name="Contato"
                    component={ContatoScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
