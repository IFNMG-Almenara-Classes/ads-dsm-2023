import { Text, TextInput, View } from "react-native";

function Input({
    rotulo,
    placeholder
}){
    return <View style={{
        padding: 10
    }}>
        <Text>{rotulo}</Text>
        <TextInput 
        placeholder={placeholder}
        style={{
            backgroundColor: "#ffffff",
            padding: 5,
            color: "#000000",
            borderRadius: 10
        }}  />
    </View>
}


export default Input;