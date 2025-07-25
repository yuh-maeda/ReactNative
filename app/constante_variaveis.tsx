import {useState} from "react";
import {View,Text,Button} from "react-native";

export default function App(){
    const[contador,setContador] = useState<number>(0);
    const[usuario,setUsuario] = useState<Usuario>({
        id:1,
        nome:'Manoel',
        email:'Manoel@123.com'
    });

    type Usuario ={
        id: number;
        nome:string;
        email:string;
    }

    function saudacao(): void{
        console.log("Hello World")
    }
    
    saudacao()

    function somar(n1: number, n2: number):number{
        return n1+n2
    }

    console.log(somar(3,7))

    return(
        <View className="flex-1 flex-col items-center justify-center gap-10">
            <Text>Você clicou {contador} vezes</Text>
            <Button title="Clique aqui" onPress={()=> setContador(contador + 1)}/>
            <Button title="Atualizar usuário" onPress={()=> setUsuario({
                    id:2,
                    nome:'Yuri',
                    email:'yurimaeda@gmail.com'
                })
            }/>

            <Text>{usuario.id} | {usuario.nome} | {usuario.email}</Text>

        </View>
    )
}