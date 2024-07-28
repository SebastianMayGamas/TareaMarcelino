import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { db } from '../../../../FirebaseConfig';

const FormularioUser = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [perfil, setPerfil] = useState('');

  const navigation = useNavigation();

  const addUser = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        nombre: nombre,
        email: email,
        password: password,
        perfil: perfil,
      });
      console.log("Documento escrito con ID: ", docRef.id);
     

      navigation.navigate('ScreensUser');
    } catch (error) {
      console.error("Error añadiendo el documento: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear usuario</Text>

      <TextInput
        label='Nombre'
        value={nombre}
        onChangeText={text => setNombre(text)}
        style={styles.input}
      />

      <TextInput
        label='E-mail'
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />

      <TextInput
        label='Contraseña'
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        label='Perfil'
        value={perfil}
        onChangeText={text => setPerfil(text)}
        style={styles.input}
      />

      <Button mode="contained" onPress={addUser} style={styles.button}>
        Crear
      </Button>
    </View>
  );
};

export default FormularioUser;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
  },
});
