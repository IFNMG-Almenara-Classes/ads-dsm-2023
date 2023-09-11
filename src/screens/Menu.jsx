import { FlatList, StyleSheet, Text, View } from "react-native";
import UserInfo from "../components/UserInfo";
import MenuItem from "../components/MenuItem";

const menuItens = [
    {nome: "Principal", rota:"Principal"},
    {nome: "Avisos"},
    {nome: "Agenda", rota:"Agenda"},
    {nome: "Horarios"},
    {nome: "Calendario Escolar"},
    {nome: "Sair"}
]

function Menu({navigation}){
    return <View style={styles.container}>
        <UserInfo/>
        <FlatList 
            data={menuItens}
            renderItem={({item})=><MenuItem {...item} onPress={()=>{
                navigation.navigate(item.rota);
            }} />}
            keyExtractor={item=>item.nome}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CD191E",
        paddingTop: 50,
        paddingLeft: 30        
    }
})

export default Menu;