import { Pressable, Text, StyleSheet } from "react-native";

export default function Login({ onPress }) {
  return (
    <Pressable style={styles.boton} onPress={onPress}>
      <Text style={styles.texto}>Ingresar</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#8e5dfb",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  texto: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});