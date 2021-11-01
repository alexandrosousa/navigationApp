import React from 'react'
import { View, Text, Button } from 'react-native'
import { StyleSheet } from 'react-native'

export default function ContatoScreen({ route, navigation }) {
    let { idade, cidade } = route.params

    // Teste para usar a renderização do Text condicionalmente (só mostrará o TEXT cidade se existir uma cidade):
    cidade = null

    return (
        <View style={styles.container}>
            <Text>CONTATO SCREEN</Text>
            <Text>Idade: {idade}</Text>
            {cidade && <Text>Cidade: {cidade}</Text>}
            <View style={styles.button}>
                <Button title="Voltar" onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.button}>
                <Button
                    title="Ir para HOME"
                    onPress={() => {
                        navigation.navigate('Home')
                    }}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Ir para o TOPO da pilha (HOME)"
                    onPress={() => {
                        navigation.popToTop()
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
