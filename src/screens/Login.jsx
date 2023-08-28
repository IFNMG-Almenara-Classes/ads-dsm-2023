import { View } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";

function Login({navigation}){
    
    const handleLogin = () => {
        navigation.navigate("Principal");
    }

    return(
     <View>
        <Input rotulo="E-mail" placeholder={"maria@email.com"} />
        <Input rotulo="Senha" placeholder={"********"} />
        <Button titulo="Entrar" onPress={handleLogin} />
     </View>
    )
}

export default Login;