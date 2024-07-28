import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Loggin from './src/components/screen/Login/loggin';
import Login2 from './src/components/screen/Login/Login2';
import Navegation from './src/components/Navegation.js';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
     <Navegation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  titulo: {
    textAlign: 'center',
    color: 'red',
    backgroundColor: 'black',
    padding: 35  
  }
});
