import { StyleSheet, Text, View } from "react-native";

export default function Dia({selecionado}){
    return <View style={{...styles.container, ...(selecionado?styles.containerSelecionado:{})}}>
        <Text style={styles.diaSemana}>qua</Text>
        <Text style={{...styles.dia, ...(selecionado?styles.diaSelecionado:{})}}>5</Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
        alignItems: "center",
    },
    containerSelecionado: {
        backgroundColor: "#2F9E41",
        borderRadius: 15,
    },
    diaSemana: {
        color: "#fff",
        fontSize: 20,        
        marginBottom: 5
    },
    dia: {
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal: 15,
        textAlign: "center",
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold"
    },
    diaSelecionado: {
        borderColor: "#2F9E41",
    }
});