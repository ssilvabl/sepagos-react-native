// Importar módulo de conexión con MySQL
import mysql from "mysql2/promise";
// Importar configuración de la DB
import { config } from './config'

// Indicar que se va a ejecutar después de determinado tiempo
export const connect = async () => {
    // Función para conectar con la DB
    return await mysql.createConnection(config);
};