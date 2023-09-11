import { View } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { app } from "../config/firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login({navigation}){
    const [usuario, setUsuario] = useState({
        email: "",
        senha: ""
    })

    const handleLogin = () => {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth,usuario.email, usuario.senha)
            .then((credenciais)=>{
                alert('Usuário autenticado')
                navigation.navigate("Menu");
            })
            .catch((error)=>{
                alert("Não possível autenticar");
                console.log(error);
            })        
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