import React from 'react'
import { View, Text, Button } from 'react-native'
import { StyleSheet } from 'react-native'

export default function HomeScreen({ navigation }) {
    // Esses dados serão passados para a screen Sobre:
    const dadosSobreCliente = {
        nome: 'Alexandro',
        email: 'alexandro@teste.com.br',
    }

    function irParaSobre() {
        navigation.navigate('Sobre', dadosSobreCliente)
    }

    return (
        <View style={styles.container}>
            <Text>HOME SCREEN</Text>
            <View style={styles.button}>
                <Button title="Ir para tela SOBRE" onPress={irParaSobre} />
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
