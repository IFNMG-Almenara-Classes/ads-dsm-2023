import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Avatar from "./Avatar";
import { TouchableHighlight } from "react-native";

export default function Contato({ contato }) {
  return (
    <TouchableOpacity onPress={() => alert(contato.nome)}>
      <View style={styles.container}>
        <Avatar />
        <View>
          <Text style={styles.texto}>{contato.nome}</Text>
          <Text style={styles.texto}>{contato.telefone}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: true,
    flexDirection: "row",
  },
  texto: {
    fontSize: 15,
  },
});
