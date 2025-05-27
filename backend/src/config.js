// CONFIGURACIÓN DE LA CONEXIÓN A LA BASE DE DATOS

// Importar dotenv
import { config as dotenv } from "dotenv"
// Función para leer las variables de entorno que tengamos en el proyecto
dotenv();

// Exportar configuración de la DB
// Poner valores por defecto si las variables de entorno no existen
export const config = {
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DATABASE || 'sepagos_db',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || ''
}