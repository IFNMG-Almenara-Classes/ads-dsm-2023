import { StyleSheet, Text, View } from "react-native";

function ItemAgenda({item}){
    return <View style={styles.container}>
        <View style={styles.containerHora}>
            <Text>{item.inicio}</Text>
            <Text>{item.fim}</Text>
        </View>
        <View style={styles.containerDescricao}>
            <Text>{item.descricao}</Text>
            <Text>{item.professor}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 5,
        marginHorizontal: 4,
        gap: 4
    },
    containerHora: {
        padding: 2,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    containerDescricao: {
        padding: 2,
        backgroundColor: "#ffffff",
        flexGrow: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    }
})

export default ItemAgenda;