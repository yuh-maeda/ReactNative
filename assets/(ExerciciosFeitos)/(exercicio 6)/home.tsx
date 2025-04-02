import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Função para buscar os produtos da Fake Store API
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => console.error("Erro ao buscar produtos:", error));
    }, []);

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="#6200ea" />
            </View>
        );
    }

    return (
        <ScrollView className="flex-1 bg-white px-2">
            {products.map((item: any) => (
                <View key={item.id} className="flex-row items-center p-2 border-b border-gray-200">
                    <Image
                        source={{ uri: item.image }}
                        className="w-32 h-32 rounded-md"
                        resizeMode="contain"
                    />
                    <View className="ml-4 flex-1">
                        <Text className="text-gray-800 font-semibold">
                            {item.title}
                        </Text>
                        <Text className="text-green-600 text-lg font-bold mt-1">${item.price.toFixed(2)}</Text>

                        <TouchableOpacity className='bg-black justify-center items-center rounded-lg p-2 '>
                            <Text className='text-white'>Detalhes</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            ))}

        </ScrollView>
    )
}