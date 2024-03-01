import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { api } from '../server.api';
import { isAxiosError } from 'axios';


export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        try {
            const response = await api.post("/user", {
                email,
                password
            });

            Alert.alert('Olá ' + response.data.name)
        } catch (error) {
            if(isAxiosError(error)) {
                return Alert.alert("Erro", error.response?.data);
            }

        Alert.alert('Não foi possível fazer o login');

        }
    };

    // Call handleLogin function when the button is pressed
    <TouchableOpacity 
        style={styles.button}
        onPress={handleLogin}
    >
        <Text 
            style={styles.text}
        >
            Entrar
        </Text>
    </TouchableOpacity>


    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput} 
                placeholder='E-mail' 
                onChangeText={setEmail}    
            />
            <TextInput 
                style={styles.textInput} 
                placeholder='Password' 
                secureTextEntry
                onChangeText={setPassword}
            />
            
            <TouchableOpacity 
                style={styles.button}
                onPress={handleLogin}
            >
                <Text 
                    style={styles.text}
                >
                    Entrar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',

        padding: 32
    },
    textInput: {
        height: 54,
        width: '100%',
        backgroundColor: "#e3e3e3",
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
    button: {
        height: 54,
        width: '100%',
        backgroundColor: "#bbb",
        borderRadius: 5,
        padding: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

