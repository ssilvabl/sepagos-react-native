// Importar react
import React, { useState } from 'react'
// Importar react native
import { Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

// Importar componente
import Layout from '../components/Layout'
// Importar funciones de la API
import { savePayment } from '../api'

// Función para visualizar el componente
const PaymentFormScreen = ({ navigation }) => {

    // Gestionar estado de los campos de texto cuando se cambie algo en ellos
    const [payment, setPayment] = useState({
        usuario_id: 1,
        descripcion: '',
        monto: '',
        tipo: '',
        fecha: ''
    })

    // Función para el cambio de estado
    const handleChange = (name, value) => setPayment({ ...payment, [name]: value })

    // Enviar los datos al backend cuando se presione el botón
    const handleSubmit = () => {
        // Petición fetch
        savePayment(payment)
        // Navegación de las pantallas
        navigation.navigate('HomeScreen')
    }

    // Retornar la vista del componente
    return (
        <Layout>
            {/* Formulario para generar registro */}
            <TextInput
                style={styles.input}
                placeholder='Descripción del registro'
                placeholderTextColor='#808080'
                onChangeText={(text) => handleChange('descripcion', text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Monto'
                placeholderTextColor='#808080'
                onChangeText={(text) => handleChange('monto', text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Tipo'
                placeholderTextColor='#808080'
                onChangeText={(text) => handleChange('tipo', text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Fecha'
                placeholderTextColor='#808080'
                onChangeText={(text) => handleChange('fecha', text)}
            />
            <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
        </Layout>
    )
}

// Estilos del componente - Formulario
const styles = StyleSheet.create({
    input: {
        width: '90%',
        color: '#fff',
        borderColor: '#00BFFF',
        margin: 10,
        borderWidth: 2,
        fontSize: 15,
        textAlign: 'center',
        borderRadius: 10
    },
    buttonSave: {
        margin: 20,
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#00BFFF',
        width: '50%',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 15
    }
})

// Exportar la función del componente
export default PaymentFormScreen