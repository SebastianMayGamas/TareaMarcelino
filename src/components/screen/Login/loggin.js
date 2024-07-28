import React from 'react';
import { StatusBar, View, Text, StyleSheet, ImageBackground, TextInput ,Image} from 'react-native';
import { Button } from 'react-native-paper';
import {Auth} from '../../../../FirebaseConfig'


const Loggin = () => {


  const usercreate = () => {
    createUserWithEmailAndPassword(Auth, user, password)
    .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        Alert.alert("Cuenta creada", user.email)
    }) .catch((error) => {
        console.log(error);
        Alert.alert(error.message)
    })
};


const logear = () => {
  // Alert.alert("Logueandose");
  signInWithEmailAndPassword(Auth, user, password)
  .then((userCredential) => {
      const user = userCredential.user
      console.log(user)
      Alert.alert("Has accedido correctamente")
  }) .catch((error) => {
      console.log(error);
      Alert.alert(error.message)
  })
}


  return (
    <PaperProvider>
    <View style={styles.contenedorprincipal}>
        <Text style={{ textAlign: "center" }} variant='displayLarge'>
            Hola
        </Text>
        <Text style={{ textAlign: "center" }} variant='displayLarge'>
            Iniciar Sesion
        </Text>

        <View style={styles.contenedorinput}>
            <TextInput
                label="Usuario"
                value={user}
                onChangeText={setUser}
            />
            <TextInput
                style={{ marginTop: 10 }}
                value={password}
                label="Password"
                secureTextEntry={verpw}
                onChangeText={setPassword}
                right={<TextInput.Icon icon="eye" onPress={()=>setVerpw(!verpw)} />}
            />

            <Button
                theme= {{colors: { primary: "#C469D8"}}}
                style= {{ marginTop: 20}}
                icon= "login"
                mode= "contained"
                onPress= {logear}
            >
                Ingresar
                </Button>

            <Button
                theme= {{colors: { primary: "#C469D8"}}}
                style= {{ marginTop: 20}}
                icon= "login"
                mode= "contained"
                onPress= {usercreate}
            >
                Crear Cuenta
            </Button>
            
            <ModalUser
                nombre = {user}
                pw = {password}
            />
        </View>
    </View>
    </PaperProvider>
);
};


const styles = StyleSheet.create({
contenedorprincipal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'EEE',
},
contenedorinput: {
    width: '100%',
},
});


export default Loggin;
