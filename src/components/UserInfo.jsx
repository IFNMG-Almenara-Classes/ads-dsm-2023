import { StyleSheet, Text, View } from "react-native";
import Avatar from "./Avatar";

function UserInfo({}){
    return <View style={styles.container}>
        <Avatar/>
        <View style={styles.containerNome}>
            <Text style={styles.textNome}>Nome Usario</Text>
            <Text style={styles.textLink}>Visualizar Perfil</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 5,
        alignItems: "center",
        paddingVertical: 20
    },
    containerNome:{
        marginLeft: 10
    },
    textNome:{
        color: "#ffffff",
        fontSize:20,
        fontWeight: "bold"
    },
    textLink: {
        color: "#F3CECE",
        fontSize:18,
    }
});

export default UserInfo;