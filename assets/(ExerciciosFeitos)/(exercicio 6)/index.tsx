import { Link, router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
    return (
        <View className="flex-1 bg-white px-6 justify-center">
            {/* Título */}
            <Text className="text-black text-4xl font-bold text-center mb-2">Bem vindo</Text>
            <Text className="text-gray-500 text-center mb-8">Entre com a sua conta</Text>

            {/* Campo Username */}
            <TextInput
                className="ml-3  bg-gray-100 rounded-full p-3 mb-4 shadow-md text-gray-700"
                placeholder="Usuario"
                placeholderTextColor="#aaa"
            />

            {/* Campo Password */}
            <TextInput
                className="ml-3  bg-gray-100 rounded-full p-3 mb-4 shadow-md text-gray-700"
                placeholder="Senha"
                placeholderTextColor="#aaa"
                secureTextEntry
            />

            {/* Forgot Password */}
            <Text className="text-gray-400 text-right mb-8">Esqueceu a senha?</Text>

            {/* Botão de Login */}
            <TouchableOpacity onPress={() => router.push("/home")} className="bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-full flex-row items-center justify-center shadow-lg">
                <Text className="text-white text-lg font-semibold">Entrar</Text>
            </TouchableOpacity>

            {/* Criar Conta */}
            <Text className="text-gray-500 text-center mt-6">
                Não tem uma conta ? <Text className="text-black font-semibold"><Link href={"./cadastro"}>Criar</Link></Text>
            </Text>
        </View>
    );
}
