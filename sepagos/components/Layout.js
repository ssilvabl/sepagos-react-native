// REUTILIZAR PORCIONES VISUALES

// Import React
import React from 'react'
// Importar componentes de react native
import { View, StyleSheet, StatusBar } from 'react-native'


// Función para el componente
// Cuando lo llamen, se pasará componentes hijos
const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            {/* Modificar características del StatusBar */}
            <StatusBar backgroundColor='#00BFFF' />
            {/* Cuando pasen componentes hijos */}
            {children}
        </View>
    )
}

// Instanciar StyleSheet
const styles = StyleSheet.create({
    // Crear objetos que hacen referencia a estilos
    container: {
        backgroundColor: '#17202a',
        padding: 20,
        flex: 1,
        alignItems: 'center'
    },
})


// Exportar componente
export default Layout