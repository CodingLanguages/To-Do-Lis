import { Text, View } from 'react-native';
import style from './styles.style'

export default function App() {
  return (
    <View
      style={style.container}>
      {/* Today's Tasks */}
      <View
        style={style.tasksWrapper}>
        <Text
          style={style.sectionTitle}>
          Today's Task
        </Text>
      </View>
      <View
        style={style.items}>
        {/* This is where the tasks will go */}


      </View>

    </View>
  );
}
