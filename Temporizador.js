import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Temporizador({ tempoInicial, onTempoFinalizado }) {
  const [contador, setContador] = useState(tempoInicial);

  useEffect(() => {
    let interval = setInterval(() => {
      setContador((x) => x - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log(contador);
  }, [contador]);

  useEffect(() => {
    if (contador <= 0 && onTempoFinalizado) {
      onTempoFinalizado();
    }
  }, [contador]);

  return (
    <View>
      <Text style={styles.tempo}>{contador}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tempo: {
    fontSize: 50,
  },
});
