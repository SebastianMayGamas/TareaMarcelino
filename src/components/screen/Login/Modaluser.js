import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Modal, PaperProvider,Portal,Button,Text,TextInput } from 'react-native-paper'

const Modaluser = (props) => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [user, onChangeUser] = React.useState(props.nombre);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const name = props.nombre
  const password = props.pw
  const persona = props.person
  
console.log(name)
console.log(password)
console.log(persona)
  return (
    <>
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Text>
          bienvenido {persona.nombre}
        </Text>
        <Text>
          user : {name}
        </Text>

        <Text>
          password: {password}
        </Text>


        <TextInput
          style={styles.contenedorImput}
          label="user"
          defaultValue ={props.nombre}
          value={user}
          onChangeText={onChangeUser}
        />

      </Modal>
    </Portal>
    <Button style={{marginTop: 30}} onPress={showModal}>
      Show
    </Button>
  </>
);
};


export default Modaluser

const styles = StyleSheet.create({


})