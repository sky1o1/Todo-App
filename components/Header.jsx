import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.header}>My todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        heigt: 80,
        paddingTop: 35,
        backgroundColor: 'coral'
    },
    header: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'coral'
    }
})

export default Header;