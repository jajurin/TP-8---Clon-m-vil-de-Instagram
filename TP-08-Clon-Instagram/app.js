import { registerRootComponent } from 'expo';
import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

// 1. IMPORTACIÓN DE COMPONENTES CON RUTAS CORREGIDAS
import Header from './components/Header';
import Login from './components/LoginBoton';
import LoginForm from './components/LoginFormulario';
import Footer from "./components/Footer";

// 2. IMPORTACIÓN DE DATOS (Asegúrate de que este archivo exista en esta ruta)
// Si tu archivo de datos reales está en otra carpeta, ajusta esta línea.


export default function App() {
  const [email, setEmail] = React.useState("");
  const [contraseña, setContraseña] = React.useState("");
  const [error, setError] = React.useState(false);
  const [login, setLogin] = React.useState(false);



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Header />

      <View style={{ flex: 4 }}>

      </View>

      <View style={{ flex: 3 }}>
        <LoginForm
          email={email}
          setEmail={setEmail}
          contraseña={contraseña}
          setContraseña={setContraseña}
        />
      </View>

      <View style={{ flex: 1, width: 350, alignSelf: "center" }}>
        <Login />
      </View>

      <View style={{ flex: 5 }}>
        <Footer errorEst={error} login={login} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f1f0f1",
  },
});

// 3. REGISTRO DEL COMPONENTE PRINCIPAL
registerRootComponent(App);