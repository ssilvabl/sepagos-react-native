// Importar react
import React from 'react'
// Importar react native
import { Text, View, StyleSheet } from 'react-native'


// Función del componente para estilizar cada componente de la lista
const PaymentItem = ({payment}) => {

    // Retornar la vista
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemDescription}>{payment.descripcion}</Text>
            <Text style={styles.itemDescription}>{payment.monto}</Text>
            <Text style={styles.itemDescription}>{payment.tipo}</Text>
            <Text style={styles.itemDescription}>{payment.fecha}</Text>
        </View>
    )
}

// Declarar clase para crear un recuadro para los elementos
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#00BFFF',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10
    },
    itemDescription: {
        color: '#ffffff'
    }
})

// Exportar la función
export default PaymentItem