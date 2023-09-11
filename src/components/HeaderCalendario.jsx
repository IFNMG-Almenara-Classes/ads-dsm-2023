import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import Avatar from "./Avatar";
import Icons from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";
import Dia from "./Dia";

export default function HeaderCalendario({
    title: titulo, style
}){

    const navigation = useNavigation();

    return <View style={{...styles.container, ...style}}>
                <View style={styles.containerTopo}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 20, paddingHorizontal: 10}}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icons name="chevron-left" size={32} color="#fff" />
                        </TouchableOpacity>
                        <Text style={styles.titulo}>{titulo}</Text>      
                    </View>
                    <Avatar />
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 20,
                }}>
                    <Text style={styles.opcoesData}>Diária</Text>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={styles.opcoesData}>Janeiro {" "}</Text>
                        <Icons name="chevron-down" size={25} color="#fff" />
                    </View>
                </View>
                <View style={styles.containerDias}> 
                    <Dia/>
                    <Dia/>
                    <Dia/>
                    <Dia/>
                    <Dia/>
                    <Dia/>
                </View>
            </View>;
}

const styles = StyleSheet.create({
    container: {        
        backgroundColor: "#CD191E"        
    },
    containerTopo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
    },
    titulo: {
        color: "#fff",
        fontSize: 30,
        fontWeight: 500
    },
    containerDias:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        marginHorizontal: 20
    },
    opcoesData: {
        color: "#fff",
        fontSize: 25,
    }
});