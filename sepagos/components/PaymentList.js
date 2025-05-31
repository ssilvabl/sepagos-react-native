// Importar React 
import React, {useState, useEffect} from 'react'
// Importar componentes de react native
import { FlatList } from 'react-native'

// Importar componente para recuadro de elementos
import PaymentItem from './PaymentItem'
// Funciones para interactuar con la API
import { getPayments } from '../api'


// Función para el componente
const PaymentList = () => {

    // Iniciar con un arreglo vacía cada vez que cargue la pantalla
    const [payments, setPayments] = useState([])

    const loadPayments = async() => {
        const data = await getPayments()
        // Tablecer datos en el arreglo de pagos
        setPayments(data)
    }

    // Función que se ejecuta cada vez que carga la página (hook)
    useEffect(() => {
        // llamar función para cargar datos solicitados por http
        loadPayments()
    }, [])

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
