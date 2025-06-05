import Loading from "@/components/Loading";
import SearchInput from "@/components/searchInput";
import React, { useState, useDeferredValue, useMemo } from "react";
import { FlatList, Text, View } from "react-native";


const nomes = [
  "Ana", "Lucas", "Marcos", "Clara", "João", "Lia", "Pedro", "Rita", "Carlos", "Eva",
  "Luana", "Bruno", "Lúcio", "Cris", "Nina", "Igor", "Mara", "Renan", "Tina", "Diego",
  "Gabi", "Rafael", "Bia", "Vitor", "Léo", "Mila", "Caio", "Luna", "Tadeu", "Rosa",
  "Davi", "Zeca", "Inês", "Sandro", "Rui", "Jéssica", "Érico", "Paty", "Noah", "Fábio",
  "Susi", "Thiago", "Lívia", "Guto", "Nico", "Irene", "Joana", "Ciro", "Débora", "Alan"
];

export default function App() {
  const [busca, setBusca] = useState("");
  const buscaDeferida = useDeferredValue(busca);

  const nomesFiltrados = useMemo(() => {
    return nomes.filter((nome) =>
      nome.toLowerCase().includes(buscaDeferida.toLowerCase())
    );
  }, [buscaDeferida]);

  return (
    <View className="flex-1 bg-white px-4 pt-10">
      <Text className="text-2xl font-bold mb-4">Lista de Nomes</Text>

      <SearchInput value={busca} onChangeText={setBusca} />

      <FlatList
        data={nomesFiltrados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="py-2 border-b border-gray-200">
            <Text className="text-base text-gray-800">{item}</Text>
          </View>
        )}
        ListFooterComponent={() => <Loading/>}
        ListEmptyComponent={
          <Text className="text-center text-gray-500 mt-4">Nenhum nome encontrado.</Text>
        }
      />
    </View>
  );
}
