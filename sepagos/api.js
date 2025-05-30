// FUNCIONES PARA HACER LAS CONSULTAS AL BACKEND

// Constante para definir la IP para la petición http a la API
const API = 'http://192.168.1.35:3000/payments'

// Función para obtener todos los pagos
export const getPayments = async() => {
    // Cargar datos haciendo una petición http
    const res = await fetch(API)
    // Convertir la respuesta en un JSON
    return await res.json()
}
