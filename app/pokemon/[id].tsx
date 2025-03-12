import { Image, Text, View } from "react-native";

export default function Pokemon() {
    return (
        <View className="flex-1 bg-white p-6">
            <View className="bg-[#F6F6F6] items-center justify-center rounded-lg">
                <Image
                    className="w-40 h-40"
                    source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" }}
                />
            </View>

            <Text className="text-2xl font-bold mt-10">Nome</Text>
            <Text className="text-2xl">tipo</Text>

            <View className="flex-row gap-10 mt-10">
                <View className=" p-5 border border-[#F2F2F2] rounded-md justify-center items-center">
                    <Text className="font-bold text-2xl">6.7kg</Text>
                    <Text className="text-xl">Peso</Text>
                </View>
                <View className="border p-5 border-[#F2F2F2] rounded-md justify-center items-center">
                    <Text className="font-bold text-2xl">6.7m</Text>
                    <Text className="text-xl">Altura</Text>
                </View>
            </View>

            <Text className="text-2xl font-bold mt-10">Evoluções</Text>
            <View className="flex-row justify-between">
                <View>
                    <View className="bg-[#F6F6F6] rounded-md">
                        <Image
                            className="w-32 h-32"
                            source={{ uri: "https://raw.githubuserco…pokemon/other/home/6.png" }}
                        />
                    </View>
                    <Text>nome evoluçao</Text>
                </View>
                <View>
                    <View className="bg-[#F6F6F6] rounded-md">
                        <Image
                            className="w-32 h-32"
                            source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" }}
                        />
                    </View>
                    <Text>nome evoluçao</Text>
                </View>
                <View>
                    <View className="bg-[#F6F6F6] rounded-md">
                        <Image
                            className="w-32 h-32"
                            source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" }}
                        />
                    </View>
                    <Text>nome evoluçao</Text>
                </View>
                
            </View>
        </View>
    )
}