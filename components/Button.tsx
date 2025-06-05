import { Text, TouchableOpacity, View } from "react-native";

type props = {
    titulo:string
    cor: "azul" | "vermelho"
    subtitulo?: string
    funcao?: ()=> void
    classname?: string
}

export default function Button({titulo, cor,subtitulo, funcao, classname}: props){
    let corBase

    switch (cor) {
        case "azul":
            corBase = "bg-blue-900"
            break;
        case "vermelho":
            corBase = "bg-red-500"
            break;
    
        default:
            break;
    }

    return (
        <TouchableOpacity className={`${corBase} ${classname}`} onPress={funcao}>
            <Text className="text-2xl">{titulo}</Text>
            <Text>{subtitulo}</Text>
        </TouchableOpacity>
    )
}