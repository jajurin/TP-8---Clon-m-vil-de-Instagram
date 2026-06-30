import { TextInput, StyleSheet } from "react-native";

export default function LoginForm({email, setEmail,contraseña, setContraseña}) {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingrese su contraseña"
        value={contraseña}
        onChangeText={setContraseña}
        secureTextEntry
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#a57bfb",
    padding: 10,
    margin: 10,
    backgroundColor: "white",
  },
});