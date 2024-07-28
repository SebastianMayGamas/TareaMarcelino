import { StyleSheet, Text, View, Alert } from 'react-native';
import React from 'react';
import { TextInput, IconButton, Button, PaperProvider } from 'react-native-paper';
import Modaluser from './Modaluser';

const Login2 = () => {
  const [password, onChangePassword] = React.useState('');
  const [user, onChangeUser] = React.useState('');
  const [verpw, setVerpw] = React.useState(true);


  const persona ={
    nombre: 'sebas',
    edad:'19',
  }

  const IngresarUser = () => {
    Alert.alert('Usuario es: ' + user + ' | password: ' + password);
  };

  const verPass = () => {
    setVerpw(!verpw);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.titulo1}>Login2</Text>
        <Text style={styles.login}>Hola mundo</Text>

        <TextInput
          style={styles.contenedorImput}
          label="user"
          value={user}
          onChangeText={onChangeUser}
        />

        <TextInput
          style={styles.contenedorImput}
          label="password"
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry={verpw}
          right={<TextInput.Icon icon="eye" onPress={verPass} />}
        />

        <Button
          theme={{ colors: { primary: '#c469d8' } }}
          onPress={IngresarUser}
          mode="contained"
          style={styles.button}
        >
          Ingresar
        </Button>

      </View>
    </PaperProvider>
  );
};

export default Login2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo1: {
    textAlign: 'center',
    fontSize: 23,
    marginBottom: 20,
  },
  login: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  contenedorImput: {
    padding: 5,
    width: 350,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});
