import {useState} from "react";
import {View,Text,Button} from "react-native";

export default function App(){

    function mostrarMensagem():void{
        alert("Você clicou no botão!")

    }

    const[contador,setContador] = useState(0);

    function incrementar():void{
        setContador(contador+1);
    }

    function zerar():void{
        setContador(0);
    }

    return(
        <View className="flex-1 p-10 items-center gap-5">
            <Button title="Clique aqui" onPress={mostrarMensagem}/>
            
            <Text>Total: {contador}</Text>
            <Button title="Somar 1" onPress={incrementar}/>
            <Button title="Zerar" onPress={zerar}/>
        </View>
    )
}