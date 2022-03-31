import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList} from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Add Caractere</Text>
            <TextInput style={styles.input}></TextInput>
            <TextInput style={styles.input}></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Adicionar</Text>
            </TouchableOpacity>                        
            <FlatList data={null} renderItem={() => <Text>Caractere</Text>}></FlatList>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{padding: 10},
        text: {},
        button: {},
        textButton: {},
        input:{}
    }
)