import { View, Text, StyleSheet } from 'react-native';


export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Olá API ROUTES</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    }
})