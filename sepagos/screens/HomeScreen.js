// Importar React
import React from 'react'

// Importar componentes
import PaymentList from '../components/PaymentList'
import Layout from '../components/Layout'


// Función para el componente
const HomeScreen = () =>
// Retorar vista del componente
(
    <Layout>
        {/* Recorrer los pagos */}
        <PaymentList />
    </Layout>
)

// Exportar la función del componente
export default HomeScreen