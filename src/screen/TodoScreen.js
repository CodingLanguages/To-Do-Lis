import React from 'react';
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import styles from '../../stylesApp/styles.js';


const TodoScreen = () => {
  return (
    <View>
      <View> 
         <Text style={styles.title}>To-Do</Text>
      </View>
      
      <View>
      <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.searchTaskWrappper}
         >
         <TextInput 
            style={styles.inputSearch}
            placeholder={'Search a Task...'}
        />
         <TouchableOpacity>
            <View style={styles.searchAddWrapper}>
                <Text style={styles.addText}>0</Text>
            </View>
            </TouchableOpacity>  
        </KeyboardAvoidingView> 
         <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrappper}
         >
         <TextInput 
            style={styles.input}
            placeholder={'Write a Task...'}
        />
         <TouchableOpacity>
            <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
            </View>
            </TouchableOpacity>  
        </KeyboardAvoidingView> 
      </View>
    </View>
  );
}

export default  TodoScreen;

