import { View } from "react-native";
import Posicao from "./Posicao";
import { useState } from "react";

export default function Tabuleiro() {
  const tabInicial = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [tab, setTab] = useState(tabInicial);
  const [vez, setVez] = useState("X");

  const podeJogar = (linha, coluna) => {
    return tab[linha][coluna] == null;
  };

  const verificarGanhador = () => {
    //horizontais
    for (let i = 0; i < 3; i++) {
      if (tab[i][0] == tab[i][1] && tab[i][0] == tab[i][2]) {
        return tab[i][0];
      }
    }
  };

  const jogar = (linha, coluna) => {
    if (!podeJogar(linha, coluna)) return;

    setTab((prev) => {
      const novoTabuleiro = [...prev];
      novoTabuleiro[linha][coluna] = vez;
      return novoTabuleiro;
    });
    setVez((prev) => (prev == "X" ? "O" : "X"));

    const ganhador = verificarGanhador();
    if (ganhador) alert(ganhador + " Ganhou");
  };

  return (
    <View>
      {tab.map((linha, i) => (
        <View style={{ flexDirection: "row" }}>
          {linha.map((posicao, j) => {
            return <Posicao valor={posicao} onPress={() => jogar(i, j)} />;
          })}
        </View>
      ))}
    </View>
  );
}
