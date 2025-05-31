// FUNCIONES PARA HACER LAS CONSULTAS AL BACKEND

// Constante para definir la IP para la petición http a la API
const API = 'http://192.168.1.35:3000/payments'

// Función para obtener todos los pagos
export const getPayments = async () => {
    // Cargar datos haciendo una petición http
    const res = await fetch(API)
    // Convertir la respuesta en un JSON
    return await res.json()
}

// Función para crear un nuevo registro
export const savePayment = async (newPayment) => {
    // Hacer petición http fetch con el método post
    const res = await fetch(API, { 
        // Método a utilizar
        method: 'POST',
        // Encabezados para aceptar el tipo de aplicación
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        // Convertir Contenido en JSON
        body: JSON.stringify(newPayment)
    })
    // Retornar la conversión
    return await res.json()
}