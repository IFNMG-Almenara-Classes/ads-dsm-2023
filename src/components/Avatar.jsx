import { Image, StyleSheet, View } from "react-native";

export default function Avatar({
  style
}) {
  return (
    <View>
      <Image
        style={{...styles.imagem, ...style}}
        source={{
          uri: "https://i.pinimg.com/564x/c6/e5/e5/c6e5e5147cb11a5b0fdb566ffd12315c.jpg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imagem: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#8D3A3D",
    resizeMode: "contain",
  },
});
