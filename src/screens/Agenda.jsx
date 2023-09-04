import { FlatList, View } from "react-native";
import ItemAgenda from "../components/ItemAgenda";

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
        <FlatList 
            data={itens}
            renderItem={({item})=><ItemAgenda item={item}/>}
            keyExtractor={(item)=>item.id}
        />        
    </View>;
}

export default Agenda;