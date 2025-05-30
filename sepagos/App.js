// Importar React
import React from 'react'
// Importar react native
import { Text, TouchableOpacity } from 'react-native'
// Importar react navigation para la navegación entre pantallas
import { NavigationContainer } from '@react-navigation/native'
// Importar stack navigation para el tipo de navegación entre pantallas
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Importar componentes
import HomeScreen from './screens/HomeScreen'
import PaymentFormScreen from './screens/PaymentFormScreen'


// Ejecutar la función para que nos devuelva el componente que permite definir las rutas(páginas) de la app
const Stack = createNativeStackNavigator()

// Crear componente inicial
const App = () => {
  // Retorna el componente
  return (
    // Definir el contenedor de rutas
    <NavigationContainer>
      {/* Navegador en stack */}
      <Stack.Navigator>
        {/* Pantallas creadas - para añadir una pestaña en la pantalla se utiliza el options
        el navigation para ir a otra pantalla*/}
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={({navigation}) => ({
         headerStyle: { backgroundColor: '#fff' },
         headerTitleStyle: { color: '#00BFFF' }, 
         headerTitleAlign: 'center', 
         title: 'Inicio',
         headerRight: () => (
          // Botón clicable
          // Se define la acción a ejecutar utilizando el evento onPress
          // En navigation se indica la pantalla a la que se va a redirigir
          <TouchableOpacity onPress={() => navigation.navigate('PaymentFormScreen')}>
            <Text style={{ color: '#00BFFF' }}>Nuevo</Text>
          </TouchableOpacity>
        )
        })} />
        {/* Las propiedades van dentro de options */}
        <Stack.Screen name="PaymentFormScreen" component={PaymentFormScreen} options={{
          title: 'Nuevo Registro',
          headerStyle: { backgroundColor: '#fff' },
          headerTitleStyle: { color: '#00BFFF' },
          headerTintColor: '#00BFFF'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// Exportar la función que crea el componente
export default App