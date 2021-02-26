import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

function AddTodo({submitHandler}){
    const [text,setText] = useState('')

    const changeHandler = (value) => {
        setText(value)
    }

    return(
       <View>
           <TextInput
           style={styles.input}
           placeholder='Add todo'
           onChangeText={changeHandler}
           />
           <Button onPress={() => submitHandler(text)} title='Add todo' color='coral' />
       </View>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingVertical: 6,
        paddingHorizontal: 8,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb'
    }
})

export default AddTodo;