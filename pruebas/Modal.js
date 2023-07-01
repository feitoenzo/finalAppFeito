import { Button, Modal as NewModal, StyleSheet, Text, View } from 'react-native'

import React from 'react'

//props puedo poner lo que quiera que sea entendible, obvio
const Modal = ({isVisible, actionDeleteItem, itemSelected }) => {
  return (
    <View>
        <NewModal visible={isVisible} animationType="fade" transparent={false}>
            <View style={styles.modalContainer}>
                
                <View>
                    <Text>Estas seguro que quieres borrar este elemento ?</Text>
                    <Text> {itemSelected.name} </Text>
                    <Button
                    title="Eliminar"
                    color={"red"}
                    onPress={() => actionDeleteItem()}/>
                </View>
               
            </View>
        </NewModal>
    </View>
  )
}

export default Modal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})
