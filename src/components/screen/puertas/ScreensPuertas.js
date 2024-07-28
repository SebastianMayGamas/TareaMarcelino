import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { database } from '../../../../FirebaseConfig';
import { ref, get, child, update } from "firebase/database";
import React, { useEffect } from 'react';

const ScreensPuertas = () => {
  const [datos, setDatos] = React.useState({ Cocina: false, Sala: false });

  const obtenerDatos = async () => {
    const dbRef = ref(database);
    try {
      const snapshot = await get(child(dbRef, "CASA/Puerta"));
      if (snapshot.exists()) {
        const datosObtenidos = snapshot.val();
        console.log("Datos obtenidos:", datosObtenidos);
        setDatos(datosObtenidos); 
      } else {
        console.log("No se encontraron datos");
      }
    } catch (error) {
      console.error("Error obteniendo datos:", error);
    }
  };

  const actualizarDatoTemporal = async (ubicacion, valor) => {
    const dbRef = ref(database, `CASA/Puerta`);
    try {
      await update(dbRef, { [ubicacion]: valor });
      obtenerDatos(); 

      
      setTimeout(async () => {
        await update(dbRef, { [ubicacion]: !valor });
        obtenerDatos(); 
      }, 2000);
    } catch (error) {
      console.error("Error actualizando datos:", error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        contentStyle={{
          paddingVertical: 50
        }}
        icon="food"
        mode="contained"
        onPress={() => actualizarDatoTemporal('Cocina', true)}
        style={styles.button}
        background={datos.Cocina ? "green" : "red"} 
      >
        Cocina
      </Button>

      <Button
        contentStyle={{
          paddingVertical: 50
        }}
        icon="chair-rolling"
        mode="contained"
        onPress={() => actualizarDatoTemporal('Sala', true)}
        style={styles.button}
        background={datos.Sala ? "green" : "red"} // Cambiar color según el estado
      >
        Sala
      </Button>

      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Cocina: {datos.Cocina ? "True" : "False"}</Text>
        <Text style={styles.statusText}>Sala: {datos.Sala ? "True" : "False"}</Text>
      </View>
    </View>
  );
};

export default ScreensPuertas;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    marginVertical: 10,
  },
  statusContainer: {
    marginTop: 20,
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  }
});
