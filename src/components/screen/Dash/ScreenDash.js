import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'
import React from 'react'


const ScreenDash = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>ScreenDash</Text>
      <Button icon="camera" mode="contained" onPress={() => navigation.navigate('userDetalles') }>
    Press me
    </Button>
    </View>
  )
}

export default ScreenDash

const styles = StyleSheet.create({})