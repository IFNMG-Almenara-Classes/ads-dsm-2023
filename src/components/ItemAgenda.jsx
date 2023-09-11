import { StyleSheet, Text, View } from "react-native";
import Avatar from "./Avatar";

function ItemAgenda({item}){
    return <View style={styles.container}>
        <View style={styles.containerHora}>
            <Text style={styles.textInicio}>{item.inicio}</Text>
            <Text style={styles.textFim}>{item.fim}</Text>
        </View>
        <View style={styles.containerDescricao}>
            <Text style={styles.textDesrcicao}>{item.descricao}</Text>
            <View style={{flexDirection: "row", alignItems: "center", gap: 4}}>
                <Avatar style={{
                    height: 25,
                    width: 25,
                    borderWidth: 2,
                }} />
                <Text>{item.professor}</Text>
            </View>
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
        alignItems: "center",
        padding: 8
    },
    containerDescricao: {
        padding: 8,
        backgroundColor: "#ffffff",
        flexGrow: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,        
        gap: 5
    },
    textInicio: {
        fontSize: 18,
        fontWeight: "bold"
    },
    textFim: {
        fontSize: 16,
        color: "#696969"
    },
    textDesrcicao: {
        fontSize: 18,
        fontWeight: "bold"
    },
    textProfessor: {
        fontSize: 16,
        color: "#696969"
    }
})

export default ItemAgenda;