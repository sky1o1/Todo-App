import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList, 
  Alert, 
  TouchableWithoutFeedback, 
  Keyboard 
} from 'react-native';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy a mobile', key: 1 },
    { text: 'Buy a laptop', key: 2 },
    { text: 'Laser Treatment', key: 3 },
  ])

  const pressHandler = (key) => {
    setTodos((prevData) => {
      return prevData.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevData) => {
        return [...prevData, { text: text, key: Math.random().toString() }]
      })
    } else {
      Alert.alert('OOPS!!', 'Todo length must be more than 3 characters long',
        [
          {
            text: 'Understood',
            onPress: () => console.log('Alert Closed')
          }
        ])
    }

  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <ListTodo item={item} pressHandler={pressHandler} />
                )} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 40,
    backgroundColor: 'pink'
  },
  list: {
    flex: 1,
    backgroundColor: 'yellow',
    marginTop: 20,
  }
});
