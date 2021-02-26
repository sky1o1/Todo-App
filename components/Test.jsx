import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function Test() {
  const [name, setName] = useState('John');
  const [people, setPeople] = useState([
    {name: 'aakash', id: 1},
    {name: 'dangol', id: 2},
    {name: 'lana', id: 3},
    {name: 'taylor', id: 4},
    {name: 'ariana', id: 5},
  ])

  const pressHandler = (id) => {
    console.log(id)
    setPeople((prevData) => {
      return prevData.filter(person => person.id != id);
    });
  }

  console.log(name)
  return (
    <>
    <View style={styles.container}>
      <Text>Welcome to the first React Native App</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.body}>  
      <Text>Enter Name</Text>
      <TextInput 
      keyboardType='default'
      onChangeText={(val) => {setName(val)}}
      style={styles.input} />
    </View>

    <View style={styles.list}>
      <FlatList
      // numColumns={2}
      keyExtractor={(item) => item.id}
      data={people}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
        <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: '#fff'
  },
  input: {
    border: '1px solid #000', 
  },
  list:{
    backgroundColor: 'pink',
    marginHorizontal: 10,
    marginTop: 10,
    padding: 20
  }
});
