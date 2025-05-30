// Importar React
import React, { useEffect, useState } from 'react'
// Importar componentes de React native
import { View } from 'react-native'
// Funciones para interactuar con la API
import { getPayments } from '../api'

// Importar componentes
import PaymentList from '../components/PaymentList'
import Layout from '../components/Layout'


// Función para el componente
const HomeScreen = () => {

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

    // Retorar vista del componente
    return (
        <Layout>
            {/* Recorrer los pagos */}
            <PaymentList payments={payments}/>
        </Layout>
    )
}

// Exportar la función del componente
export default HomeScreen