import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import styles from './stylesApp/styles';
import TodoScreen from './src/screen/TodoScreen';

export default function App() {
  return (
    <SafeAreaView 
      style={styles.container}>
        <View>
            <TodoScreen />
        </View>
    </SafeAreaView>
  );
}

