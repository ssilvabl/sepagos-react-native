// Importar express para crear el servidor
import express from 'express';
// Importar cors para que cualquier app de backend pueda conectarse
import cors from 'cors';
// Importar Morgan para ver las peticiones por consola que nos llegan
import morgan from 'morgan';

// Importar swagger para la documentación
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from './swaggerOptions'
// Especificaciones de cómo se va a comportar el módulo
const specs = swaggerJSDoc(options)

// Importar las rutas
import paymentsRoutes from './routes/payments'


// Instancia de express
const app = express();

// Utilizar cors
app.use(cors());

// Utilizar morgan
app.use(morgan("dev"));

// Convertir los datos a json
app.use(express.json());

// Usar las rutas
app.use(paymentsRoutes)

// Ruta de documentación
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

// Exportar por defecto la instancia
export default app