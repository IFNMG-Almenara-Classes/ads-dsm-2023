import { StyleSheet, Text, TouchableOpacity } from "react-native";

function MenuItem({nome, onPress}){
    return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{nome}</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    container:{
        padding: 5,
        marginVertical: 2,
    },
    text:{
        fontSize: 14,
        color: "#ffffff"
    }
})

export default MenuItem;