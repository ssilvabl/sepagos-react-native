// Importar la conexión a la DB
import { connect } from '../database'

// Función para Listar los pagos
export const getPayments = async (req, res) => {
    // Llamar a la función para conectarse a la DB
    const connection = await connect()
    // Sobre el objeto de conexión ejecutar consulta SQL
    const [rows] = await connection.query('SELECT * FROM pagos')
    // Devolver respuesta de la consulta
    res.json(rows)
}

// Función para seleccionar pago
export const getPayment = async (req, res) => {
    // Función para conectarse a la DB
    const connection = await connect()
    // Ejecutar la consulta SQl cobre el resultado del objeto conecction
    const [rows] = await connection.query('SELECT * FROM pagos WHERE id = ?', [req.params.id]);
    // Retornar respuesta de la consulta
    res.json(rows[0])
}

// Función para Contar el número total de pagos
export const getPaymentCount = async (req, res) => {
    // Función para conectarse a la DB
    const connection = await connect()
    // Ejecutar consulta SQL sobre el objeto connection
    const [rows] = await connection.query('SELECT COUNT(*) FROM pagos')
    // Retornar respuesta de la consulta SQL
    res.json(rows[0]["COUNT(*)"]) // Extraer el texto restante para que solo quede el valor que se requiere
}

// Función para Crear un pago
export const savePayment = async (req, res) => {
    // Función para conectarse a la DB
    const connection = await connect()
    // Ejecutar consulta SQL sobre el objeto connection
    const [results] = await connection.query('INSERT INTO pagos(usuario_id, descripcion, monto, tipo, fecha) VALUES (?, ?, ?, ?, ?)', [
        req.body.usuario_id,
        req.body.descripcion,
        req.body.monto,
        req.body.tipo,
        req.body.fecha
    ])
    res.json({
        id: results.insertId, // Obtener el ID
        ...req.body // Obtener todos los datos del body
    })
}

// Función para Eliminar un pago
export const deletePayment = async (req, res) => {
    // Función para conectarse a la DB
    const connection = await connect()
    // Ejecutar consulta SQL sobre el objeto connection
    await connection.query("DELETE FROM pagos WHERE id = ?", [req.params.id]);
    // Retornar respuesta de la consulta SQL
    res.sendStatus(204);
}

// Función para Actualizar un pago
export const updatePayment = async (req, res) => {
    // Función para conectarse a la DB
    const connection = await connect()
    // Ejecutar consulta SQL sobre el objeto connection
    await connection.query('UPDATE pagos SET ? WHERE id = ?', [req.body, req.params.id]) // Actualizar los datos pasando un objeto
    // Retornar respuesta a la consulta SQL
    res.sendStatus(204)
}