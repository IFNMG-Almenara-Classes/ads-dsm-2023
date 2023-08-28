import { Image, Text, TouchableHighlight, View } from "react-native";
import xis from "./assets/xis.png";
import bolinha from "./assets/bolinha.png";

export default function Posicao({ onPress, valor }) {
  const exibirJogada = () => {
    if (valor == "X") {
      return <Image source={xis} />;
    } else if (valor == "O") {
      return <Image source={bolinha} />;
    } else {
      return <></>;
    }
  };

  return (
    <TouchableHighlight
      onPress={onPress}
      style={{
        width: 90,
        height: 90,
        alignContent: "center",
        justifyContent: "center",
        borderColor: "#0FF0F0",
        borderWidth: 1,
      }}
    >
      {exibirJogada()}
    </TouchableHighlight>
  );
}
