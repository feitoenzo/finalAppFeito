import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Modal = () => {
  return (
    <View>
        <Modal visible={modalVisible} animationType="fade" transparent={false}>
            <View style={styles.modalContainer}>
                <Text>El modal</Text>
                <View>
                    <Text>Estas seguro que quieres borrar este elemento ?</Text>
                    <Text> {itemSelected.name} </Text>
                </View>
                <View>
                    <Button
                    title="Eliminar"
                    color="red"
                    onPress={() => onHandleDelete(itemSelected)}/>
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default Modal

const styles = StyleSheet.create({})