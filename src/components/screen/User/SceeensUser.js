import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, DataTable, IconButton } from 'react-native-paper';
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../../FirebaseConfig'; // Importa db desde tu archivo de configuración de Firebase
import { useNavigation } from '@react-navigation/native';

const ScreensUser = () => {
  const [datos, setDatosUser] = useState([]);

const navigation = useNavigation();

  const obtenerDatosUser = async () => {
    try {
      const user = [];
      const querySnapshot = await getDocs(collection(db, 'users'));
      querySnapshot.forEach((doc) => {
        const { nombre, email, perfil } = doc.data();
        user.push({
          id: doc.id,
          nombre,
          email,
          perfil,
        });
      });
      setDatosUser(user);
    } catch (error) {
      console.error("Error obteniendo los datos: ", error);
    }
  };

  useEffect(() => {
    obtenerDatosUser();
  }, []);

  const eliminarUsuario = async (id) => {
    try {
      await deleteDoc(doc(db, 'users', id));
      obtenerDatosUser(); // Vuelve a obtener los datos después de eliminar un usuario
    } catch (error) {
      console.error("Error eliminando el documento: ", error);
    }
  };



  return (

    <>
    <Button icon={'account-multiple-plus'} mode='contained' onPress={()=>navigation.navigate('FormularioUser')}> 

    </Button>


    <DataTable>
      <DataTable.Header>
        <DataTable.Title>User</DataTable.Title>
        <DataTable.Title>Email</DataTable.Title>
        <DataTable.Title>Perfil</DataTable.Title>
        <DataTable.Title numeric>Acción</DataTable.Title>
      </DataTable.Header>

      {datos.map((item) => (
        <DataTable.Row key={item.id}>
          <DataTable.Cell>{item.nombre}</DataTable.Cell>
          <DataTable.Cell>{item.email}</DataTable.Cell>
          <DataTable.Cell>{item.perfil}</DataTable.Cell>
          <DataTable.Cell>
            <View style={styles.actionButtonsContainer}>
              <IconButton
                style={styles.button}
                size={20}
                icon="square-edit-outline"
                onPress={() => navigation.navigate('upadeteUser', { user: item })}
              />
              <IconButton
                style={styles.button}
                size={20}
                icon="trash-can-outline"
                onPress={() => eliminarUsuario(item.id)}
              />
              <IconButton
                style={styles.button}
                size={20}
                icon="eye"
                onPress={() => console.log("Pressed")}
              />
            </View>
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
    </>
  );
};

export default ScreensUser;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  card: {
    width: '100%',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 4,
  },
});
