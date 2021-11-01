import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { StyleSheet } from 'react-native'

export default function SobreScreen({ route, navigation }) {
    const { nome, email } = route.params
    const detalhesDoCliente = { ...route.params, idade: 41, cidade: 'Realeza' }

    useEffect(() => {
        navigation.setOptions({
            title: `Sobre: ${nome}`,
        })
    })

    return (
        <View style={styles.container}>
            <Text>SOBRE SCREEN</Text>
            <Text>Nome: {nome}</Text>
            <Text>E-Mail: {email}</Text>
            <View style={styles.button}>
                <Button title="Voltar" onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.button}>
                <Button
                    title="Ir para tela CONTATO"
                    onPress={() => {
                        navigation.navigate('Contato', detalhesDoCliente)
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1c0e4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        margin: 10,
    },
})
