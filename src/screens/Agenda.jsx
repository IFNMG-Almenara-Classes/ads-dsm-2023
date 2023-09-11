import { FlatList, StyleSheet, View } from "react-native";
import ItemAgenda from "../components/ItemAgenda";
import HeaderCalendario from "../components/HeaderCalendario";

const itens = [
    {
        id: 1,
        inicio: "10:30",
        fim: "11:30",
        descricao: "Avaliação de Matemática",
        professor: "Felix"
    },
    {
        id: 2,
        inicio: "12:30",
        fim: "13:30",
        descricao: "Avaliação de Quimica",
        professor: "Gama"
    },
    {
        id: 3,
        inicio: "10:30",
        fim: "11:30",
        descricao: "Avaliação de Português",
        professor: "Mayara"
    },
    {
        id: 4,
        inicio: "10:30",
        fim: "11:30",
        descricao: "Avaliação de Matemática",
        professor: "Felix"
    },
]

function Agenda(){
    return <View>
        <HeaderCalendario title={"Agenda"} style={{
            paddingBottom: 30
        }} />
        <FlatList 
            style={styles.list}
            data={itens}
            renderItem={({item})=><ItemAgenda item={item}/>}
            keyExtractor={(item)=>item.id}
        />        
    </View>;
}

const styles = StyleSheet.create({
    list: {
        marginTop: -30,
        paddingTop: 30,
        borderRadius: 30,
        paddingHorizontal: 15,
        backgroundColor: "#F3F2F9",
    }
})

export default Agenda;