import { Text, TextInput, View } from "react-native";

function Input({
    rotulo,
    placeholder,
    onChange, 
    senha
}){
    return <View style={{
        padding: 10
    }}>
        <Text>{rotulo}</Text>
        <TextInput 
            onChangeText={onChange}
        placeholder={placeholder}
            secureTextEntry={senha}
        style={{
            backgroundColor: "#ffffff",
            padding: 5,
            color: "#000000",
            borderRadius: 10
        }}  />
    </View>
}


export default Input;