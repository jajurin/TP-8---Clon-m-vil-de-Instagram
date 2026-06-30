import { Text, StyleSheet } from "react-native";

export default function Footer({ errorEst, login }) {
  return (
    <>
      {errorEst ? (
        <Text style={styles.error}>
          Usuario o contraseña incorrectos, vuelva a intentar
        </Text>
      ) : (
        login && <Text style={styles.correcto}>¡Bienvenido!</Text>
      )}

      <Text style={styles.bajos}>Olvidaste la clave?</Text>
      <Text style={styles.bajos}>Crear Cuenta</Text>
    </>
  );
}

const styles = StyleSheet.create({
  bajos: {
    textAlign: "center",
    marginTop: 7,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    alignSelf: "center",
    fontWeight: "bold",
  },
  correcto: {
    color: "green",
    alignSelf: "center",
    fontWeight: "bold",
  },
});