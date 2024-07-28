import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Card, IconButton } from "react-native-paper";
import { ref, get, child } from "firebase/database";
import { database } from '../../../../FirebaseConfig';

const ScreenLuces = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      console.log("Intentando obtener datos de Firebase...");
      const dbRef = ref(database);
      try {
        const snapshot = await get(child(dbRef, "CASA/Temperaturayhumedad"));
        if (snapshot.exists()) {
          const datosObtenidos = snapshot.val();
          console.log("Datos obtenidos:", datosObtenidos);
          setDatos(datosObtenidos.tempera);
        } else {
          console.log("No se encontraron datos");
        }
      } catch (error) {
        console.error("Error obteniendo datos:", error);
      }
    };

    // Llamada inicial para obtener datos
    obtenerDatos();

    // Configura el intervalo para obtener datos cada 3 segundos
    const intervalo = setInterval(() => {
      obtenerDatos();
    }, 3000);

    // Limpieza del intervalo cuando el componente se desmonte
    return () => clearInterval(intervalo);
  }, []);

  return (
    <ScrollView>
      <View style={{ marginTop: 53, flex: 1 }}>
        <Text style={{ textAlign: "center" }} variant="displaySmall">
          Bienvenido
        </Text>
        <View style={{ padding: 23 }}>
          {datos && datos.Cocina ? (
            <>
              <Card style={{ marginTop: 20, backgroundColor: "purple" }}>
                <View style={{ alignItems: "center", padding: 3 }}>
                  <IconButton
                    icon="coolant-temperature"
                    color={"white"}
                    size={70}
                  />
                </View>

                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: 20,
                    fontSize: 34,
                    color: "white",
                    marginBottom: 20,
                  }}
                >
                  {datos.Cocina.temperatura} C°
                </Text>
                <Text
                  style={{ color: "white", padding: 10, textAlign: "center" }}
                  variant="titleLarge"
                >
                  Temperatura
                </Text>
              </Card>
              <Card style={{ marginTop: 20, backgroundColor: "#694F8E" }}>
                <View style={{ alignItems: "center", padding: 3 }}>
                  <IconButton icon="air-humidifier" color={"white"} size={70} />
                </View>

                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: 20,
                    fontSize: 34,
                    color: "white",
                    marginBottom: 20,
                  }}
                >
                  {datos.Cocina.humedad} %
                </Text>
                <Text
                  style={{ color: "white", padding: 10, textAlign: "center" }}
                  variant="titleLarge"
                >
                  Humedad
                </Text>
              </Card>
            </>
          ) : (
            <>
              <Text>Cargando datos...</Text>
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default ScreenLuces;

const styles = StyleSheet.create({});
