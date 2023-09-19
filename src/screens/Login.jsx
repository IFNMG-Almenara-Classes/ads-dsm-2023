import { View } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import axios from "axios";


function Login({navigation}){
    const [usuario, setUsuario] = useState({
        email: "",
        senha: ""
    })

    const handleLogin = async () => {
        try {
        const response = await axios.post("http://localhost:8000/usuario/autenticar",{
            usuario: usuario.email,
            senha: usuario.senha
        })

        navigation.navigate("Menu")

        } catch (ex){
            alert("Deu Erro!")
        }
           
    }   

    const handleEmail = (email) =>{
        setUsuario((prev)=>({...prev, email}))
    }

    const handleSenha = (senha) =>{
        setUsuario((prev)=>({...prev, senha}))
    }

    return(
     <View>
        <Input 
            rotulo="E-mail" 
            placeholder={"maria@email.com"} 
            onChange={handleEmail} />

        <Input 
            rotulo="Senha" 
            placeholder={"********"} 
            onChange={handleSenha} 
            senha={true} />

        <Button titulo="Entrar" onPress={handleLogin} />
     </View>
    )
}

export default Login;