// Importar la función Router de express
import { Router } from 'express';
// Importar método del controlador para que se ejecute en las rutas
import { getPayments, getPaymentCount,getPayment, savePayment, deletePayment, updatePayment } from '../controllers/payments'


// Guardar en la constante lo que se devuelve de la función Router
const router = Router()

// Añadir sección de Swagger
/**
 * @swagger
 * tags:
 *  name: Payments
 *  description: Payments EndPoint
 * 
 */

// DEFINIR RUTAS
// Después de la ruta se define la función a ejecutar
// Definir la documentación utilizando swagger para los end Point
/**
 * @swagger
 * /payments:
 *  get:
 *    summary: Get all payments list
 *    tags: [Payments]
 */
router.get('/payments', getPayments) // Ruta para listar los pagos

/**
 * @swagger
 * /payments/count:
 *  get:
 *    summary: Get count payments
 *    tags: [Payments]
 */
router.get('/payments/count', getPaymentCount) // Ruta para contar todos los pagos

/**
 * @swagger
 * /payments/:id:
 *  get:
 *    summary: Get a single element
 *    tags: [Payments]
 */
router.get('/payments/:id', getPayment) // Ruta para seleccionar un solo elemento

/**
 * @swagger
 * /payments:
 *  post:
 *     summary: Create a new element
 *     tags: [Payments]
 */
router.post('/payments', savePayment) // Ruta para añadir un nuevo elemento

/**
 * @swagger
 * /payments/:id:
 *  delete:
 *       summary: Delete a single element
 *       tags: [Payments]
 */
router.delete('/payments/:id', deletePayment) // Ruta para eliminar un elemento

/**
 * @swagger
 * /payments/id:
 *  put:
 *    summary: Update data of a single element
 *    tags: [Payments]
 */
router.put('/payments/:id', updatePayment) // Ruta para editar un elemento

// Exportar la constante router
export default router