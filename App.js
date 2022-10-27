import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

export function HomeScreen() {
 return (
    <View style={styles.container}>
      <Text>Pessoal sou eu de novo!</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name={'Home'} component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});