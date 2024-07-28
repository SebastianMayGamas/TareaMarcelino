import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import React,{useEffect, useState} from 'react'
import { db } from '../../../../FirebaseConfig'
import { collection, doc, updateDoc } from 'firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native';

const upadeteUser = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [perfil, setPerfil] = useState('');
    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
        if (route.params?.user) {
          const { nombre, email, perfil } = route.params.user;
          setNombre(nombre);
          setEmail(email);
          setPerfil(perfil);
        }
      }, [route.params?.user]);


      const updateUser = async () => {
        if (route.params?.user) {
          try {
            const userRef = doc(db, 'users', route.params.user.id);
            await updateDoc(userRef, {
              nombre: nombre,
              email: email,
              perfil: perfil,
            });
            console.log("Documento actualizado con éxito");
            // Reset fields after submission
            // Optionally navigate to another screen
            navigation.navigate('ScreensUser');
          } catch (error) {
            console.error("Error actualizando el documento: ", error);
          }
        }
      };

  return (
    <View>
          <View style={styles.container}>
      <Text style={styles.title}>Editar usuario</Text>

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
        label='Perfil'
        value={perfil}
        onChangeText={text => setPerfil(text)}
        style={styles.input}
      />

      <Button mode="contained" onPress={updateUser} style={styles.button}>
        Actualizar
      </Button>
    </View>
    </View>
  )
}

export default upadeteUser

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

})