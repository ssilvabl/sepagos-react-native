// Importar React 
import React from 'react'
// Importar componentes de react native
import { Text, FlatList } from 'react-native'

// Importar componente para recuadro de elementos
import PaymentItem from './PaymentItem'


// Función para el componente
const PaymentList = ({ payments }) => {

    // Función para renderizar el componente
    const renderItem = ({ item }) => {
            return <PaymentItem payment={item}/>
            }

    // Retornar vista
    return (
        <FlatList
        style={{ width: '100%' }}
        data = {payments}
        keyExtractor={item => item.id + ''}
        // Cuando vaya a renderizar cada uno de los items llama la función
        renderItem = {renderItem}
        />
    )
}

// Exportar la función
export default PaymentList
