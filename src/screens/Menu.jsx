import { FlatList, StyleSheet, Text, View } from "react-native";
import UserInfo from "../components/UserInfo";
import MenuItem from "../components/MenuItem";

const menuItens = [
    {nome: "Principal", rota:"Principal"},
    {nome: "Avisos"},
    {nome: "Agenda"},
    {nome: "Horarios"},
    {nome: "Calendario Escolar"},
    {nome: "Sair"}
]

function Menu({navigation}){
    return <View style={styles.container}>
        <UserInfo/>
        <FlatList 
            data={menuItens}
            renderItem={({item})=><MenuItem {...item} />}
            keyExtractor={item=>item.nome}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CD191E"
    }
})

export default Menu;