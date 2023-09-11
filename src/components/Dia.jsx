import { StyleSheet, Text, View } from "react-native";

export default function Dia(){
    return <View style={styles.container}>
        <Text style={styles.weekDay}>qua</Text>
        <Text style={styles.day}>5</Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
        alignItems: "center",
    },
    weekDay: {
        color: "#fff",
        fontSize: 20,        
        marginBottom: 5
    },
    day: {
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal: 15,
        textAlign: "center",
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold"
    }
});