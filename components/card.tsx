import { Text, View } from "react-native";

export default function Card({name} : {name:string}){


    return (
        <View className="py-2 border-b border-gray-200">
            <Text className="text-base text-gray-800">{name}</Text>
          </View>
    )
}